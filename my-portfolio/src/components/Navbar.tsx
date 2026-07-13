"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <a href="#" className="text-2xl font-bold text-white tracking-tighter shadow-red-500 drop-shadow-sm">TV<span className="text-red-500">R</span>.</a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-red-500 font-medium transition-colors text-sm uppercase tracking-wide">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors text-sm shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                        Hire Me
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 flex flex-col p-6 gap-6 md:hidden shadow-2xl z-40"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-200 hover:text-red-500 text-lg font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
