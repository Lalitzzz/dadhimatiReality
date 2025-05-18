import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Plot Valuation",
      description: "Accurate market valuation of your land with detailed analysis of location, development potential, and future appreciation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Plot Acquisition",
      description: "End-to-end assistance in purchasing premium JDA-approved plots with clear titles and proper documentation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Plot Resale",
      description: "Maximize returns on your land investment with our strategic marketing and negotiation services.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Legal Verification",
      description: "Comprehensive title checks, zoning verification, and legal clearance for worry-free ownership.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Land Development",
      description: "Expert guidance on plot development, including layout planning and necessary approvals.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Investment Advisory",
      description: "Strategic advice on high-growth land parcels with detailed ROI projections.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

  const locations = [
    {
      name: "Ajmer Road",
      price: "₹15,000 - ₹25,000/sq.yd",
      features: ["Prime commercial potential", "JDA approved", "Excellent connectivity"],
      image: "/images/landplotss.jpg"
    },
    {
      name: "Mahendra SEZ Ring Road",
      price: "₹20,000 - ₹35,000/sq.yd",
      features: ["Industrial corridor", "Future growth area", "Infrastructure development"],
      image: "/images/samurai.png"
    },
    {
      name: "Nevta & Sirsi Road",
      price: "₹18,000 - ₹30,000/sq.yd",
      features: ["Residential hotspot", "Society approved", "Peaceful environment"],
      image: "/images/timeho.jpg"
    },
    {
      name: "Bhayrota & Bindayaka",
      price: "₹15,000 - ₹22,000/sq.yd",
      features: ["Affordable options", "Good road connectivity", "Emerging locality"],
      image: "/images/wedthreee.jpg"
    },
    {
      name: "Group Gogul Kripa Homeland",
      price: "₹25,000 - ₹40,000/sq.yd",
      features: ["Premium development", "Gated community", "All amenities"],
      image: "/images/wedtwo.jpg"
    },
    {
      name: "KP Balaji & Chart",
      price: "₹30,000 - ₹70,000/sq.yd",
      features: ["Luxury plots", "Prime location", "High appreciation potential"],
      image: "/images/finallygotit.jpg"
    }
  ]

  const projects = [
    {
      name: "KP Balaji Township",
      location: "Main Ajmer Road, Near Toll Plaza",
      tagline: "WHERE STRENGTH MEETS COMMUNITY",
      features: [
        "New Residential Township with Club House",
        "Basketball Court",
        "Underground Electrification",
        "Nearby School",
        "Best Development"
      ],
      highlight: "Don't miss healthy lifestyle. It pays off.",
      image: "/images/samurai.png"
    },
    {
      name: "Raghav Vihar",
      location: "Ring Road, Near Mahindra SEZ",
      tagline: "Calm Play Areas, Blissful Childhood",
      features: [
        "Premium Residential Township",
        "Gated Community",
        "Water Plantation",
        "Sewage System",
        "Damar Features"
      ],
      highlight: "For the Future You Deserve",
      image: "/images/ragav.jpg"
    },
    {
      name: "Mahindra SEZ Plots",
      location: "Mahindra World City, Jaipur",
      tagline: "A World-Class Business Destination",
      features: [
        "3,000-acre development",
        "2,000-acre multi-product SEZ",
        "130+ working companies",
        "100,000+ employees",
        "250+ forecasting companies"
      ],
      highlight: "At par with the best business destinations in the world",
      image: "/images/timeho.jpg"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-opacity-75">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src="/images/land-services-hero.jpg"
            alt="Land development services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Land & Plot Services
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Premium land acquisition and development services across Jaipur's most promising locations
          </p>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Featured</span>
            <span className="block text-blue-600">Residential Projects</span>
          </h2>
          <div className="mt-3 mx-auto w-24 border-b-4 border-blue-200"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Explore our premium residential townships and plots
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
              <div className="md:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96 w-full">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-blue-300">{project.location}</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">{project.tagline}</h3>
                <p className="mt-4 text-blue-600 font-medium">{project.highlight}</p>
                <ul className="mt-6 space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Get Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Comprehensive</span>
              <span className="block text-blue-600">Land Services</span>
            </h2>
            <div className="mt-3 mx-auto w-24 border-b-4 border-blue-200"></div>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Specialized solutions for all your land acquisition and development needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-lg p-6 h-full shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Pricing */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Prime Locations</span>
              <span className="block text-blue-600">Current Plot Prices</span>
            </h2>
            <div className="mt-3 mx-auto w-24 border-b-4 border-blue-200"></div>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              JDA and society approved plots in Jaipur's most promising areas
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={location.image}
                    alt={location.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">{location.name}</h3>
                    <p className="text-blue-300 font-medium">{location.price}</p>
                  </div>
                </div>
                
                {/* Details that appear on hover */}
                <div className="p-6 transition-all duration-300 group-hover:bg-blue-50">
                  <ul className="space-y-3">
                    {location.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <Link href="/contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gymnasium & Community Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="block">KP BALAJI GROUP</span>
                <span className="block text-blue-400">GYMNASIUM</span>
              </h2>
              <p className="mt-4 text-xl text-blue-200">WHERE STRENGTH MEETS COMMUNITY</p>
              <p className="mt-6 text-gray-300">
                Don't miss healthy lifestyle. It pays off. Our premium residential townships come with state-of-the-art fitness facilities to keep you and your family active and healthy.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-400">Basketball Court</h3>
                  <p className="mt-2 text-sm text-gray-300">Professional standard courts for sports enthusiasts</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-400">Club House</h3>
                  <p className="mt-2 text-sm text-gray-300">Community spaces for social gatherings</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="/images/jym2.jpg"
                alt="KP Balaji Gymnasium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Why Choose Our</span>
              <span className="block text-blue-600">Plot Services</span>
            </h2>
            <div className="mt-6 space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">JDA & Society Approved</h3>
                  <p className="mt-2 text-base text-gray-600">
                    All our plots come with proper approvals and clear documentation for complete peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Competitive Pricing</h3>
                  <p className="mt-2 text-base text-gray-600">
                    We offer plots across all price ranges (₹15,000 - ₹70,000 per sq.yd) to suit every budget.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Local Expertise</h3>
                  <p className="mt-2 text-base text-gray-600">
                    In-depth knowledge of Ajmer Road, Nevta, Sirsi, Bhayrota, and all developing areas in Jaipur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              className="w-full rounded-lg shadow-xl"
              src="/images/plotttt.jpg"
              alt="Land expertise"
            />
          </div>
        </div>
      </div>

      {/* SEZ Investment Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="/images/wedone.jpg"
                alt="SEZ Investment"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                <span className="block">Should you buy a plot at</span>
                <span className="block text-blue-300">SEZ?</span>
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Mahindra Group and RIICO (a Govt. of Rajasthan undertaking), Mahindra World City, Jaipur is at par with the best business destinations in the world.
              </p>
              <p className="mt-4 text-blue-100">
                Spread across 3,000-acres with a 2,000-acre multi-product SEZ, the Mahindra City serves as a conduit between entire North India and the ports of the Western coast.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h3 className="font-bold">Working Companies</h3>
                  <p className="mt-2 text-blue-200">More Than 130 Companies</p>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h3 className="font-bold">Forecasting Companies</h3>
                  <p className="mt-2 text-blue-200">More Than 250 Companies</p>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h3 className="font-bold">Working Employees</h3>
                  <p className="mt-2 text-blue-200">More Than 1,00,000 People</p>
                </div>
                <div className="bg-blue-700 p-4 rounded-lg">
                  <h3 className="font-bold">Forecasting Employees</h3>
                  <p className="mt-2 text-blue-200">More Than 2,00,000 People</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-blue-300">*Approx</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to invest in land?</span>
            <span className="block text-blue-200">Get expert advice on the best plots in Jaipur</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Contact Our Land Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 