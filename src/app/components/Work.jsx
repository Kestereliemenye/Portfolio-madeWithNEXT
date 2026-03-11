import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="services-intro"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        style={{ fontSize: "36px" }}
      >
        My latest works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="services-text"
      >
        welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise is fullstatck deveklopment.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="works-display"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="work"
          style={{ backgroundImage: "url(/webDesignImg.jpeg)" }}
        >
          <span className="work-content">
            <span>
              <h2>Frontend Project</h2>
              <p>Web Design</p>
            </span>
            <span className="icon">
              <Image
                src={"/send.png"}
                alt="right-arrow"
                width={16}
                height={16}
              />
            </span>
          </span>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="work"
          style={{ backgroundImage: "url(/webDesignImg.jpeg)" }}
        >
          {" "}
          <span className="work-content">
            <span>
              <h2>GEO based app</h2>
              <p>Mobile app</p>
            </span>
            <span className="icon">
              <Image
                src={"/send.png"}
                alt="right-arrow"
                width={16}
                height={16}
              />
            </span>
          </span>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="work"
          style={{ backgroundImage: "url(/webDesignImg.jpeg)" }}
        >
          {" "}
          <span className="work-content">
            <span>
              <h2>Photography site</h2>
              <p>Web Design</p>
            </span>
            <span className="icon">
              <Image
                src={"/send.png"}
                alt="right-arrow"
                width={16}
                height={16}
              />
            </span>
          </span>
        </motion.span>
        <motion.span
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="work"
          style={{ backgroundImage: "url(/webDesignImg.jpeg)" }}
        >
          {" "}
          <span className="work-content">
            <span>
              <h2>UI/UX designing</h2>
              <p>UI/UX Design</p>
            </span>
            <span className="icon">
              <Image
                src={"/send.png"}
                alt="right-arrow"
                width={16}
                height={16}
              />
            </span>
          </span>
        </motion.span>
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="showMoreLink"
      >
        Show more{" "}
        <Image
          src={"/right-arrowII.png"}
          alt="right-arrow"
          width={16}
          height={16}
          style={{ width: "16px" }}
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
