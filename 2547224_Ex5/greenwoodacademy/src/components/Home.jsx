import { useEffect } from "react";

import classroomImg from "../assets/classroom.jpg";
import videoFile from "../assets/videoplayback.mp4";
import audioFile from "../assets/videoplayback.mp3";
import vttFile from "../assets/NoteGPT_CLASSROOM TOUR.vtt";
import img1 from "../assets/istockphoto-505551939-612x612.jpg";
import img2 from "../assets/istockphoto-457448925-612x612.jpg";
import img3 from "../assets/Bis-Sports-day-11-min-1024x683.jpg";

function Home() {
    useEffect(() => {
        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }
    }, []);

    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            <header className="bg-green-800 text-white">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold">Greenwood Academy</h1>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-home"></i> Home</a>
                        <a href="#about" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-school"></i> About</a>
                        <a href="#gallery" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-images"></i> Gallery</a>
                        <a href="/Contact" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-envelope"></i> Contact</a>
                        <a href="/Services" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-envelope"></i> Services</a>
                        <a href="/registration.html" className="flex items-center gap-1 hover:text-yellow-300"><i className="fa-solid fa-file"></i> Registration</a>
                    </nav>
                    <button id="menuBtn" className="md:hidden">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                <div id="mobileMenu" className="md:hidden hidden bg-green-700 p-4 space-y-2">
                    <a href="#home" className="block">Home</a>
                    <a href="#about" className="block">About</a>
                    <a href="#gallery" className="block">Gallery</a>
                    <a href="#contact" className="block">Contact</a>
                    <a href="/registration.html" className="block">Registration</a>
                </div>
            </header>

            <section id="home" className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center bg-black/50 bg-blend-multiply" style={{ backgroundImage: `url(${classroomImg})` }}>
                <div className="bg-black bg-opacity-70 p-8 rounded">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Greenwood Academy</h2>
                    <p className="mb-6">Empowering young minds through education and innovation</p>
                    <a href="#about" className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300">Learn More</a>
                </div>
            </section>

            <section id="about" className="p-6 bg-white">
                <h2 className="text-2xl font-bold mb-4">About Greenwood Academy</h2>
                <p className="mb-4">
                    Greenwood Academy is committed to nurturing academic excellence, character, and holistic development.
                    Our modern infrastructure, dedicated faculty, and forward-thinking curriculum prepare students for success
                    in the classroom and beyond.
                </p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Highly Qualified and Experienced Faculty</li>
                    <li>Modern Smart Classrooms and Labs</li>
                    <li>Focus on Academic and Co-curricular Excellence</li>
                    <li>Safe and Inclusive Campus Environment</li>
                    <li>Eco-Friendly Initiatives and Green Campus</li>
                </ul>
            </section>

            <section id="video" className="p-6 bg-gray-50">
                <h2 className="text-2xl font-bold mb-4">Campus Tour</h2>
                <video controls width="100%" className="rounded shadow" muted>
                    <source src={videoFile} type="video/mp4" />
                    <track
                        src={vttFile}
                        kind="subtitles"
                        srcLang="en"
                        label="Subtitles"
                        default
                    />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section className="p-6 bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">School Anthem</h2>
                <div className="flex justify-center">
                    <audio controls>
                        <source src={audioFile} type="audio/mp3" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </section>

            <section id="gallery" className="p-6 bg-gray-50">
                <h2 className="text-2xl font-bold mb-4 text-center">Our Gallery</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                    <img src={img1} alt="Library" className="rounded shadow" />
                    <img src={img2} alt="Lab" className="rounded shadow h-[400px] w-[600px]" />
                    <img src={img3} alt="Sports" className="rounded shadow" />
                </div>
            </section>

            <section className="p-6 bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
                <div className="mt-6 flex justify-center">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=77.60407447814943%2C12.931956896248895%2C77.60729849338533%2C12.936008840596902&amp;layer=mapnik&amp;marker=12.933982876648926%2C77.60568648576736"
                        style={{ border: "1px solid black" }}
                        title="Map">
                    </iframe>
                </div>
            </section>

            <footer className="bg-green-900 text-white p-4 text-center">
                <p>&copy; 2025 Greenwood Academy | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Home;
