import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 text-xl h-screen justify-center items-center border border-transparent bg-bg bg-opacity-80 md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
