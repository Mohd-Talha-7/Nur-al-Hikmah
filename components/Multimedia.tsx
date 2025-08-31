
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from './icons/Icons';

const seminarImages = [
    "https://picsum.photos/1200/600?random=30",
    "https://picsum.photos/1200/600?random=31",
    "https://picsum.photos/1200/600?random=32",
];

const Multimedia: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => setCurrentImage(prev => (prev + 1) % seminarImages.length);
    const prevImage = () => setCurrentImage(prev => (prev - 1 + seminarImages.length) % seminarImages.length);

    return (
        <section id="multimedia" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Multimedia Hub</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Engage with our content through live streams, recorded lectures, podcasts, and photo galleries from our global events.</p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Main Video Player */}
                    <div className="lg:col-span-3 bg-black rounded-lg shadow-xl overflow-hidden">
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe 
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full">
                            </iframe>
                        </div>
                    </div>

                    {/* Podcast Section */}
                    <div className="lg:col-span-2 bg-midnight-blue text-white p-8 rounded-lg shadow-xl flex flex-col justify-between">
                        <div>
                           <h3 className="text-2xl font-serif font-bold text-gold-accent mb-2">Wisdom Weekly Podcast</h3>
                           <p className="text-gray-300 mb-4">Episode 12: "Patience in Times of Trial"</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="bg-gold-accent text-midnight-blue p-4 rounded-full">
                                {isPlaying ? <PauseIcon className="w-8 h-8"/> : <PlayIcon className="w-8 h-8"/>}
                            </button>
                            {/* Dynamic waveform animation placeholder */}
                            <svg width="100%" height="50" className="flex-grow">
                                <rect x="0" y="20" width="3" height="10" fill="#FBBF24" />
                                <rect x="5" y="15" width="3" height="20" fill="#FBBF24" />
                                <rect x="10" y="5" width="3" height="40" fill="#FBBF24" />
                                <rect x="15" y="18" width="3" height="14" fill="#FBBF24" />
                                <rect x="20" y="22" width="3" height="6" fill="#FBBF24" />
                                <rect x="25" y="10" width="3" height="30" fill="#FBBF24" />
                                <rect x="30" y="0" width="3" height="50" fill="#FBBF24" />
                                <rect x="35" y="15" width="3" height="20" fill="#FFFFFF" />
                                <rect x="40" y="20" width="3" height="10" fill="#FFFFFF" />
                                <rect x="45" y="12" width="3" height="26" fill="#FFFFFF" />
                                {/* ... repeat pattern */}
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Photo Slider */}
                <div className="mt-16">
                     <h3 className="text-3xl font-serif font-bold text-center text-emerald-green mb-8">International Seminars</h3>
                     <div className="relative max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                                {seminarImages.map((src) => (
                                    <img key={src} src={src} alt="International seminar" className="w-full flex-shrink-0" />
                                ))}
                            </div>
                        </div>
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"><ChevronLeftIcon className="w-8 h-8" /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"><ChevronRightIcon className="w-8 h-8" /></button>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Multimedia;
