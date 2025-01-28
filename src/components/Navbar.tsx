'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'works', href: '/#works' },
  { name: 'packages', href: '/#packages' },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300  ${scrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : ''
      }`}>
      <nav aria-label="Global" className="flex mx-auto w-[95%] lg:w-[90%] items-center justify-between p-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 gap-1 flex items-center">
            <img
              alt="logo"
              src="logo.png"
              className="h-8 w-auto"
            />
            <img
              alt="logo"
              src="logoText.svg"
              className="h-3 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${scrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm/6 font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-gray-900'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href='contact_us' className="bg-primary rounded-full px-8 py-3 shadow text-white hover:bg-primary/90">
            <span>Contact Us &rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-1">
            <img
              alt="logo"
              src="logo.png"
              className="h-8 w-auto"
            />
            <img
              alt="logo"
              src="logoText.svg"
              className="h-3 w-auto"
            />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href='contact_us' 
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}