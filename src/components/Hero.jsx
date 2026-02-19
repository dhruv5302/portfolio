import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.JPG';
const Hero = () => {
    const ProfileImage = () => (
        <div className="w-72 h-80 sm:w-80 sm:h-96 md:w-[450px] md:h-[550px] relative mx-auto flex items-center justify-center">
            {/* Background Decorative Circles */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"
            />

            {/* Rotating Borders */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[95%] h-[95%] border-2 border-dashed border-primary/20 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[85%] h-[85%] border border-secondary/15 rounded-full"
                />
            </div>

            {/* Professional Portrait Container */}
            <div className="w-[75%] h-[90%] rounded-[2rem] overflow-hidden border-2 border-white/20 glass-card p-0 shadow-[0_0_50px_rgba(0,210,255,0.15)] relative group z-10 transition-all duration-500 hover:border-primary/50">
                <img
                    src={profileImage}
                    alt="Dhruv Prajapati"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] saturate-[1.1] group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Subtle Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700" />
            </div>
        </div>
    );

    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:flex-1 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary text-sm sm:text-base font-semibold tracking-[0.2em] mb-4 uppercase"
                    >
                        HI THERE, I'M
                    </motion.p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Dhruv <span className="gradient-text">Prajapati</span>
                    </h1>

                    {/* Mobile Only Image: Shown between Name and Role/Desc */}
                    <div className="md:hidden py-8">
                        <ProfileImage />
                    </div>

                    <h2 className="text-2xl font-medium text-gray-400 mb-8">
                        MSc IT Student & <span className="text-white">MERN Stack (Full Stack) Developer</span>
                    </h2>
                    <p className="max-w-xl text-gray-400 mb-10 text-lg mx-auto md:mx-0 leading-relaxed">
                        Dedicated problem-solver specializing in building high-performance web applications.
                        Recently developed a full-scale E-commerce platform using the MERN stack.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-3 rounded-full font-bold bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/20"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>

                {/* Desktop Only Image: Shown on the right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="hidden md:block w-full md:flex-1 relative"
                >
                    <ProfileImage />
                </motion.div>
            </div>
        </section>
    );
};

const SocialIcon = ({ icon, href }) => (
    <motion.a
        whileHover={{ y: -5 }}
        href={href}
        className="text-gray-400 hover:text-primary transition-colors"
    >
        {icon}
    </motion.a>
);

export default Hero;
