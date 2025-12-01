import React from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-cyber-dark border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                    ME <span className="text-neon-blue">CONTACTER</span>
                </h2>

                <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    Prêt à collaborer sur des projets innovants ?
                    Mon canal de communication est ouvert pour discuter IoT, embarqué et nouvelles opportunités.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a
                        href="mailto:djenadourayane@gmail.com"
                        className="group p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-neon-blue transition-all duration-300 hover:-translate-y-1"
                    >
                        <Mail className="w-10 h-10 text-slate-400 mx-auto mb-4 group-hover:text-neon-blue transition-colors" />
                        <h3 className="font-bold text-white mb-2">Email</h3>
                        <p className="text-sm text-slate-500 font-mono group-hover:text-neon-blue/80">djenadourayane@gmail.com</p>
                    </a>

                    <a
                        href="https://github.com/rayane2222"
                        target="_blank"
                        rel="noreferrer"
                        className="group p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-white transition-all duration-300 hover:-translate-y-1"
                    >
                        <Github className="w-10 h-10 text-slate-400 mx-auto mb-4 group-hover:text-white transition-colors" />
                        <h3 className="font-bold text-white mb-2">GitHub</h3>
                        <p className="text-sm text-slate-500 font-mono group-hover:text-white/80">@rayane2222</p>
                    </a>

                    <a
                        href="https://linkedin.com/in/rayane-d-a25366252/"
                        target="_blank"
                        rel="noreferrer"
                        className="group p-8 bg-slate-900 border border-slate-800 rounded-xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                    >
                        <Linkedin className="w-10 h-10 text-slate-400 mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
                        <h3 className="font-bold text-white mb-2">LinkedIn</h3>
                        <p className="text-sm text-slate-500 font-mono group-hover:text-blue-400">Rayane DJENADOU</p>
                    </a>
                </div>

                <div className="mt-16 p-6 bg-black rounded-lg border border-slate-800 font-mono text-left text-sm text-slate-400 shadow-2xl max-w-2xl mx-auto">
                    <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                        <p><span className="text-neon-blue">user@portfolio:~$</span> ping djenadourayane@gmail.com</p>
                        <p>PING djenadourayane@gmail.com (127.0.0.1): 56 data bytes</p>
                        <p>64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.032 ms</p>
                        <p>64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.045 ms</p>
                        <p className="animate-pulse">_</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
