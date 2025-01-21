export default function PackagesSection() {
    const packages = [
        {
            logo: "/accenture-logo.png",
            category: "Enterprises",
            title: "Package One",
            description: "Premium enterprise solution with full features",
            link: "#",
        },
        {
            logo: "/philips-logo.png",
            category: "Business",
            title: "Package Two",
            description: "Reduce costs by 80% with our business solution",
            link: "#",
        },
        {
            logo: "/buffer-logo.png",
            category: "Startup",
            title: "Package Three",
            description: "Perfect for small teams and startups",
            link: "#",
        },
    ];

    return (
        <>
            <div className="mx-auto">
                <div className="text-center mb-8">
                    <div>
                        <img src="logo.png" alt="logo" className="h-12 w-auto mx-auto mb-5" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">
                        From startups to enterprises,{" "}
                        <span className="text-primary">Sadeim</span> scales
                    </h2>
                    <p className="text-xl text-gray-600">
                        with teams of any size in any industry.
                    </p>

                </div>

                {/* Packages Grid */}
                <div className=" border-y bottom-1 ">
                    <div className="w-[90%] lg:w-[80%] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-x">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between p-8"
                                >
                                    <div className="h-8 mb-6">
                                        <img
                                            src={pkg.logo}
                                            alt={pkg.title}
                                            className="h-full w-auto object-contain"
                                        />
                                    </div>
                                    <div className="text-sm text-gray-500 mb-2">{pkg.category}</div>
                                    <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
                                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                                    <a
                                        href={pkg.link}
                                        className="inline-flex items-center text-primary hover:underline"
                                    >
                                        Read customer story
                                        <svg
                                            className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
