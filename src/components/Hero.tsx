import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">
            {/* Left side - Text content */}
            <div className="flex-1">
                {/* Name */}
                <h1 className={`text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2 ${jetbrainsMono.className}`}>
                    James Paul
                </h1>

                {/* Tagline */}
                <p className={`text-base text-neutral-600 dark:text-neutral-400 mb-6 ${jetbrainsMono.className}`}>
                    Software Development Engineer, Building scalable solutions at Zoho
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mb-8">
                    {socials.map((social: Navlink) => (
                        <Link
                            key={social.href}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                        </Link>
                    ))}
                    <Link
                        href="/resume"
                        className="flex items-center gap-2 px-4 h-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span className={`text-sm font-medium text-neutral-600 dark:text-neutral-400 ${jetbrainsMono.className}`}>CV</span>
                    </Link>
                </div>
            </div>

            {/* Right side - Profile Image */}
            <div className="flex-shrink-0">
                <Image
                    src="/images/profile.png"
                    alt="James Paul"
                    width={140}
                    height={140}
                    className="rounded-2xl object-cover"
                />
            </div>
        </div>
    );
};
