// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const feedbackList = document.getElementById("feedbackList");
  const charCount = document.getElementById("charCount");
  const commentsBox = document.getElementById("comments");
  const clearAllBtn = document.getElementById("clearAll");

  if (sessionStorage.getItem("visited")) {
    alert("👋 Welcome back!");
  } else {
    sessionStorage.setItem("visited", "true");
  }

  displayFeedbacks();

  commentsBox.addEventListener("input", () => {
    charCount.textContent = commentsBox.value.length;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const rating = form.querySelector('input[name="rating"]:checked')?.value || "";
    const comments = commentsBox.value.trim();

    const feedback = { name, email, department, rating, comments, date: new Date().toLocaleString() };

    const allFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    allFeedbacks.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(allFeedbacks));

    form.reset();
    charCount.textContent = 0;
    displayFeedbacks();
  });

  clearAllBtn.addEventListener("click", () => {
    localStorage.removeItem("feedbacks");
    displayFeedbacks();
  });

  function displayFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbackList.innerHTML = "";

    feedbacks.forEach(fb => {
      const card = document.createElement("div");
      card.className = "p-4 border bg-white rounded shadow";

      card.innerHTML = `
        <h4 class="text-lg font-bold">${fb.name}</h4>
        <p class="text-sm text-gray-500">${fb.email} | ${fb.department} | Rating: ${fb.rating}</p>
        <p class="mt-2">${fb.comments || "<i>No comments</i>"}</p>
        <p class="text-xs text-gray-400 mt-2">${fb.date}</p>
      `;

      feedbackList.appendChild(card);
    });
  }
});
