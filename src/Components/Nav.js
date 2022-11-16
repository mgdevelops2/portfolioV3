import Logo from "../Assets/Logo.png";
import React, { useState } from "react";
import Style from "./Nav.module.scss";
import Toggler from "./Utilities/ToggleBtn";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Home",
    to: "/portfoliov3/",
    active: "Home",
  },
  {
    name: "portfolio",
    to: "/portfoliov3/portfolio",
    active: "portfolio",
  },
  {
    name: "contact",
    to: "/portfoliov3/contactForm",
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
        <a class="navbar-brand" href="/portfoliov3/">
          <img
            id="MGD-logo"
            src={Logo}
            alt="MGD-Logo"
            draggable="false"
            height="75"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto align-items-center">
            {links.map((link, index) => (
              <div
                key={index}
                component={"li"}
                className={link.active === active && !link.type && Style.active}
              >
                <Link to={link.to} onClick={() => setActive(link.active)}>
                  {!link.type && (
                    <p
                      class="mx-4 my-1 fs-6"
                      style={{ paddingBottom: "0.5rem" }}
                    >
                      {link.name}
                    </p>
                  )}
                  {link.type && <h1>{link.name}</h1>}
                </Link>
              </div>
            ))}
            {/* <a
              class="btn btn-outline-secondary mx-4"
              href="https://drive.google.com/file/d/1XFJODcFVwFrgKV8Qj2D-xfeNxSAJgfco/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a> */}
          </ul>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}
