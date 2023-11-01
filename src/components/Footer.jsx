import React from "react";
import SectionWrapper from '../hoc/SectionWrapper';

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative flex flex-col ">
      <div
        style={{ backgroundColor: "rgb(46 14 80)", height: "10px" }} // Set background color and height
        className="mb-12 z-10"
      ></div>

      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="inline-block text-3xl border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <a
            href="https://www.facebook.com/profile.php?id=100032791001786&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-blue-600" />
          </a>
        </div>

        <div className="inline-block text-3xl border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <a
            href="https://www.instagram.com/callme_debugger/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-pink-600" />
          </a>
        </div>

        <div className="inline-block text-3xl border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <a
            href="https://www.youtube.com/channel/UCRQAOJOYsTYRhuRAD_nIzYQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600" />
          </a>
        </div>

        <div className="inline-block text-3xl border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <a
            href="https://www.linkedin.com/in/arvindk2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-blue-800" />
          </a>
        </div>

        <div className="inline-block text-3xl border-[1px] rounded-md p-2 cursor-pointer hover:bg-gray-200 hover:shadow-md">
          <a
            href="https://github.com/arvindk2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-gray-600" />
          </a>
        </div>
      </div>

      <p className="relative top-2 text-center text-sm">
        &#169; Arvind_kumar - 2023.
      </p>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
