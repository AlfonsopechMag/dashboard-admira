import React from "react";
import { SiGoogleanalytics } from "react-icons/si";

export default function Sidebar() {
  const links = [
    {
      title: "PRINCIPAL",
      icon: SiGoogleanalytics,
    },
  ];
  return (
    <div className="sidebar">
      <div className="brand">
        <h2>
          DASH<span>BOARD</span>
        </h2>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li>
              <a href="#">
                {<link.icon />}
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
