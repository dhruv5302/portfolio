import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="glass-card group">
                        <h3 className="text-xl font-bold mb-4 text-primary">Who I am</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I am a dedicated MSc Information Technology student at the Institute of Science and Technology for Advanced Studies and Research (CVM University).
                            With a strong foundation in Computer Science from my Bachelors, I've transitioned into the world of advanced IT, focusing on developing
                            innovative solutions that bridge the gap between academic knowledge and real-world application.
                        </p>
                    </div>

                    <div className="glass-card group">
                        <h3 className="text-xl font-bold mb-4 text-primary">My Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            I thrive on problem-solving and building responsive, user-centric web applications.
                            My experience ranges from developing e-commerce platforms during my internship to creating
                            recognized touchless interactive systems using computer vision. I am always eager to learn new
                            technologies and apply them to solve complex challenges.
                        </p>
                    </div>
                </div>

                {/* <div className="mt-12 text-center max-w-7xl mx-auto">
                    <div className="glass-card group inline-block px-12 py-8">
                        <div className="flex flex-wrap gap-12 sm:gap-20 justify-center">
                            <StatItem label="Projects Done" value="10+" />
                            <StatItem label="Hackathons" value="2" />
                            <StatItem label="Awards" value="Best Project" />
                        </div>
                    </div>
                </div> */}
            </motion.div>
        </section>
    );
};

const StatItem = ({ label, value }) => (
    <div className="text-center">
        <h4 className="text-3xl font-extrabold text-primary mb-1">{value}</h4>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">{label}</p>
    </div>
);

export default About;
