import React, { useState } from "react";
import Style from "./Nav.module.scss";
import { Link, useLocation } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import Toggler from "./Utilities/ToggleBtn";

const links = [
  {
    name: "Home",
    to: "/portolfiov3/",
    active: "Home",
  },
  {
    name: "portfolio",
    to: "/portolfiov3/portfolio",
    active: "portfolio",
  },
  {
    name: "contact",
    to: "/portolfiov3/contactForm",
    active: "contactMe",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light text-dark sticky-top shadow-sm my-1"
      component={"nav"}
      width={"100%"}
    >
      <div
        class="container container-fluid"
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
      >
        <a class="navbar-brand" href="/portolfiov3/">
          <img
            id="MGD-logo"
            src={Logo}
            alt="MGD-Logo"
            draggable="false"
            height="75"
          />
        </a>

        {links.map((link, index) => (
          <div
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
          >
            <Link to={link.to} onClick={() => setActive(link.active)}>
              {!link.type && (
                <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </div>
        ))}
        <a
          class="btn btn-outline-secondary btn-rounded"
          href="https://drive.google.com/file/d/1C7Xux-yypJCIU5KcisPC2K_0dsFTA8_m/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <Toggler darkMode={darkMode} handleClick={handleClick} />
      </div>
    </nav>
  );
}
