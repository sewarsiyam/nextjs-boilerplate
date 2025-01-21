'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}


const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
    <div className="relative overflow-hidden bg-white rounded-2xl p-6 
                    flex flex-col gap-4 group 
                    transition-all duration-500 ease-in-out
                    hover:shadow-[0_0_40px_rgba(0,0,0,0.1)]
                    hover:bg-primary hover:scale-[1.02]
                    cursor-pointer border border-transparent
                    hover:border-white/10">
        <div className="relative z-10 inline-flex">
            <div className="p-3 rounded-xl bg-gray-50/80 
                        transition-all duration-500 ease-in-out
                        group-hover:bg-white/10">
                <div className="w-6 h-6 
                        [&>svg]:w-full [&>svg]:h-full 
                        [&>svg]:text-primary
                        group-hover:[&>svg]:text-white 
                        transition-colors duration-500">
                    {Icon}
                </div>
            </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 relative z-10
                     group-hover:text-white transition-colors duration-500">
            {title}
        </h3>
        <p className="text-gray-600 leading-relaxed relative z-10
                    group-hover:text-white/80 transition-colors duration-500">
            {description}
        </p>
        <span className="absolute w-64 -right-24 top-0 opacity-[0.02]
                       group-hover:opacity-10 transition-all duration-700 ease-in-out
                       transform rotate-12 group-hover:rotate-0">
            <svg
                viewBox="0 0 317.09 310.59"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
            >
                <g data-name="Layer 1">
                    <path d="M.08 0h316.9v310.59H.08z" fill="transparent" />
                    <path
                        fill="currentColor"
                        d="M158.7 23.84l73.68 41.81-.11 48.02-3.72 2.09-49.04 27.6-4.45-2.53-12.06-6.86V98.12l16.6 9.45 21.08-11.88.03-12.18-73.68-41.83.09-41.68h52.37l-20.76 11.7-.03 12.14z"
                    />
                    <path
                        fill="currentColor"
                        d="M232.53 0l-.12 51.69-31.59-17.92.05-22L180.17 0h52.36zM42.4 125.29l73.7-41.79 10.76 6.09v23.83l-16.6 9.4 31.75 17.83h.01l11.94-6.76 4.46-2.52.08-.04-.01-35.76V71.69l-42.41-24.01-73.7 41.8-10.74-6.07V59.55l21.07-11.92 19.44 10.99 31.59-17.91-51.03-28.87L0 41.65l.01 59.65 42.39 23.99z"
                    />
                    <path
                        fill="currentColor"
                        d="M137.44 162.11l-31.58 17.88-.05-18.83-.02-.01-.33-.19-20.77-11.65-10.74 6.13.36 83.45L32 263.01.08 245.09V161.7l29.85-17.02.15 35.78-19.4 11.06.08 23.84 21.13 11.85 10.72-6.11-.36-83.44 42.34-24.15 3.28 1.85 17.86 10.02 31.65 17.78v.11l.01 4.99.05 13.85zm-21 136.75l20.72 11.73H84.81v-51.58l31.63 17.85v22z"
                    />
                    <path
                        fill="currentColor"
                        d="M190.21 268.78v41.81h-52.36l20.73-11.74v-12.14l-73.77-41.66v-48.01l21.08-11.92 31.57-17.88.04-.02 4.5 2.54 12.15 6.88v35.79l-16.65-9.41-21.06 11.92v12.18l73.77 41.66z"
                    />
                    <path
                        fill="currentColor"
                        d="M274.64 185.16l-73.67 41.83-10.76-6.08v-23.86l16.48-9.34-31.74-17.83-11.77 6.67-4.59 2.6-.05.03.02 35.75v9.02l.01 14.86 42.44 23.98 73.67-41.82 10.74 6.06.02 23.86-21.07 11.93-19.44-10.99-31.58 17.94 51.05 28.85 52.69-29.85-.05-59.65-42.4-23.96z"
                    />
                    <path
                        fill="currentColor"
                        d="M316.98 65.6v83.49l-29.94 16.95-.04-35.78 19.43-10.99V95.43L285.34 83.5l-10.73 6.08.09 83.44-42.41 24.01-10.69-6.04-10.36-5.86-31.61-17.89-.03-.02v-4.94l-.02-13.78 31.63-17.85.01 18.66 10.67 6.04 10.4 5.89h.01l10.75-6.1-.09-83.44 42.39-23.99 31.63 17.89z"
                    />
                </g>
            </svg>
        </span>
    </div>
);

const ServicesSection = () => {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
            ),
            title: "Web Development",
            description: "Custom web solutions built with cutting-edge technologies for optimal performance and user experience."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            ),
            title: "Apps Development",
            description: "Native and cross-platform mobile applications that deliver seamless experiences across devices."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
            ),
            title: "Design",
            description: "Creative and intuitive designs that combine aesthetics with functionality for maximum impact."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
            ),
            title: "Branding",
            description: "Strategic brand development that helps businesses stand out and connect with their audience."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            ),
            title: "Marketing",
            description: "Data-driven digital marketing strategies that drive growth and engagement."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
            ),
            title: "SaaS Solutions",
            description: "Scalable software-as-a-service solutions tailored to your business needs."
        }
    ];

    return (
        <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full py-5"
      >
        <div className="mx-auto w-[90%] lg:w-[80%] space-y-12">
            <div className="text-center space-y-4 mb-16">
                <span className="font-medium text-blue-800 tracking-wider uppercase">
                    For Every Dreamer
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                    What Does sadeim Build?
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
        </motion.div>
    );
};

export default ServicesSection;