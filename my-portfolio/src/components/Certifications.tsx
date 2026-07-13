"use client";
import { motion } from "framer-motion";
import { Award, Code, BookOpen } from "lucide-react";

export default function Certifications() {
    const certs = [
        {
            title: "Programming in Java",
            issuer: "NPTEL",
            icon: <Code size={24} className="text-red-500" />
        },
        {
            title: "Principles of Management",
            issuer: "NPTEL",
            icon: <BookOpen size={24} className="text-blue-500" />
        },
        {
            title: "Java Foundation Certification",
            issuer: "Infosys Springboard",
            icon: <Award size={24} className="text-green-500" />
        }
    ];

    return (
        <section id="certifications" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Licenses & <span className="text-red-500">Certifications</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-slate-800/80 transition-all border border-white/5 hover:border-red-500/40"
                        >
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5">
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                            <p className="text-slate-400">{cert.issuer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
