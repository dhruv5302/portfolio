import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 lg:px-[10%] px-5 ">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

                

                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-3xl font-bold mb-6">Let's connect and build something great</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            I'm always open to discussing new projects, creative ideas or professional opportunities.
                        </p>

                        <div className="space-y-8">
                            <ContactInfo icon={<Mail size={24} />} label="Email" value="dhruvp6788@gmail.com" />
                            <ContactInfo icon={<Phone size={24} />} label="Phone" value="+91 9054108803" />
                            <ContactInfo icon={<MapPin size={24} />} label="Location" value="Karamsad, Anand - 388325" />
                        </div>
                    </div>

                    {/* <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card group"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                                    <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                                <textarea rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-primary transition-colors resize-none"></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-primary text-dark font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg shadow-primary/20"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div> */}

                
            </motion.div>
        </section>
    );
};

const ContactInfo = ({ icon, label, value }) => (
    <div className="flex gap-6 items-center">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary border border-white/10">
            {icon}
        </div>
        <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    </div>
);

export default Contact;
