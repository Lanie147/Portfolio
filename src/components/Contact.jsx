import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a href="mailto:ross.lane1999@gmail.com" className="border-b">
            ross.lane1999@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/ross-lane"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/Lanie147"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
