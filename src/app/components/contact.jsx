import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "motion/react";

const contact = () => {
  // FORM SETUP
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f7266e02-b07f-4acf-8a4a-e6619f353309");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  //to use dark mode
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="services-intro"
      style={{
        backgroundImage:
          theme === "dark"
            ? "url(/bg-contact-dark.avif)"
            : "url(/bgContact.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "90% auto",
        backgroundPosition: "center",
      }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="services-text"
      >
        I`d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="contact-form"
      >
        <div className="form-input">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            name="name"
            className="input-name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            name="email"
            className="input-mail"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="6"
          placeholder="Enter your message"
          required
        ></motion.textarea>
        <motion.button
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
          type="submit" name="message">
          Submit now{" "}
          <Image
            src={"/right-arrow-white.png"}
            alt="arrow"
            width={13}
            height={13}
          />
        </motion.button>
        <p style={{ marginTop: "16px" }}>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default contact;
