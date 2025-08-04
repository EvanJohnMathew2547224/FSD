import React, { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

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

            <main className="flex-grow p-6">
                <h2 className="text-2xl font-bold mb-4 flex justify-center items-center">Contact Us</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                        <input type="text" placeholder="Your Name" required className="w-full p-2 border rounded" />
                        <input type="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
                        <textarea placeholder="Your Message" required className="w-full p-2 border rounded h-40" />
                        <div className="flex justify-center">
                            <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900">Send</button>
                        </div>
                    </form>
                ) : (
                    <p className="text-green-700 text-center text-xl font-semibold">Thank you for contacting us!</p>
                )}
            </main>

            <footer className="bg-green-900 text-white p-4 text-center">
                <p>&copy; 2025 Greenwood Academy | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default Contact;
