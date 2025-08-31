
import React from 'react';
import { QuestionIcon } from './icons/Icons';

const qas = [
    { q: "What is the proper way to make up missed prayers?", a: "Scholars explain that missed prayers should be made up as soon as possible, in the order they were missed..." },
    { q: "How can I increase my focus (khushu) in Salah?", a: "Increasing focus involves understanding the words you recite, preparing mentally beforehand, and minimizing distractions..." },
    { q: "Is it permissible to combine prayers while traveling?", a: "Yes, in the Hanafi school, prayers can be combined in form but not in time, while other schools permit combining at the time of one of the prayers..." },
];

const forumTopics = [
    { title: "Reflections on Surah Yusuf", author: "StudentA", replies: 42 },
    { title: "Best resources for learning Arabic?", author: "SeekerOfKnowledge", replies: 121 },
    { title: "Monthly Book Club: 'The Beginning of Guidance'", author: "Admin", replies: 89 },
];

const Community: React.FC = () => {
    return (
        <section id="community" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-midnight-blue">Community & Interaction</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Learn together, grow together. Engage with scholars and fellow students through our Q&A, forums, and live events.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Q&A Knowledge Base */}
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-emerald-green mb-6">Knowledge Base</h3>
                        <div className="relative mb-4">
                            <input type="search" placeholder="Search questions..." className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-green focus:outline-none" />
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {qas.map((qa, i) => (
                                <div key={i} className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <QuestionIcon className="w-8 h-8 text-gold-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-lg text-midnight-blue">{qa.q}</h4>
                                            <p className="text-gray-600 mt-1">{qa.a}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Discussion Forum & Events */}
                    <div>
                        {/* Forum Preview */}
                        <div className="mb-12">
                            <h3 className="text-3xl font-serif font-bold text-emerald-green mb-6">Trending Discussions</h3>
                            <div className="relative h-48 group">
                                {forumTopics.map((topic, index) => (
                                    <div key={index} className="absolute w-full p-4 bg-white rounded-lg shadow-xl border border-gray-200 transition-transform duration-300 ease-out group-hover:rotate-0 group-hover:translate-y-0"
                                         style={{
                                             zIndex: forumTopics.length - index,
                                             transform: `rotate(${ (index - 1) * 4}deg) translateY(${index * 12}px)`,
                                             bottom: 0,
                                         }}>
                                        <h5 className="font-bold text-midnight-blue truncate">{topic.title}</h5>
                                        <p className="text-sm text-gray-500">by {topic.author} &bull; {topic.replies} replies</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Event Calendar */}
                        <div>
                           <h3 className="text-3xl font-serif font-bold text-emerald-green mb-6">Upcoming Events</h3>
                           <div className="bg-white rounded-lg shadow-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <button className="text-gray-600">&larr;</button>
                                    <h4 className="text-xl font-bold text-midnight-blue">December 2024</h4>
                                    <button className="text-gray-600">&rarr;</button>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="font-bold text-gray-500">{day}</div>)}
                                    {[...Array(31)].map((_, i) => (
                                        <div key={i} className={`p-2 rounded-full cursor-pointer ${i + 1 === 15 ? 'bg-emerald-green text-white' : i + 1 === 22 ? 'bg-gold-accent text-midnight-blue' : 'hover:bg-gray-100'}`}>
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t">
                                    <p><strong className="text-emerald-green">Dec 15:</strong> Live Tafsir Session</p>
                                    <p><strong className="text-gold-accent">Dec 22:</strong> Special Lecture: The Seerah</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;
