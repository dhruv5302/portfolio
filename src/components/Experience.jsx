import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, FileText } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Development Intern',
            company: 'Brainwave Matrix Solutions',
            link: 'https://matrixbrainwave.in.net/',
            location: 'Noida (Remote)',
            period: 'May 2025',
            description: [
                'Assisted in developing responsive web applications using HTML, CSS, JavaScript, and modern frameworks like React.js.',
                'Utilized Git and GitHub for version control and collaborative development.',
                'Wrote clean, maintainable code following industry best practices.',
                'Participated in team meetings and brainstorming sessions to provide valuable insights.'
            ]
        },
        {
            role: 'MERN Stack Intern',
            company: 'Redspark Technologies',
            link: 'https://redsparkinfo.com/',
            location: 'Vadodara',
            period: '15 Dec 2025 - 30 Apr 2026',
            description: [
                'Built "Shreedhu_Mart," a complete e-commerce website using the MERN stack (MongoDB, Express, React, Node.js).',
                'Created the backend features so users can easily log in, browse products, and manage their shopping carts.',
                'Designed a smooth, interactive frontend with React.js that looks great and works perfectly on both mobile phones and desktop computers.',
                'Worked with the team to organize the database and make sure the website runs fast and securely.'
            ]
        }
    ];

    const education = [
        {
            degree: 'Masters of Science in Information Technology',
            school: 'ISTAR, CVM University',
            period: '2024 - Present',
            details: 'SGPA: Sem-1: 7.68 | Sem-2: 8.56 | Sem-3: 8.84'
        },
        {
            degree: 'Bachelors of Science in Computer Science',
            school: 'VP & RPTP Science College',
            period: '2021 - 2024',
            details: 'CGPA: 5.62 / 10'
        },
        {
            degree: 'H.S.C',
            school: 'Shree Santram Vidhyamandir , Karamsad',
            period: '2019 - 2020',
            details: 'Percentage: 58%'
        },
        {
            degree: 'S.S.C',
            school: 'BAPS Swaminarayan Vidhyamandir , Bakrol',
            period: '2017 - 2018',
            details: 'Percentage: 73%'
        },
    ];

    return (
        <section id="experience" className="py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Briefcase className="text-primary" /> Work Experience
                        </h3>
                        <div className="space-y-12 border-l-2 border-white/10 pl-6 ml-4 sm:pl-8 sm:ml-2">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[1.85rem] sm:-left-[2.6rem] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,210,255,0.5)]" />
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>

                                    {/* Company Link Added Here */}
                                    <div className="text-primary font-semibold mt-1">
                                        {exp.link ? (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors duration-300">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.period}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                    <ul className="mt-4 space-y-2 text-gray-400 text-sm list-disc list-inside">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <FileText className="text-secondary" /> Education
                        </h3>
                        <div className="space-y-12 border-l-2 border-white/10 pl-6 ml-4 sm:pl-8 sm:ml-2">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[1.85rem] sm:-left-[2.6rem] top-0 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(157,80,187,0.5)]" />
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <div className="text-secondary font-semibold mt-1">{edu.school}</div>
                                    <div className="flex gap-4 mt-3 text-sm text-gray-400">
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.period}</span>
                                    </div>
                                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Experience;