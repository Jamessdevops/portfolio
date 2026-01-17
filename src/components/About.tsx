"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function About() {
  const images = [
    "/images/coding1.png",
    "/images/coding3.png",
    "/images/coding2.png",
    "/images/coding4.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          I am a Software Development Engineer currently building scalable solutions at Zoho, where I have spent the last two years mastering product engineering.
          My work focuses on the full development lifecycle, ensuring that every piece of code I ship is production-ready, reliable, and able to serve users efficiently at scale.
        </p>
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          My engineering philosophy is deeply rooted in rigorous problem-solving and a relentless drive for algorithmic optimization. I don't just write code that functions;
          I strive to create logic that is computationally efficient, clean, and capable of handling complex edge cases without breaking under pressure.
        </p>

        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          This obsession with performance has driven me to solve over 1,000 algorithmic problems on LeetCode to date. Through consistent high-level competition, I have achieved a peak contest rating of 1890, placing me in the top 5% of global programmers and earning the prestigious Knight badge.
        </p>
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          However, I believe that elite technical skill is most valuable when it is shared with the wider developer community. I have expanded my focus beyond competitive coding into the world of open source, applying my algorithmic background to create utilities that solve real-world problems for other engineers.
        </p>
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          My most exciting contributions have been centered around the rapidly evolving Python ecosystem and the modern AI stack. I have authored and published specialized libraries designed for AI, bridging the gap between complex model implementations and developer productivity to make integration smoother.
        </p>
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          I build these tools because I believe the future of software lies in accessible, modular, and intelligent infrastructure. By creating packages that streamline these complex tasks, I aim to empower other developers to build smarter applications faster and with significantly less friction.
        </p>
        <p className={`text-sm lg:text-base font-normal text-secondary dark:text-neutral-400 mt-4 ${jetbrainsMono.className}`}>
          From optimizing backend queries at Zoho to architecting the next generation of AI tooling, my journey is defined by constant technical growth. I am always looking for the next hard problem to solve, the next limit to push, and the next innovative solution to build for the future.
        </p>
      </div>
    </div>
  );
}
