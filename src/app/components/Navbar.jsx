import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("UL class:", isScroll ? "ul-scroll" : "");
// useing th useTHhme hook 
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={isScroll ? "nav-scroll" : ""}>
        <a href="">
          <Image
            src="/top-DP.jpeg"
            alt="logo"
            width={90}
            height={90}
            style={{ cursor: "pointer" }}
          />
        </a>

        <ul className={`nav-ul ${isScroll ? "ul-scroll" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {/* appearance mode */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={toggleTheme} //added toggle
          >
            <img
              src={theme === "dark" ? "/sunII.png" : "/moon-icon.png"}
              alt="moon"
              style={{ width: "40px", height: "40px" }}
            />
          </button>

          <a className="second-contatct" href="#contact">
            Contact <img src="/arrow.png" alt="arrow" width={12} height={12} />
          </a>

          {/* menu button */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "12px",
            }}
            className="menu-nav"
            onClick={openMenu}
          >
            <img
              src="/menu.png"
              alt="moon"
              style={{ width: "30px", height: "30px" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className="mobile-menu">
          {/* close-menu button */}
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              cursor: "pointer",
            }}
            className="close-menu"
            onClick={closeMenu}
          >
            <img
              src={ theme === "dark"? "/close-icon-dark.png" :"/close-icon.png"}
              alt="close"
              style={{ width: "50px", height: "50px" , marginTop:"20px" }}
            />
          </div>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
