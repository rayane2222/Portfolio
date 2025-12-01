import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Cpu } from 'lucide-react';

const Layout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#accueil' },
        { name: 'Projets', href: '#projets' },
        { name: 'Expérience', href: '#experience' },
        { name: 'Compétences', href: '#competences' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="min-h-screen bg-cyber-black text-slate-200 selection:bg-neon-blue/30 selection:text-white font-sans">
            {/* Background Grid & Particles */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-[0.03]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05),transparent_70%)]"></div>
            </div>

            {/* Navigation */}
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-cyber-black/90 backdrop-blur-md border-slate-800 py-3'
                    : 'bg-transparent border-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="group flex items-center gap-2">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 group-hover:border-neon-blue transition-colors overflow-hidden">
                            <Cpu className="w-6 h-6 text-neon-blue group-hover:animate-pulse-glow" />
                            <div className="absolute inset-0 bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-xl font-display font-bold tracking-wider text-white group-hover:text-neon-blue transition-colors">
                            RAYANE<span className="text-neon-blue">.DEV</span>
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-neon-blue transition-colors tracking-wide uppercase relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="/Portfolio/CV_Rayane_Djenadou.pdf"
                            target="_blank"
                            className="px-4 py-2 rounded bg-neon-blue/10 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all font-display font-bold text-xs tracking-widest uppercase"
                        >
                            CV.pdf
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-300 hover:text-neon-blue transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-cyber-black border-b border-slate-800 p-6 flex flex-col gap-4 animate-fadeIn">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-300 hover:text-neon-blue"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Portfolio/CV_Rayane_Djenadou.pdf"
                            target="_blank"
                            className="text-center px-4 py-3 rounded bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-bold"
                        >
                            TÉLÉCHARGER CV
                        </a>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="relative z-10 pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="relative z-10 bg-cyber-dark border-t border-slate-800 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                            RAYANE<span className="text-neon-blue">.DEV</span>
                        </h3>
                        <p className="text-slate-500 text-sm">
                            Ingénieur en Objets Connectés & Systèmes Embarqués
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="mailto:djenadourayane@gmail.com" className="text-slate-400 hover:text-neon-blue transition-colors transform hover:scale-110">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/rayane2222" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors transform hover:scale-110">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com/in/rayane-d-a25366252/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-neon-blue transition-colors transform hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-slate-800/50 text-center text-slate-600 text-xs font-mono">
                    <p>© 2025 RAYANE DJENADOU. SYSTEM ONLINE.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
