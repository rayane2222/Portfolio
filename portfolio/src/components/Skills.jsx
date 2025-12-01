import React from 'react';
import { skills } from '../data/portfolio';
import { Cpu, CircuitBoard, Wifi, Cloud, Code, Zap } from 'lucide-react';

const iconMap = {
    Cpu: Cpu,
    CircuitBoard: CircuitBoard,
    Wifi: Wifi,
    Cloud: Cloud,
    Code: Code,
    Zap: Zap,
};

const Skills = () => {
    return (
        <section id="competences" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon-blue/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        COMPÉTENCES <span className="text-neon-blue">TECHNIQUES</span>
                    </h2>
                    <div className="h-1 w-24 bg-neon-blue rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, idx) => {
                        const Icon = iconMap[skill.icon] || Cpu;

                        return (
                            <div
                                key={idx}
                                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-900 hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-colors text-neon-blue">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                                        {skill.name}
                                    </h3>
                                </div>

                                <ul className="space-y-3">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                                            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-neon-blue group-hover:shadow-[0_0_5px_#00f3ff] transition-all"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
