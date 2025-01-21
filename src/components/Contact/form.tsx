'use client'

import React, { useRef, useState ,FormEvent } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!formRef.current) return;

        setIsLoading(true);
        setMessage({ text: '', type: '' });

        try {
            const result = await emailjs.sendForm(
                'service_6b9p09f',
                'template_g60s778',
                formRef.current,
                'RNR2EcBJXMs0yj6s5'
            );

            if (result.status === 200) {
                setMessage({
                    text: 'Message sent successfully!',
                    type: 'success'
                });
                formRef.current.reset();
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setMessage({
                text: 'Failed to send message. Please try again.',
                type: 'error'
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                Got a project you want to collaborate on? Or just fancy a chat?
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="user_name" className="inline-flex items-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                            />
                        </svg>
                        <span>Name<span className='text-red-500'>*</span></span>
                    </label>
                    <input
                        id="user_name"
                        type="text"
                        name="user_name"
                        required
                        className="mt-1 w-full border-b p-3 shadow-sm border-gray-300 pb-2 focus:border-black focus:outline-none transition-colors"
                        disabled={isLoading}
                    />
                </div>

                <div>
                    <label htmlFor="user_email" className="inline-flex items-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                            />
                        </svg>
                        <span>Email<span className='text-red-500'>*</span></span>
                    </label>
                    <input
                        id="user_email"
                        type="email"
                        name="user_email"
                        required
                        className="mt-1 w-full border-b p-3 shadow-sm border-gray-300 pb-2 focus:border-black focus:outline-none transition-colors"
                        disabled={isLoading}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="inline-flex items-center gap-2">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
                            />
                        </svg>
                        <span>Message<span className='text-red-500'>*</span></span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="mt-1 w-full border-b p-3 shadow-sm border-gray-300 pb-2 focus:border-black focus:outline-none transition-colors resize-none"
                        disabled={isLoading}
                    />
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 font-medium transition-colors ${
                            isLoading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>

                    {message.text && (
                        <div 
                            className={`text-sm text-center p-3 rounded-lg ${
                                message.type === 'success' 
                                    ? 'bg-green-50 text-green-600' 
                                    : 'bg-red-50 text-red-600'
                            }`}
                        >
                            {message.text}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default ContactForm;