"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800" />
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <IconSun className="w-5 h-5" />
            ) : (
                <IconMoon className="w-5 h-5" />
            )}
        </motion.button>
    );
}
