import ContactUsSection from "@/components/Home/ContactUsSection";
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Works', href: '/#works' },
  // { name: 'Packages', href: '/#packages' },
];
export default function Footer() {
  return (
    <footer className="bg-[#112136] rounded-t-[3rem] lg:rounded-t-[6rem] mt-20 overflow-hidden">
  

      <ContactUsSection />


      <div className="w-[90%] lg:w-[80%] mx-auto">

        {/* Main Footer Content */}
        <div className="border-t border-white/10">
          <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/footerlogo.svg"
                alt="sadeim Logo"
                className="h-8"
              />
              <svg id="Layer_2" className="w-36 fill-[#f1e9d2]" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 458.37 55.64">
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

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex gap-4">
              <a  href="https://www.instagram.com/sadeim_us" target="_blank"  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="#FFF" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a  href="https://www.instagram.com/sadeim_us" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="#FFF" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a  href="https://www.instagram.com/sadeim_us" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="#FFF" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sadeim_us" target="_blank" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="#FFF" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center py-5 border-t border-white/10 text-sm text-white/60">
            <span>© {new Date().getFullYear()} sadeim. All rights reserved</span>

            {/* <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>


    </footer>
  );
}

