import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#1a1b2d] text-base-content p-4 justify-items-center md:justify-items-center">
      <nav>
        <img
          src="/warp.png"
          alt=""
          className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px]"
        />
        <p>WarpPass © 2025</p>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover ">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
    </footer>
  );
};

export default Footer;
