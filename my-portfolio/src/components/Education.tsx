"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    const educationList = [
        {
            institution: "R.M.D Engineering College",
            degree: "Bachelor of Engineering",
            major: "Computer Science and Engineering",
            duration: "2023 – Present",
            score: "CGPA: 6.87",
        },
        {
            institution: "VDA Junior College",
            degree: "Intermediate",
            major: "Higher Secondary Education",
            duration: "Completed 2023",
            score: "72%",
        },
        {
            institution: "BVS High School",
            degree: "SSC",
            major: "Secondary Education",
            duration: "Completed 2021",
            score: "92%",
        },
    ];

    return (
        <section id="education" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic <span className="text-red-500">Journey</span></h2>
                </motion.div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300/20 before:to-transparent">
                    {educationList.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 group-hover:bg-red-500 text-slate-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(239,68,68,0.6)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-all duration-300 z-10">
                                <GraduationCap size={20} />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-red-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-red-400 text-sm">{edu.duration}</span>
                                    <span className="bg-white/10 text-white px-2 py-1 rounded-md text-xs font-bold">{edu.score}</span>
                                </div>
                                <h3 className="font-bold text-xl text-white mb-1">{edu.degree}</h3>
                                <h4 className="text-slate-300 font-medium mb-2">{edu.institution}</h4>
                                <p className="text-slate-400 text-sm">{edu.major}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
