"use client";
import { motion } from "framer-motion";
import { FaJava, FaDatabase } from "react-icons/fa";
import { SiMysql, SiGit, SiGithub } from "react-icons/si";
import { Brain, Users, MessageSquare, Zap } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava size={24} className="text-red-500" /> },
                { name: "SQL", icon: <FaDatabase size={24} className="text-blue-400" /> },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", icon: <SiMysql size={24} className="text-blue-500" /> },
            ],
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <SiGit size={24} className="text-orange-500" /> },
                { name: "GitHub", icon: <SiGithub size={24} className="text-white" /> },
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Problem Solving", icon: <Brain size={24} className="text-purple-400" /> },
                { name: "Teamwork", icon: <Users size={24} className="text-green-400" /> },
                { name: "Communication", icon: <MessageSquare size={24} className="text-yellow-400" /> },
                { name: "Quick Learning", icon: <Zap size={24} className="text-red-400" /> },
            ],
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-red-500">Skills</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Technologies and practices I have learned and applied in projects and internships.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass p-6 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                {cat.title}
                            </h3>
                            <div className="flex flex-col gap-4">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-white/5 hover:border-red-500/30 transition-colors">
                                        {skill.icon}
                                        <span className="font-medium text-slate-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
