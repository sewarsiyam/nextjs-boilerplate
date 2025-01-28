'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const LeftImageCard = ({  src="", alt="",  className = "" }) => (
    <div className={`rounded-lg overflow-hidden shadow-sm transition-transform duration-500 group-hover:translate-x-8 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
  
  const RightImageCard = ({ src="", alt="", className = "" }) => (
    <div className={`rounded-lg overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-x-8 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full py-5"
    >
      <div className="relative w-[95%] md:w-[80%] mx-auto group hover:bg-subPrimary/20">
        {/* Border with corners */}
        <div className="absolute inset-0 border border-primary/70 hover:bg-primary transition-all duration-300 group-hover:border-primary">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary" />
        </div>

        <div className="relative p-4 sm:p-6 md:p-8 lg:p-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-6 mx-auto">
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-1 md:gap-4 lg:gap-0 lg:space-y-4">
              <LeftImageCard 
                src="/web2.jpg" 
                alt="web1.png"
                className="h-24 sm:h-28 md:h-32 lg:h-36"
              />
               <RightImageCard 
                src="/web3.jpg" 
                alt="Website showcase 5"
                className="h-24 sm:h-28 md:h-32 lg:h-36 transition -translate-x-6 group-hover:translate-x-1"
              />
              <LeftImageCard 
                src="/web7.jpg" 
                alt="Website showcase 3"
                className="h-24 sm:h-28 md:h-32 lg:h-36"
              />
            </div>
            <div className="space-y-4 md:space-y-6 lg:col-span-3 p-2 sm:p-4 md:p-6 lg:p-12 text-center">
              <p className="font-medium text-base sm:text-lg text-blue-800 tracking-wider uppercase">
                Let&apos;s sadeim It?
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-serif leading-tight">
                &quot;From a Spark to a Galaxy&quot;
              </h1>
              <p className="text-gray-800 text-sm sm:text-base text-justify max-w-2xl mx-auto">
              sadeim began as a spark over 8 years ago and was officially founded in
                2024. With over a decade of experience in software, design, and
                digital marketing, we illuminate ideas and transform them into
                reality. From websites to e-commerce solutions, we believe in
                building not just projects, but connections — where every pixel,
                every code, every idea tells a story of light.
              </p>
            </div>
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-1 md:gap-4 lg:gap-0 lg:space-y-4">
              <RightImageCard 
                src="/web5.jpg" 
                alt="Website showcase 4"
                className="h-24 sm:h-28 md:h-32 lg:h-36"
              />
              <RightImageCard 
                src="/web6.jpg" 
                alt="Website showcase 5"
                className="h-24 sm:h-28 md:h-32 lg:h-36 transition translate-x-6 group-hover:translate-x-1"
              />
              <RightImageCard 
                src="/oloom.jpg" 
                alt="Website showcase 6"
                className="h-24 sm:h-28 md:h-32 lg:h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}