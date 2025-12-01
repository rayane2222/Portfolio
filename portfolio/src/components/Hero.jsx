import React from 'react';
import { ChevronRight, Download, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
    return (
        <section id="accueil" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-5xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-neon-blue text-xs font-mono mb-6 animate-fadeIn">
                        <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
                        SYSTEM ONLINE
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                        RAYANE <br />
                        <span className="text-neon-blue">
                            DJENADOU
                        </span>
                    </h1>

                    <div className="h-20 mb-6">
                        <p className="text-xl md:text-2xl text-slate-300 font-light border-l-4 border-neon-blue pl-4">
                            Ingénieur en <span className="text-white font-medium">Objets Connectés</span> <br />
                            & Systèmes Embarqués
                        </p>
                    </div>

                    <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
                        Conception de systèmes intelligents, du capteur au cloud.
                        Expertise en STM32, protocoles IoT et architectures sécurisées.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projets"
                            className="px-8 py-4 bg-neon-blue text-black font-bold rounded hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]"
                        >
                            EXPLORER PROJETS
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/CV_Rayane_Djenadou.pdf"
                            target="_blank"
                            className="px-8 py-4 bg-transparent border border-slate-600 text-white font-medium rounded hover:border-neon-blue hover:text-neon-blue transition-all duration-300 flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            CV.PDF
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Hexagon Shape or Profile Image Container */}
                        <div className="absolute inset-0 bg-neon-blue/20 rounded-full opacity-20 blur-2xl animate-pulse-glow"></div>
                        <div className="relative w-full h-full rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden cyber-border shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                            {/* Placeholder for a profile image or 3D element */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                                <Terminal className="w-32 h-32 opacity-20" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                                <div className="font-mono text-xs text-neon-blue mb-1">root@portfolio:~$</div>
                                <div className="font-mono text-sm text-slate-300">./init_sequence.sh --force</div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 p-4 bg-slate-900 border border-slate-700 rounded-lg shadow-xl animate-bounce delay-700">
                            <Cpu className="w-8 h-8 text-neon-blue" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 p-4 bg-slate-900 border border-slate-700 rounded-lg shadow-xl animate-bounce delay-1000">
                            <div className="text-neon-blue font-mono text-xs font-bold">STATUS: OK</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
