import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from'../assets/profile.JPG';
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-primary font-semibold tracking-[0.2em] mb-4"
                    >
                        HI THERE, I'M
                    </motion.p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Dhruv <span className="gradient-text">Prajapati</span>
                    </h1>
                    <h2 className="text-2xl font-medium text-gray-400 mb-8">
                        MSc IT Student & <span className="text-white">MERN Stack (Full Stack) Developer</span>
                    </h2>
                    <p className="max-w-xl text-gray-400 mb-10 text-lg mx-auto md:mx-0">
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

                        {/* <div className="flex gap-6">
                            <SocialIcon icon={<Github size={24} />} href="https://github.com/dhruv5302" />
                            <SocialIcon icon={<Linkedin size={24} />} href="https://www.linkedin.com/in/dhruv-prajapati-386b42357 " />
                            <SocialIcon icon={<Mail size={24} />} href="https://mail.google.com/mail" />
                        </div> */}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex-1 relative"
                >
                    <div className="w-72 h-72 md:w-[450px] md:h-[450px] relative mx-auto">
                        {/* Background Decorative Circles */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"
                        />

                        {/* Rotating Borders */}
                        <div className="absolute inset-0 p-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-secondary/10 rounded-full"
                            />
                        </div>

                        {/* Professional Crop Container */}
                        <div className="absolute inset-12 rounded-2xl overflow-hidden border-2 border-white/10 glass-card p-0 shadow-2xl relative group">
                            <img
                                src={profileImage}
                                alt="Dhruv Prajapati"
                                className="w-full h-full object-cover object-top filter contrast-110 saturate-110 group-hover:scale-105 transition-transform duration-700"
                                
                            />
                            {/* Subtle Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                    </div>
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
