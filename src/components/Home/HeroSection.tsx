'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { ScrollAnimation } from '../ScrollAnimation';


export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['Heart', 'Comfort', 'Care'];
  const typingSpeed = 100;
  const deletingSpeed = 80;
  const pauseTime = 1500;

  useEffect(() => {
    let timer;

    if (isDeleting) {
      if (currentWord.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
        return;
      }

      timer = setTimeout(() => {
        setCurrentWord(prev => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      const fullWord = words[currentIndex];
      if (currentWord === fullWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return;
      }

      timer = setTimeout(() => {
        setCurrentWord(fullWord.slice(0, currentWord.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, currentIndex]);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-[89vh] mx-auto lg:rounded-2xl lg:w-[90%] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#112136] opacity-80">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-0 h-[32rem] w-[34rem] hidden lg:block stroke-gray-200/10 [mask-image:radial-gradient(32rem_32rem_at_top_left,white,transparent)]"
        >
          <defs>
            <pattern
              id="gradient-pattern"
              width={100}
              height={100}
              patternUnits="userSpaceOnUse"
            >
              <path d="M50 100V.5M.5 .5H100" fill="none" />
            </pattern>
          </defs>
          <svg x="0" y="0" className="overflow-visible fill-gray-50/10">
            <path
              d="M-50.5 0h100v100h-100Z M349.5 0h100v100h-100Z M249.5 200h100v100h-100Z M-150.5 300h100v100h-100Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#gradient-pattern)"
          />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[32rem] w-[34rem] hidden lg:block stroke-gray-200/10 [mask-image:radial-gradient(32rem_32rem_at_bottom_right,white,transparent)]"
        >
          <defs>
            <pattern
              id="gradient-pattern"
              width={100}
              height={100}
              patternUnits="userSpaceOnUse"
            >
              <path d="M50 100V.5M.5 .5H100" fill="none" />
            </pattern>
          </defs>
          <svg x="0" y="0" className="overflow-visible fill-gray-50/10">
            <path
              d="M-50.5 0h100v100h-100Z M349.5 0h100v100h-100Z M249.5 200h100v100h-100Z M-150.5 300h100v100h-100Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#gradient-pattern)"
          />
        </svg>
      </div>

      <Image
        alt="Fictional planet with colourful night sky and stars"
        src="/fictional-planet-with-colourful-night-sky-stars-nebula.webp"
        className="absolute inset-0 -z-20 size-full object-cover object-center animate-slow-zoom"
        layout="fill"
        objectFit="cover"
        priority={true}
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -z-10 transform-gpu blur-[80px]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[40rem] bg-gradient-to-br from-purple-600 via-[#F1E9D2] to-orange-500 opacity-25"
        />
      </div>

      <div className="relative z-10 mx-auto w-[90%] lg:max-w-7xl px-6 lg:px-8 text-center">
      <ScrollAnimation animation="fade">
        <div className="mx-auto max-w-2xl flex flex-col gap-8">
          <h2 className="text-gray-200 text-center font-bold text-3xl px-3 mb-4"> Business Development Alliance </h2>
          <div className="w-full h-16">
            <svg className="w-full h-full" id="Layer_2" data-name="Layer 2" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.37 55.64">
              <g id="Layer_1-2" data-name="Layer 1">
                <g>
                  <g>
                    <path d="M19.92,13.92h68.71L98.96,0H16.44C7.38,0,0,7.36,0,16.39v2.01c0,9.03,7.38,16.38,16.44,16.38h36.56c1.36,0,2.48,1.11,2.48,2.47v2.01c0,1.36-1.11,2.47-2.48,2.47H9.5L0,55.64h56.48c9.06,0,16.42-7.34,16.42-16.38v-2.01c0-9.03-7.36-16.38-16.42-16.38H19.92c-1.36,0-2.48-1.11-2.48-2.47v-2.01c0-1.36,1.11-2.47,2.48-2.47Z" />
                    <path d="M233.14,0h-54.59v55.64h54.59c11.5,0,20.93-9.39,20.93-20.86v-13.9c0-11.49-9.43-20.87-20.93-20.87ZM236.62,32.96c0,4.82-3.95,8.77-8.78,8.77h-31.87V13.92h31.87c4.83,0,8.78,3.93,8.78,8.75v10.29Z" />
                    <path d="M279.39,34.78h35.34l8.05-13.9h-43.39v-6.95h47.4l8.05-13.92h-72.9v55.64h64.85l8.05-13.9h-55.45v-6.95Z" />
                    <path d="M342.75,0v55.64h17.43V0h-17.43Z" />
                    <path d="M440.97,0l-27.76,33.72L385.45,0h-17.41v55.64h17.43V21.95l27.74,33.69,27.73-33.69v33.69h17.43V0h-17.39Z" />
                  </g>
                  <path d="M105.49,55.64h65.11L131.93,0h-17.45l-38.68,55.64h21.22l26.19-37.67,16.53,23.77h-24.58l-9.66,13.9Z" />
                </g>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-center text-4xl lg:text-6xl font-bold tracking-tight">
            <span className="text-gray-200 px-3">Take</span>
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              {currentWord}
            </span>
          </div>
        </div>
        </ScrollAnimation>

      </div>
    </div>
  );
}