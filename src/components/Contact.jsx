import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 px-6 bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card-bg rounded-[3rem] p-8 md:p-16 border border-card-border backdrop-blur-3xl overflow-hidden relative shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -mr-32 -mt-32 animate-pulse"></div>

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-text-main"
              >
                Let's Build <br />
                <span className="text-blue-500">Something Great</span>
              </motion.h2>
              <p className="text-text-muted text-lg mb-12 max-w-md font-medium leading-relaxed">
                I'm currently looking for new opportunities and collaborations in AI and Data Science. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-text-main">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-500 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <span className="font-semibold">pechettisrirama@email.com</span>
                </div>
                <div className="flex items-center gap-4 text-text-main">
                  <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-500 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <span className="font-semibold">+91 8886295990</span>
                </div>
                <div className="flex items-center gap-4 text-text-main">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-500 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <span className="font-semibold">KIET, Kakinada, India</span>
                </div>
              </div>
            </div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-text-muted mb-2 font-bold">NAME</label>
                  <input type="text" className="w-full bg-text-main/5 border border-card-border rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-all text-text-main placeholder:text-text-muted/50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-text-muted mb-2 font-bold">EMAIL</label>
                  <input type="email" className="w-full bg-text-main/5 border border-card-border rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-all text-text-main placeholder:text-text-muted/50" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-text-muted mb-2 font-bold">SUBJECT</label>
                <input type="text" className="w-full bg-text-main/5 border border-card-border rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-all text-text-main placeholder:text-text-muted/50" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-mono text-text-muted mb-2 font-bold">MESSAGE</label>
                <textarea rows="4" className="w-full bg-text-main/5 border border-card-border rounded-xl px-5 py-3 focus:outline-none focus:border-blue-500 transition-all text-text-main placeholder:text-text-muted/50" placeholder="Hello Sriram, I'm interested in working with you..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(37,99,235,0.3)] active:scale-95">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
