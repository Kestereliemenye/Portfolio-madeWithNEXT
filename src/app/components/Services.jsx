import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

const Services = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="services-intro"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="services-text"
      >
        I am a fulllstact developer from Lagos, Nigeria with 2.5 years of
        experience.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.5}}
        className="services-work"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={theme === "dark" ? "/web-dark.png" : "/website.png"}
            alt="website-logo"
            width={40}
            height={40}
          />
          <h3>Web design</h3>
          <p>Web development is the process of building programming...</p>
          <a href="">
            Read more
            <Image
              src={"/right-arrow.png"}
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
        </motion.span>
        <motion.span 
        whileHover={{scale:1.05}}>
          <Image
            src={theme === "dark" ? "/app-dark.png" : "/appII.png"}
            alt="website-logo"
            width={40}
            height={40}
          />
          <h3>Mobile App</h3>
          <p>
            Mobile app development involves creating software for mobile
            devices...
          </p>
          <a href="">
            Read more
            <Image
              src={"/right-arrow.png"}
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
        </motion.span>
        <motion.span 
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={theme === "dark" ? "/ui-dark.png" : "/ui.png"}
            alt="website-logo"
            width={40}
            height={40}
          />
          <h3>UI/UX design</h3>
          <p>UI/UX design focuses on creating a seamless user experience...</p>
          <a href="">
            Read more
            <Image
              src={"/right-arrow.png"}
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
        </motion.span>
        <motion.span 
        whileHover={{scale:1.05}}>
          <Image
            src={"/graphic-design.png"}
            alt="website-logo"
            width={40}
            height={40}
          />
          <h3>Graphic Design</h3>
          <p>Creating design solutions to enhance visual communications...</p>
          <a href="">
            Read more
            <Image
              src={"/right-arrow.png"}
              alt="right-arrow"
              width={16}
              height={16}
            />
          </a>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Services;
