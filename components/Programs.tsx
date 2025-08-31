
import React, { useState } from 'react';
import { PlayIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const galleryImages = [
    "https://picsum.photos/800/600?random=10",
    "https://picsum.photos/800/600?random=11",
    "https://picsum.photos/800/600?random=12",
    "https://picsum.photos/800/600?random=13",
];

const roadmapSteps = [
    { title: "Essentials", details: "Core beliefs, prayer, and foundational practices. Duration: 3 months. No prerequisites." },
    { title: "Foundations", details: "Aqidah, Fiqh of Worship, and Introduction to Hadith. Duration: 6 months. Prerequisite: Essentials." },
    { title: "Intermediate", details: "Usul al-Fiqh, Sciences of Quran, and Arabic Grammar. Duration: 1 year. Prerequisite: Foundations." },
    { title: "Advanced", details: "In-depth textual analysis of classical works. Duration: 2 years. Prerequisite: Intermediate." },
    { title: "Specialization", details: "Tafsir, Hadith, or Fiqh specialization tracks. Duration: 2 years. Prerequisite: Advanced." },
];

const QuranicStudiesPanel: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 px-6 text-left"
            >
                <h4 className="text-xl font-semibold text-midnight-blue">{title}</h4>
                <ChevronDownIcon className={`w-6 h-6 text-emerald-green transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-gray-50">{children}</div>
            </div>
        </div>
    );
};

const Programs: React.FC = () => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage(prev => (prev + 1) % galleryImages.length);
    const prevImage = () => setCurrentImage(prev => (prev - 1 + galleryImages.length) % galleryImages.length);

    return (
        <section id="programs" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Our Programs & Curricula</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">A structured path to knowledge, from fundamentals to specialization, grounded in tradition and relevant to today.</p>
                </div>

                {/* 1. Traditional Islamic Studies */}
                <div className="mb-20">
                    <h3 className="text-3xl font-serif font-bold text-center text-emerald-green mb-8">Traditional Islamic Studies</h3>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <img src="https://picsum.photos/800/600?random=9" alt="World Map of Centers" className="rounded-lg shadow-xl" />
                            <p className="text-center mt-4 text-gray-600 italic">Our global network of scholars and centers. Hover over map points for stats (interactive feature). 34,000+ scholars trained.</p>
                        </div>
                        <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-xl">
                             {galleryImages.map((src, index) => (
                                <img key={src} src={src} alt="Community event" className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`} />
                            ))}
                            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"><ChevronLeftIcon className="w-6 h-6" /></button>
                            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"><ChevronRightIcon className="w-6 h-6" /></button>
                        </div>
                    </div>
                </div>

                {/* 2. Quranic & Arabic Studies */}
                <div className="mb-20">
                    <h3 className="text-3xl font-serif font-bold text-center text-emerald-green mb-8">Quranic & Arabic Studies</h3>
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                        <QuranicStudiesPanel title="Verse Breakdown: Surah Al-Fatiha">
                            <p className="text-lg mb-4"><strong>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</strong></p>
                            <p><strong>Bism</strong> (In the name of) - A preposition and a noun, indicating commencement with Allah's name for blessings.</p>
                            <p><strong>Allah</strong> - The proper name for God.</p>
                            <p><strong>Ar-Rahman</strong> (The Entirely Merciful) - Signifies encompassing mercy.</p>
                            <p><strong>Ar-Rahim</strong> (The Especially Merciful) - Signifies mercy specific to believers.</p>
                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[...Array(4)].map((_, i) => (
                                <div key={i} className="relative group cursor-pointer">
                                    <img src={`https://picsum.photos/400/225?random=${20+i}`} alt={`Lecture thumbnail ${i+1}`} className="rounded-md" />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayIcon className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                ))}
                            </div>
                        </QuranicStudiesPanel>
                        <QuranicStudiesPanel title="Arabic Grammar: The Idafa Construction">
                            <p>Details about the possessive construction in Arabic, with examples and diagrams, would be displayed here when expanded.</p>
                        </QuranicStudiesPanel>
                    </div>
                </div>

                {/* 3. Structured Curriculum Roadmap */}
                <div>
                    <h3 className="text-3xl font-serif font-bold text-center text-emerald-green mb-12">Structured Curriculum Roadmap</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 perspective-container">
                        {roadmapSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="w-64 h-48 cursor-pointer" onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}>
                                    <div className={`relative w-full h-full flip-card ${flippedIndex === index ? 'flipped' : ''}`}>
                                        {/* Front */}
                                        <div className="absolute w-full h-full flip-card-front bg-midnight-blue text-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
                                            <div className="text-gold-accent font-bold text-xl mb-2">Step {index + 1}</div>
                                            <h4 className="text-2xl font-serif font-bold text-center">{step.title}</h4>
                                        </div>
                                        {/* Back */}
                                        <div className="absolute w-full h-full flip-card-back bg-white text-gray-700 rounded-lg shadow-xl flex flex-col items-center justify-center p-4 text-center border-2 border-emerald-green">
                                            <p>{step.details}</p>
                                        </div>
                                    </div>
                                </div>
                                {index < roadmapSteps.length - 1 && <div className="hidden md:block text-2xl text-gold-accent font-bold">&rarr;</div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
