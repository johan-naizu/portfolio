import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center border border-transparent border-b-white">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
