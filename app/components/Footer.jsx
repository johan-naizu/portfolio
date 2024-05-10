import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-bg border z-10 border-t-[#A2B8BE] border-l-transparent border-b-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between mx-auto">
        <Link
          href={"#hero"}
          scroll={true}
          className="text-2xl md:text-5xl text-secondary font-semibold"
        >
          <Image src="/images/logo.svg" alt="Logo" width={75} height={75} />
        </Link>{" "}
        <p className="text-[#ADB7BE] flex flex-col justify-center items-center">
          © 2024 Johan Naizu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
