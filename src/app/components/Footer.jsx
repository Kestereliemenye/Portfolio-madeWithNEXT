import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
const Footer = () => {
     const { theme, toggleTheme } = useTheme();
  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ textAlign: "center" }}>
        <Image
          src={"/top-DP.jpeg"}
          alt="logo"
          width={40}
          height={40}
          style={{ width: "100px", height: "100px", margin: "0 8px auto" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "0 auto",
            width: "max-content",
          }}
        >
          <Image
            src={theme === "dark" ? "/mail-dark.png" : "/mail-icon.png"}
            alt="logo"
            width={20}
            height={20}
            style={{ width: "22px" }}
          />
          kestereliemenye@gmail.com
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 Kester Mark. All rights reserved.</p>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/Kestereliemenye">
              Github
            </a>
          </li>
          <li>
            {" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eliemenye-kester-8336a8241/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
