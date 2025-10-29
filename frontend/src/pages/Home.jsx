import React from "react";
import AppNavbar from "../components/AppNavbar";

export default function Home() {
  return (
    <>
      <AppNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to SSNB Website 🚀</h1>
        <p className="mt-4 text-lg text-gray-300">
          React-Bootstrap Navbar is working perfectly!
        </p>
      </div>
    </>
  );
}
