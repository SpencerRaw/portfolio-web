"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I help my clients{" "}
        <span className="font-medium">build powerful AI solutions</span> to keep
        them <span className="italic">one step ahead of the competition</span>.
        With AI affecting every industry at a rapid pace, those who make{" "}
        <span className="underline">bold strides</span> have a chance to
        increase their market share.{" "}
        <span className="font-medium">Sharing my knowledge</span> with other
        entrepreneurs for free on YouTube.
      </p>

      <p>
        <span className="italic">When I'm not working on AI solutions</span>, I
        enjoy <span className="font-medium">sharing my knowledge</span> and
        experiences with a wider audience. I am committed to{" "}
        <span className="font-medium">empowering others</span> by making complex
        technological concepts accessible to all. I am currently learning about{" "}
        <span className="font-medium">
          the latest advancements in AI and machine learning
        </span>{" "}
        to stay at the forefront of the industry.
      </p>
    </motion.section>
  );
}
