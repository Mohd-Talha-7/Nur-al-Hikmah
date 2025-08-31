import React, { useState, useEffect, useRef } from 'react';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './icons/Icons';

const useCountUp = (end: number, duration: number) => {
    const [count, setCount] = useState(0);
    // FIX: Changed ref type to HTMLDivElement to match the component it is attached to.
    const ref = useRef<HTMLDivElement>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const startCount = () => {
            let start = 0;
            const startTime = Date.now();
            const animate = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const currentNum = Math.floor(progress * end);
                setCount(currentNum);
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount();
                    observer.current?.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        observer.current.observe(node);

        return () => observer.current?.disconnect();
    }, [end, duration]);

    return { count, ref };
};

const Counter: React.FC<{ value: number; duration?: number; label: string; suffix?: string }> = ({ value, duration = 2000, label, suffix = '' }) => {
    const { count, ref } = useCountUp(value, duration);
    return (
        <div ref={ref} className="text-center">
            <p className="text-4xl md:text-6xl font-bold text-emerald-green">
                {count.toLocaleString()}{suffix}+
            </p>
            <p className="mt-2 text-lg text-gray-600">{label}</p>
        </div>
    );
};

const testimonials = [
    { text: "This platform transformed my understanding of the Quran. The depth of knowledge is incredible, yet it's presented so clearly.", author: "Aisha, UK" },
    { text: "Being part of this global community has been a blessing. I've connected with fellow students from all over the world.", author: "Mohammed, USA" },
    { text: "The structured curriculum gave me the roadmap I always wanted. I finally feel like I'm on a clear path to knowledge.", author: "Fatima, Canada" },
];

const Impact: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
    
    useEffect(() => {
        const timer = setTimeout(nextTestimonial, 6000);
        return () => clearTimeout(timer);
    }, [currentTestimonial]);

    return (
        <section id="impact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Our Impact</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">By the grace of Allah, our efforts have reached thousands, fostering knowledge and strengthening faith across the globe.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <Counter value={100000} label="Students Taught" />
                    <Counter value={600} label="Mosques Supported" />
                </div>
            </div>

            <div className="mt-20 py-24 bg-gray-200 parallax" style={{backgroundImage: "url('https://picsum.photos/1920/1080?random=40&blur=3')"}}>
                <div className="relative container mx-auto px-6 text-center text-white">
                    <div className="absolute inset-0 bg-midnight-blue opacity-70"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <QuoteIcon className="w-16 h-16 text-gold-accent mx-auto mb-4" />
                         <div className="relative h-48 overflow-hidden">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className="text-2xl italic">"{testimonial.text}"</p>
                                    <footer className="mt-6 text-lg font-bold text-gold-accent tracking-wider">&mdash; {testimonial.author}</footer>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-center gap-4">
                            <button onClick={prevTestimonial} className="p-2 border rounded-full hover:bg-white/20 transition"><ChevronLeftIcon className="w-6 h-6"/></button>
                            <button onClick={nextTestimonial} className="p-2 border rounded-full hover:bg-white/20 transition"><ChevronRightIcon className="w-6 h-6"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;