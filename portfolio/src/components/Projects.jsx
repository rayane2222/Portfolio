import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import Modal from './ui/Modal';
import { ExternalLink, FileDown, Eye, Github, PlayCircle } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projets" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            PROJETS <span className="text-neon-blue">RÉCENTS</span>
                        </h2>
                        <div className="h-1 w-24 bg-neon-blue rounded-full"></div>
                    </div>
                    <p className="text-slate-400 max-w-md text-right font-mono text-sm">
            // SÉLECTION DE TRAVAUX IOT & EMBARQUÉ
                        <br />
            // CLIQUEZ POUR INITIALISER LES DÉTAILS
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden cursor-pointer hover:border-neon-blue transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90"></div>

                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur border border-slate-700 rounded-full text-xs font-mono text-neon-blue">
                                    {project.status}
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="absolute -top-6 right-6 w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center group-hover:bg-neon-blue group-hover:text-black transition-colors shadow-lg">
                                    <Eye className="w-6 h-6" />
                                </div>

                                <div className="text-neon-blue text-xs font-mono mb-2 uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2 py-1 text-slate-500 text-xs font-mono">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <Modal
                    title={selectedProject.title}
                    onClose={() => setSelectedProject(null)}
                >
                    <div className="grid lg:grid-cols-2 gap-8 p-6">
                        <div className="space-y-6">
                            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            <div>
                                <h4 className="text-neon-blue font-display font-bold mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-slate-800/50 text-slate-200 text-sm font-mono rounded border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-neon-blue font-display font-bold mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                                    Description
                                </h4>
                                <p className="text-slate-300 leading-relaxed">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {selectedProject.documents && selectedProject.documents.length > 0 && (
                                <div>
                                    <h4 className="text-neon-blue font-display font-bold mb-3 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-neon-blue rounded-full"></span>
                                        Documents
                                    </h4>
                                    <div className="space-y-3">
                                        {selectedProject.documents.map((doc, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-neon-blue/50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <FileDown className="w-5 h-5 text-slate-400" />
                                                    <span className="text-sm font-medium text-slate-200">{doc.title}</span>
                                                </div>
                                                <a
                                                    href={doc.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="px-3 py-1.5 bg-neon-blue/10 text-neon-blue text-xs font-bold rounded hover:bg-neon-blue hover:text-black transition-colors"
                                                >
                                                    OUVRIR
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedProject.github && (
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    Voir sur GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Projects;
