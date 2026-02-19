import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
    // State to track exactly which card is currently being hovered
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const awards = [
        {
            title: 'Ignite Competition Winner',
            org: 'CHARUSAT University',
            year: '2025',
            icon: <Trophy className="text-[#FFD700]" size={32} />,
            details: 'Secured 1st position in the Scholar Showcase by presenting a real-world project.'
        },
        {
            title: 'Recognition at CVM Hackathon',
            org: 'CVM University (ADIT College)',
            year: '2024',
            icon: <Award className="text-primary" size={32} />,
            details: 'Participated in a 36-hour continuous coding hackathon organized at ADIT College, developing "HandSensePy" using various Python libraries.'
        }
    ];

    return (
        <section id="achievements" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title text-center text-4xl font-bold mb-12">
                    Key <span className="text-primary bg-clip-text">Achievements</span>
                </h2>

                {/* Added "items-start" so cards don't stretch each other's heights automatically */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-start">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="glass-card flex flex-col sm:flex-row items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="p-5 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                                {award.icon}
                            </div>

                            <div className="flex-1 w-full">
                                <h3 className="text-xl font-bold mb-1 text-white transition-colors duration-300">
                                    {award.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-2">{award.org}</p>
                                <span className="inline-block text-[10px] font-bold text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-1">
                                    {award.year}
                                </span>

                                {/* Framer Motion AnimatePresence handles the expand/collapse smoothly and independently */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm text-gray-300 mt-4 pt-4 border-t border-white/10 leading-relaxed">
                                                {award.details}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;