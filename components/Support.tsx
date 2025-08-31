
import React, { useState, useEffect } from 'react';
import { BookIcon, MosqueIcon, ScholarshipIcon } from './icons/Icons';

const donationTiers = [
    { icon: <BookIcon className="w-12 h-12 text-emerald-green" />, title: "Sponsor a Student", amount: 50, description: "Provide a month of access to our foundational courses for one student." },
    { icon: <MosqueIcon className="w-12 h-12 text-emerald-green" />, title: "Support a Program", amount: 250, description: "Help us develop new course materials and support our teaching staff." },
    { icon: <ScholarshipIcon className="w-12 h-12 text-emerald-green" />, title: "Fund a Scholarship", amount: 1000, description: "Fund a full year of advanced studies for a dedicated student in need." },
];

const ProgressBar: React.FC<{ progress: number; goal: number; label: string }> = ({ progress, goal, label }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Animate the progress bar on component mount
        const percentage = Math.min((progress / goal) * 100, 100);
        setTimeout(() => setWidth(percentage), 100);
    }, [progress, goal]);

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2 text-midnight-blue">
                <span className="font-bold">{label}</span>
                <span className="text-sm font-semibold">${progress.toLocaleString()} / ${goal.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                    className="bg-gradient-to-r from-emerald-green to-green-400 h-4 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};


const Support: React.FC = () => {
    return (
        <section id="support" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Support Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Your contribution is an investment in knowledge that benefits generations. Be a part of this Sadaqa Jariya (ongoing charity).</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {donationTiers.map(tier => (
                        <div key={tier.amount} className="border border-gray-200 rounded-lg p-8 text-center bg-white shadow-md hover:shadow-2xl hover:border-emerald-green transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
                            <div className="flex justify-center mb-4">{tier.icon}</div>
                            <h3 className="text-2xl font-serif font-bold text-midnight-blue mb-2">{tier.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{tier.description}</p>
                            <button className="w-full bg-gold-accent text-midnight-blue font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                                Donate ${tier.amount}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                    <h3 className="text-3xl font-serif font-bold text-center text-emerald-green mb-8">Live Campaign Status</h3>
                    <ProgressBar label="Technology Fund" progress={45200} goal={75000} />
                    <ProgressBar label="Scholarship Program" progress={180500} goal={250000} />
                </div>
            </div>
        </section>
    );
};

export default Support;
