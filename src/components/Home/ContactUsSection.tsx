export default function ContactUsSection() {
  return (
    <>
      <div className="w-full lg:w-[75%] mx-auto p-5 pt-10 lg:p-16 relative group ">
        <div
          className="absolute -right-24 -top-24 w-48 h-48 bg-[#eee6d0]/5 rounded-full blur-3xl 
                   group-hover:bg-[#eee6d0]/10 transition-colors duration-500"
        />
        <div
          className="absolute -left-24 -bottom-24 w-48 h-48 bg-[#eee6d0]/5 rounded-full blur-3xl 
                   group-hover:bg-[#eee6d0]/10 transition-colors duration-500"
        />
        
        <div className="relative text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Project Link */}
            <div className="inline-flex flex-col items-center">
              <a 
                href="/contact_us" 
                className="group/link relative inline-flex items-center gap-4 text-3xl lg:text-4xl md:text-6xl font-bold text-white hover:text-[#eee6d0] transition-colors duration-300"
              >
                Let&apos;s start a project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transform transition-transform duration-300 group-hover/link:translate-x-2"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
                
                {/* Underline effect */}
                <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-white/30">
                  <div className="absolute top-0 left-0 w-0 h-full bg-[#eee6d0] transition-all duration-300 group-hover/link:w-full"/>
                </div>
              </a>
            </div>

            {/* Call Me Button */}
            <a 
              href="tel:+1 (773) 814-9061" 
              className="group/call relative inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white hover:text-[#eee6d0] transition-colors duration-300 rounded-full border border-white/20 hover:border-[#eee6d0] bg-white/5 hover:bg-white/10"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transform transition-all duration-300 group-hover/call:scale-110"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}