import React from "react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiConvertio } from "react-icons/si";
import { TfiViewListAlt } from "react-icons/tfi";

function removegergon(input) {
  let text = input;

  // Remove hidden characters
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, "");

  // Clean URLs
  text = text.replace(/(https?:\/\/[^\s]+)/g, (url) => {
    try {
      const u = new URL(url);
      // Remove tracking params
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_term",
        "utm_content",
        "fbclid",
      ].forEach((p) => u.searchParams.delete(p));
      return (
        u.origin +
        u.pathname +
        (u.search ? "?" + u.searchParams.toString() : "")
      );
    } catch {
      return url;
    }
  });

  return text;
}

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-blue-600 to-blue-900 text-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold">Clean Copy Paste Wizard</div>
          <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg cursor-pointer flex items-center gap-2">
            <TfiViewListAlt />
            View Portfolio
          </button>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-20 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-xl md:text-5xl font-bold leading-tight">
              Turn messy text and URLs into clean, simple copy.
            </h4>
            <textarea className="w-full max-w-lg h-40 p-3 border rounded mb-4 text-center justify-center gap-2 mt-4">
              Past your text or URL here.........
            </textarea>
            <p className="mt-4 text-lg">
              Cut the clutter. Get clean text with Gergon Remover.
            </p>
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer">
              Convert <SiConvertio />
            </button>
          </div>

          <div>
            {/* {file ? (
              <p className="text-green-600 font-semibold">{file.name}</p>
            ) : (
              <p className="text-gray-500">Drag & Drop your file here</p>
            )} */}
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            {/* Replace with your image/illustration */}
            <img
              src="./herobg.png"
              alt="Rocket Launch Illustration"
              className="w-80 md:w-100 rounded-4xl"
            />
          </div>
        </section>

        {/* Credentials Section */}
        <section className="flex flex-wrap justify-center text-xl gap-12 px-8 py-12 bg-blue-700">
          <div>
            <a href="">
              <FaFacebook />
            </a>
          </div>
          <div>
            <a href="">
              {" "}
              <FaWhatsapp />
            </a>
          </div>
          <div>
            <a href="">
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <div>📈 1+ Years Experience</div>
        </section>
      </div>
    </>
  );
};

export default Home;
