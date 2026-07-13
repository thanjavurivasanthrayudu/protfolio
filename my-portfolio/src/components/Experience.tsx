"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            company: "Conzura Soft Solutions OPC Pvt. Ltd.",
            role: "AI/ML Intern",
            duration: "May 2026 – August 2026",
            responsibilities: [
                "Developed Restaurant Management System",
                "Worked on Customer Management",
                "Billing Module",
                "Inventory Module",
                "Order Processing",
                "Reporting Module",
                "Requirement Analysis",
                "Testing",
                "Team Collaboration",
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-red-500">Experience</span></h2>
                    <p className="text-slate-400">My professional journey and internships.</p>
                </motion.div>

                <div className="relative border-l-2 border-red-500/30 ml-4 md:ml-0">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="mb-12 relative pl-8 md:pl-0"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-0 w-4 h-4 rounded-full bg-red-500 ring-4 ring-slate-900 shadow-[0_0_10px_rgba(239,68,68,1)] z-10 hidden md:block"></div>
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-red-500 ring-4 ring-slate-900 shadow-[0_0_10px_rgba(239,68,68,1)] z-10 md:hidden"></div>

                            <div className="md:w-1/2 md:pr-12 md:text-right md:ml-auto">
                                <div className="glass-card p-6 md:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-red-500/30 transition-all duration-300 transform md:-translate-x-[105%] md:relative absolute w-[calc(100vw-4rem)] md:w-auto left-8 md:left-auto text-left">
                                    <div className="flex flex-col gap-2 mb-4">
                                        <span className="inline-flex items-center gap-2 text-red-400 text-sm font-medium">
                                            <Calendar size={16} /> {exp.duration}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-slate-300 font-medium">
                                            <Briefcase size={18} /> {exp.company}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mt-4 text-slate-400 text-sm">
                                        {exp.responsibilities.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
