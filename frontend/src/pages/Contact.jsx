import React from "react";
import AppNavbar from "../components/AppNavbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-6">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-400">Contact Us</h1>
          <p className="text-gray-300 mb-8">
            Have questions or need support? Fill out the form below and our team will get back to you shortly.
          </p>

          <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div>
              <label className="block text-left text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-left text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-left text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-xl font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
