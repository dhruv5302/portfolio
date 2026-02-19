import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Rocket, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-20 pb-10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-primary/10 to-transparent pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-2">

                        <p className="text-gray-400 text-lg max-w-sm mb-8 leading-relaxed">
                            Crafting high-performance MERN stack applications with modern aesthetics and seamless user experiences.
                        </p>
                        <div className="flex gap-4">
                            <SocialCircle icon={<Github size={20} />} href="https://github.com/dhruv5302" />
                            <SocialCircle icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/dhruv-prajapati-386b42357" />
                            <SocialCircle icon={<Instagram size={20} />} href="https://www.instagram.com/dhruv__808?igsh=djA5bml0ZmR1Y2h3&utm_source=qr" />
                            <SocialCircle icon={<Mail size={20} />} href="https://mail.google.com/mail" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-white transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Let's Connect</h4>

                        {/* Project Prompt */}
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <Rocket size={18} className="text-primary/70" />
                            <p>Want to start a project?</p>
                        </div>

                        {/* Email Link */}
                        <a
                            href="mailto:dhruvp6788@gmail.com"
                            className="flex items-center gap-3 text-white font-bold text-lg hover:text-primary transition-colors w-fit mb-4 group"
                        >
                            <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                            <span href="https://mail.google.com/mail">dhruvp6788@gmail.com</span>
                        </a>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={18} />
                            <p>Karamsad, Anand, Gujarat</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-[11px] text-gray-600 font-bold uppercase tracking-[0.4em]">
                        © {currentYear} • Design & Code by Dhruv Prajapati
                    </div>

                    <div className="flex gap-6 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialCircle = ({ icon, href }) => (
    <motion.a
        whileHover={{ y: -5, backgroundColor: 'var(--primary)', color: '#000' }}
        href={href}
        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-colors"
    >
        {icon}
    </motion.a>
);

export default Footer;
