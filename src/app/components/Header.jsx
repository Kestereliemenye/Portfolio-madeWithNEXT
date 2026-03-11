import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={"/top-DP.jpeg"}
            alt="logo"
            width={100}
            height={130}
            className="header-img"
          />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="header-name"
        >
          HI I'M Kester Eliemenye{" "}
          <Image
            src={"/wave-hand.png"}
            alt="hand-wave-icon"
            width={24}
            height={24}
            style={{ width: "24px", height: "24px" }}
          />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="header-title"
          style={{ fontSize: "1.75rem", fontFamily: "Ovo" }}
        >
          I'm a frontend developer based in Lagos.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            fontFamily: "Ovo",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "672px",
          }}
        >
          I am a fullstatck developer with 2.5 years of experience
        </motion.p>
        <div className="header-btns">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href={"#contact"}
            style={{
              border: "1px solid white",
              backgroundColor: "black",
              color: "white",
              textDecoration: "none",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 40px",
            }}
          >
            contact me{" "}
            <Image
              src={"/arrow.png"}
              alt=""
              style={{ width: "16px" }}
              width={16}
              height={16}
            />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href={"/sample-resume.docx"}
            download
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 40px",
            }}
          >
            My resume{" "}
            <Image
              src={"/download-icon.png"}
              alt="downlaod"
              style={{
                width: "16px",
              }}
              width={16}
              height={16}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
