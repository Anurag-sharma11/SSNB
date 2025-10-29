import React from "react";
import AppNavbar from "../components/AppNavbar";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-blue-400">About Us</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            Welcome to <span className="font-semibold text-blue-400">Seva Sai Nursing Bureau</span> — 
            a trusted name in providing skilled and compassionate nursing staff across Delhi NCR.
            Our mission is to deliver quality healthcare assistance and support for patients at home and hospitals.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            We specialize in trained nurses, attendants, and caretakers who focus on improving 
            patients’ comfort, recovery, and overall well-being. 
            Whether it’s 24/7 care or part-time support, we ensure you get the best service with empathy and professionalism.
          </p>

          <div className="mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
