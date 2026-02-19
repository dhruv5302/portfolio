import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { title: 'Frontend', items: ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Tailwind', 'jQuery', 'Responsive Design'] },
        { title: 'Backend', items: ['Python', 'Node js', 'Express js', 'C/C++'] },
        { title: 'Mobile Development', items: ['Flutter', 'Dart'] },
        { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
        { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Android Studio' , 'Visual Studio'] },
    ];

    return (
        <section id="skills" className="py-20 lg:px-[10%] px-5">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Technical <span className="gradient-text">Proficiency</span></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card group"
                        >
                            <h3 className="text-lg font-bold mb-6 text-primary border-b border-white/10 pb-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.items.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,210,255,1)', color: '#000' }}
                                        className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/10 cursor-default transition-all duration-300 hover:border-transparent"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
