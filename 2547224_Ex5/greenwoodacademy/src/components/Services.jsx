import React from "react";

function Services() {
    return (
        <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
            <header className="bg-green-800 text-white">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-xl font-bold">Greenwood Academy</h1>
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-home"></i> Home</a>
                        <a href="/" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-school"></i> About</a>
                        <a href="/" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-images"></i> Gallery</a>
                        <a href="/Contact" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-envelope"></i> Contact</a>
                        <a href="/Services" className="flex items-center gap-1 hover:text-yellow-300"><i className="fas fa-envelope"></i> Services</a>
                        <a href="/registration.html" className="flex items-center gap-1 hover:text-yellow-300"><i className="fa-solid fa-file"></i> Registration</a>
                    </nav>
                </div>
            </header>

            <main className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Academic Counseling and Guidance</li>
                    <li>Online and In-person Classes</li>
                    <li>Extra-curricular Activities and Clubs</li>
                    <li>Library and Lab Access</li>
                    <li>Transportation and Hostel Facilities</li>
                </ul>
            </main>

            <footer className="bg-green-900 text-white p-4 text-center">
                <p>&copy; 2025 Greenwood Academy | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Services;
