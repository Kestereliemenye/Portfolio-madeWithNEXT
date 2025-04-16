import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

const About = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="about-intro"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-container"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="about-img"
          style={{ width: "300px", height: "400px" }}
        >
          <Image
            src={"/portfolio-profile.jpg"}
            alt="user"
            width={100}
            height={100}
            style={{
              borderRadius: "24px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="about-content"
        >
          <p className="about-text">
            I am an frontend developer with over 2 years of learning experience.
            I am starting to build my work experience and grow as a developer.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="about-tags"
          >
            <motion.span whileHover={{ scale: 1.05 }}>
              <Image src={"/tagII.png"} alt="tag" width={40} height={40} />
              <h3>Languages</h3>
              <p>Html, CSS, JavaScript, Node.Js, REACT, Next.js</p>
            </motion.span>
            <motion.span whileInView={{ scale: 1.05 }}>
              <Image src={"/education.png"} alt="tag" width={40} height={35} />
              <h3>Education</h3>
              <p>First class 2nd year student Leadcity University</p>
            </motion.span>
            <motion.span whileInView={{ scale: 1.05 }}>
              <Image src={"/project.png"} alt="tag" width={40} height={35} />
              <h3>Projects</h3>
              <p>Built more than 10 projects see my Gitbub...</p>
            </motion.span>
          </motion.div>
          <span>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              style={{
                margin: "24px 0",
                color: "#374151",
                fontFamily: "Ovo",
                textAlign: "left",
              }}
            >
              Tools i use
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="tools"
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              <motion.li
              whileHover={{scale:1.1}}>
                <Image
                  className="tools-img"
                  src={"/vscode.png"}
                  alt="tag"
                  width={40}
                  height={25}
                />
              </motion.li>
              <motion.li
              whileHover={{scale:1.1}}>
                <Image
                  className="tools-img"
                  src={theme === "dark" ? "/mongo-dark.png" : "/mongodb.png"}
                  alt="tag"
                  width={40}
                  height={25}
                />
              </motion.li>
              <motion.li
              whileHover={{scale:1.1}}>
                <Image
                  className="tools-img"
                  src={theme === "dark" ? "/github-dark.png" : "/github.png"}
                  alt="tag"
                  width={40}
                  height={25}
                />
              </motion.li>
              <motion.li
              whileHover={{scale:1.1}}>
                <Image
                  className="tools-img"
                  src={theme === "dark" ? "/figma-dark.png" : "/figma.png"}
                  alt="tag"
                  width={40}
                  height={25}
                />
              </motion.li>
            </motion.ul>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
