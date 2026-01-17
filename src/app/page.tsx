import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Hero } from "@/components/Hero";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Home() {
  return (
    <Container>
      <Hero />

      {/* About Section */}
      <div className="mb-16">
        <h2 className={`text-2xl font-bold text-neutral-900 dark:text-white mb-4 ${jetbrainsMono.className}`}>
          About
        </h2>
        <p className={`text-sm lg:text-base font-normal text-neutral-600 dark:text-neutral-400 max-w-4xl mb-4 ${jetbrainsMono.className}`}>
          I am a Software Development Engineer currently building scalable solutions at Zoho, where I have spent the last two years mastering product engineering.
          My work focuses on the full development lifecycle, ensuring that every piece of code I ship is production-ready, reliable, and able to serve users efficiently at scale.
        </p>
        <p className={`text-sm lg:text-base font-normal text-neutral-600 dark:text-neutral-400 max-w-4xl ${jetbrainsMono.className}`}>
          My engineering philosophy is deeply rooted in rigorous problem-solving and a relentless drive for algorithmic optimization. I don't just write code that functions;
          I strive to create logic that is computationally efficient, clean, and capable of handling complex edge cases without breaking under pressure.
        </p>
      </div>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I've been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}
