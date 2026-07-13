"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = ["Software Developer", "Java Developer", "Computer Science Student", "Problem Solver", "Tech Enthusiast"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let ticker = setTimeout(() => {
            handleTyping();
        }, typingSpeed);

        return () => clearTimeout(ticker);
    }, [text, isDeleting]);

    const handleTyping = () => {
        const i = loopNum % fullText.length;
        const full = fullText[i];

        setText(isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1));

        setTypingSpeed(isDeleting ? 50 : 100);

        if (!isDeleting && text === full) {
            setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden group">
            <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-3/5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-red-500 font-semibold tracking-widest text-sm uppercase mb-3">Hi, I'm</h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                            Thanjavuri Vasanth Rayudu
                        </h1>
                        <div className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6 h-[40px]">
                            <span className="border-r-2 border-red-500 pr-2">{text}</span>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                            Computer Science Engineering student passionate about software development, Java programming, and building scalable web applications. I enjoy solving real-world problems through technology while continuously learning modern software engineering practices.
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a href="#projects" className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </a>
                            <a href="/resume.pdf" download className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-2 glass">
                                Download Resume <Download size={18} />
                            </a>
                            <a href="#contact" className="px-8 py-3 rounded-full border border-transparent hover:border-white/10 text-slate-300 hover:text-white font-medium transition-all">
                                Contact Me
                            </a>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="https://github.com/thanjavurivasanthrayudu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
