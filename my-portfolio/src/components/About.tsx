"use client";
import { motion } from "framer-motion";
import { Code, BookOpen, Award, Briefcase } from "lucide-react";

export default function About() {
    const stats = [
        { label: "Projects", value: "2+", icon: <Code className="text-red-500 mb-2" size={32} /> },
        { label: "Internship", value: "1", icon: <Briefcase className="text-red-500 mb-2" size={32} /> },
        { label: "Certifications", value: "3", icon: <Award className="text-red-500 mb-2" size={32} /> },
        { label: "CGPA", value: "6.87", icon: <BookOpen className="text-red-500 mb-2" size={32} /> },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                                About Me
                            </h2>
                            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    I am a Computer Science Engineering student at R.M.D Engineering College with a strong interest in software development, backend engineering, and problem solving.
                                </p>
                                <p>
                                    I enjoy building practical software solutions using <span className="text-white font-medium">Java, SQL, MySQL, Git, and GitHub</span>.
                                </p>
                                <p>
                                    During my internship at Conzura Soft Solutions, I contributed to developing a Restaurant Management System, working on customer management, billing, order processing, inventory management, and reporting modules.
                                </p>
                                <p>
                                    Currently, I am developing <span className="text-white font-medium">BikeCare</span>, a smart home bike service platform that connects customers, mechanics, service centers, and administrators.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="glass-card p-6 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300"
                            >
                                {stat.icon}
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-slate-400 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
