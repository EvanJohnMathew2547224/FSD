import React from "react";

function CourseCard({ title, instructor, description }) {
  return (
    <div className="bg-white shadow-md rounded p-4 border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-1"><strong>Instructor:</strong> {instructor}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default CourseCard;
