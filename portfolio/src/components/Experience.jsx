import React, { useState } from 'react';
import { internships } from '../data/portfolio';
import Modal from './ui/Modal';
import { Calendar, MapPin, Briefcase, ChevronRight, FileDown, ExternalLink, PlayCircle } from 'lucide-react';

const Experience = () => {
    const [selectedInternship, setSelectedInternship] = useState(null);

    return (
        <section id="experience" className="py-24 px-6 bg-cyber-dark relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        EXPÉRIENCE <span className="text-neon-blue">PROFESSIONNELLE</span>
                    </h2>
                    <div className="h-1 w-24 bg-neon-blue rounded-full mx-auto"></div>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {internships.map((internship, index) => (
                            <div key={internship.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-neon-blue rounded-full transform md:-translate-x-1/2 mt-8 shadow-[0_0_10px_rgba(0,243,255,0.8)] z-10"></div>

                                {/* Content Card */}
                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    <div
                                        className={`bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-neon-blue transition-all duration-300 group cursor-pointer ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                                        onClick={() => setSelectedInternship(internship)}
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                                                    {internship.position}
                                                </h3>
                                                <p className="text-slate-400 font-medium">{internship.company}</p>
                                            </div>
                                            <span className="px-3 py-1 bg-neon-blue/10 text-neon-blue text-xs font-bold rounded border border-neon-blue/20">
                                                {internship.duration}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 font-mono">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {internship.period}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {internship.location}
                                            </div>
                                        </div>

                                        <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                                            {internship.description}
                                        </p>

                                        <button className="text-neon-blue text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                            VOIR DÉTAILS <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Image on the other side */}
                                <div className="md:w-1/2 pl-8 md:pl-0">
                                    {internship.image && (
                                        <div className={`relative ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                                            <div className="relative rounded-xl overflow-hidden border border-slate-800 group-hover:border-neon-blue/30 transition-all duration-300 shadow-2xl">
                                                <img
                                                    src={internship.image}
                                                    alt={internship.position}
                                                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                                    <div className="text-xs font-mono text-neon-blue/80">{internship.period}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedInternship && (
                <Modal
                    title={`${selectedInternship.position} @ ${selectedInternship.company}`}
                    onClose={() => setSelectedInternship(null)}
                >
                    <div className="p-6 space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h4 className="text-neon-blue font-display font-bold mb-3">Description</h4>
                                    <p className="text-slate-300 leading-relaxed">
                                        {selectedInternship.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-neon-blue font-display font-bold mb-3">Missions Principales</h4>
                                    <ul className="space-y-2">
                                        {selectedInternship.tasks.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-neon-blue rounded-full shrink-0"></span>
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700">
                                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-neon-blue" />
                                        Info
                                    </h4>
                                    <div className="space-y-3 text-sm text-slate-400">
                                        <div className="flex justify-between">
                                            <span>Période:</span>
                                            <span className="text-slate-200">{selectedInternship.period}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Lieu:</span>
                                            <span className="text-slate-200">{selectedInternship.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-white font-bold mb-3">Stack Technique</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedInternship.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {selectedInternship.documents && selectedInternship.documents.length > 0 && (
                            <div className="border-t border-slate-800 pt-6">
                                <h4 className="text-neon-blue font-display font-bold mb-4">Documents & Médias</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {selectedInternship.documents.map((doc, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-lg hover:border-neon-blue/50 transition-colors">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                {doc.type === 'pdf' && <FileDown className="w-5 h-5 text-red-400 shrink-0" />}
                                                {doc.type === 'video' && <PlayCircle className="w-5 h-5 text-blue-400 shrink-0" />}
                                                {doc.type === 'link' && <ExternalLink className="w-5 h-5 text-green-400 shrink-0" />}
                                                <span className="text-sm font-medium text-slate-200 truncate">{doc.title}</span>
                                            </div>
                                            <a
                                                href={doc.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="ml-4 px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded hover:bg-neon-blue hover:text-black transition-colors"
                                            >
                                                OUVRIR
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Experience;
