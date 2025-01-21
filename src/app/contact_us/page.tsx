import DataContactSection from '@/components/Contact/data';

import FormContactSection from '@/components/Contact/form';

export default function ContactSection() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-28 breadcrumb__area" data-aos="fade-down">
        <img src="/banner_1.jpg" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-position-N60px" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 relative z-30">
            <h2 className="text-white font-bold lg:font-extrabold text-lg lg:text-3xl">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <section className="w-full max-w-7xl mx-auto px-4 pt-16 md:pt-20 ">


        <h1 className="text-3xl md:text-6xl font-bold mb-8 lg:mb-16">LET&apos;S GET IN TOUCH</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            <DataContactSection />

            <FormContactSection />
        </div>
      </section>
    </>
  );
}