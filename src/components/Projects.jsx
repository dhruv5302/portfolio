import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'HandSensePy',
            
            description: 'A touchless interactive system recognized at CVM Hackathon. Transforms flat surfaces into interactive interfaces using Python and computer vision.',
            tech: ['Python', 'OpenCV', 'NumPy', 'Pygame'],
            github: 'https://github.com/dhruv5302',
           
        },
        {
            title: 'Task Manager',
           
            description: 'A Django-based application implementing MTV architecture with secure CRUD APIs for task management and database interaction.',
            tech: ['Django', 'Python', 'PostgreSQL'],
            github: 'https://github.com/dhruv5302/TaskManager',
            
        },
        {
            title: 'Mega E-Shop Landing Page',
           
            description: 'Clean, responsive landing page showcasing product categories with a hero banner and intuitive navigation.',
            tech: ['HTML5', 'Bootstrap 5', 'jQuery'],
            github: 'https://github.com/dhruv5302/Brainwave_Matrix_Intern/tree/main/task2',
           
        }
    ];

    return (
        <section id="projects" className="py-20 lg:px-[10%] px-5">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title mb-12 text-center text-4xl font-bold">
                    Featured <span className="text-primary bg-clip-text">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            // Added standard padding and background/border utilities in case your 'glass-card' misses them
                            className="glass-card flex flex-col h-full group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative background icon */}
                            <Code size={120} className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-500 rotate-12" />

                            {/* Header: Category & Links */}
                            <div className="flex justify-end mb-6 relative z-10">   
                                <div className="flex gap-3 ">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Footer: Tech Stack */}
                            <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10 relative z-10">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[11px] text-gray-300 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/10 transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;