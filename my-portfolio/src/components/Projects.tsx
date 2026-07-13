"use client";
import { motion } from "framer-motion";
import { ExternalLink, Activity, Server, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "BikeCare – Smart Home Bike Service Platform",
            description: "A cloud-based platform connecting customers, mechanics, service centers, and administrators.",
            features: ["Home Bike Service Booking", "Live Tracking", "Payment Management", "Service History", "Complaint Management", "Notifications", "Analytics Dashboard", "Cloud Integration"],
            tech: ["Java", "Cloud", "Web Platform"],
            github: "https://github.com/thanjavurivasanthrayudu",
            live: "#",
            icon: <Layout className="text-red-500 w-12 h-12 mb-4" />
        },
        {
            title: "Quiz Application",
            description: "Java-based quiz application with multiple-choice questions and automatic score calculation.",
            features: ["MCQ Quiz", "Score Calculation", "Database Integration", "Result Storage"],
            tech: ["Java", "MySQL", "JDBC", "OOP"],
            github: "https://github.com/thanjavurivasanthrayudu",
            live: "#",
            icon: <Activity className="text-blue-500 w-12 h-12 mb-4" />
        }
    ];

    return (
        <section id="projects" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-red-500">Projects</span></h2>
                    <p className="text-slate-400">Some of the distinct pieces of software I have built.</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass rounded-2xl overflow-hidden group flex flex-col h-full border border-white/5 hover:border-red-500/50 transition-colors duration-500"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                {project.icon}
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wider">Features</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {project.features.map(f => (
                                            <li key={f} className="text-sm text-slate-400 flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 rounded-full border border-white/10">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium border border-white/10">
                                        <FaGithub size={18} /> Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
