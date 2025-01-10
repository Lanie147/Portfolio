import React, { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine, RiMailFill } from "@remixicon/react";
import ross from "../assets/Ross.webp";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.6 },
      });
      tl.from(".hero-title", {
        opacity: 0,
        y: -50,
        scale: 0,
        duration: 0.7,
        stagger: 0.15,
      })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-img",
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.8,
          },
          "-=0.5"
        );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-4 md:gap-6 lg:gap-6"
      ref={heroRef}
    >
      <div className="mt-8 md:mt-20 lg:mt-20">
        <h1 className="hero-title text-4xl uppercase md:text-7xl lg:text-7xl">
          {PROFILE.name}
        </h1>
        <h2 className="hero-subheading bg-gradient-to-b from-white bg-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent">
          {PROFILE.role}
        </h2>
      </div>
      <p className="hero-text max-w-xl p-2 text-center text-xl tracking-tighter md:text-2xl lg:text-2xl">
        {PROFILE.subheading}
      </p>
      <a
        href="/Ross-Lane-Cv-Pav.pdf"
        target="_blank"
        download
        className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
        rel="noopener noreferrer"
      >
        <span>Download CV</span>
        <RiArrowRightUpLine />
      </a>
      {/* <img
        src={ross}
        alt={PROFILE.name}
        height="400"
        width="400"
        className="hero-img rounded-3xl border border-purple-300/20 p-1"
      /> */}
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
        <a
          href="mailto:ross.lane1999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Send me an email"
        >
          <RiMailFill className="text-3xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
