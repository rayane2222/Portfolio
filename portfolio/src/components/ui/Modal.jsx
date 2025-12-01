import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ children, onClose, title }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] px-4 py-8 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] bg-cyber-gray border border-slate-800 cyber-border animate-scaleIn flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-cyber-dark/50">
                    <h3 className="text-xl font-display font-bold text-white tracking-wide text-glow">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        aria-label="Fermer"
                        className="rounded-full p-2 hover:bg-slate-800 transition-colors group"
                    >
                        <X className="w-6 h-6 text-slate-400 group-hover:text-neon-blue transition-colors" />
                    </button>
                </div>
                <div className="overflow-y-auto p-0 custom-scrollbar flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
