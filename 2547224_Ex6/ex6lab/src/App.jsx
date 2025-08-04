import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const ACCESS_KEY = "JKMMMiCaizwnsTmEyKGClGoX0ol5VjC-comVX8U4I7I";

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: "school",
          per_page: 9,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then((res) => {
        setImages(res.data.results);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">School Photo Gallery</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {images.map((img) => (
          <div key={img.id} className="bg-white shadow-md rounded overflow-hidden">
            <img src={img.urls.small} alt={img.alt_description} className="w-full h-64 object-cover" />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
