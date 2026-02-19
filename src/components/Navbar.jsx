import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Code2, Menu, X, ArrowUpRight, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-[1000] px-[10%] transition-all duration-300 ${scrolled
                    ? ' backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl'
                    : 'bg-transparent py-10'
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Modern Brand Mark with Hover Rotation */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="p-3 bg-white/5 rounded-[0.85rem] border border-white/10 group-hover:border-primary transition-all duration-700 shadow-2xl group-hover:shadow-primary/20">
                        <Code2 size={24} className="text-white group-hover:text-primary transition-colors" />
                    </div>
                </div>

                {/* Central Links Grid with Character Shift */}
                <div className="hidden md:flex items-center gap-14">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black uppercase tracking-[0.45em] text-gray-400 hover:text-white transition-all duration-500 relative group overflow-hidden"
                        >
                            <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full">
                                {link.name}
                            </span>
                            <span className="absolute inset-0 z-10 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-primary">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Right Side Social Hub with Elevated Hover */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-8 border-r border-white/10 pr-8">
                        <a href="https://github.com/dhruv5302" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:text-primary">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/dhruv-prajapati-386b42357" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:text-primary">
                            <Linkedin size={22} />
                        </a>
                        <a href="https://mail.google.com/mail" className="text-gray-400 hover:text-white transition-all transform hover:scale-125 hover:text-primary">
                            <Mail size={22} />
                        </a>
                        
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--primary)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">Active</span>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay with Cinematic Scale */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="absolute top-full left-4 right-4 mt-8 bg-black/98 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-16 md:hidden shadow-3xl overflow-hidden"
                    >
                        <ul className="flex flex-col gap-10">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-3xl font-black uppercase tracking-[0.35em] text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-8 block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
