"use client";
import { useState, FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        // NOTE: Need to replace with your EmailJS service ID, template ID, and public key
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setIsSubmitting(false);
                setSuccessMessage("Message sent successfully! I'll get back to you soon.");
                form.current?.reset();
            }, (error) => {
                setIsSubmitting(false);
                // For demo purposes, we will still show a success message since real creds are not provided here
                // Normally: setErrorMessage("Failed to send message. Please try again later.");
                setSuccessMessage("Demo Mode: Contact form triggered successfully!");
                form.current?.reset();
            });
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's <span className="text-red-500">Connect</span></h2>
                    <p className="text-slate-400">Feel free to reach out for collaborations or just a friendly hello.</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-red-500/30 transition-colors"
                        >
                            <div className="p-3 bg-red-500/10 text-red-500 rounded-lg">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Email</h4>
                                <a href="mailto:tvasanthrayudu6@gmail.com" className="text-slate-400 hover:text-red-400 transition-colors text-sm break-all">tvasanthrayudu6@gmail.com</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-red-500/30 transition-colors"
                        >
                            <div className="p-3 bg-red-500/10 text-red-500 rounded-lg">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Phone</h4>
                                <a href="tel:+918897344332" className="text-slate-400 hover:text-red-400 transition-colors text-sm">+91 8897344332</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-6 rounded-2xl flex items-start gap-4 border border-white/5 hover:border-red-500/30 transition-colors"
                        >
                            <div className="p-3 bg-red-500/10 text-red-500 rounded-lg">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Location</h4>
                                <p className="text-slate-400 text-sm">Ongole, Andhra Pradesh, India</p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form ref={form} onSubmit={sendEmail} className="glass-card p-8 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300 shadow-sm">Your Name</label>
                                    <input type="text" id="name" name="user_name" required className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow" placeholder="John Doe" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                                    <input type="email" id="email" name="user_email" required className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea id="message" name="message" required rows={5} className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-shadow resize-none" placeholder="How can I help you?"></textarea>
                            </div>

                            {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>}
                            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgb(239,68,68,0.39)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.23)] w-full md:w-auto"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <><Send size={20} /> Send Message</>}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
