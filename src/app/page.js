"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import PropertyCard from '@/components/propertyCard';


import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';


const blobAnimation = {
  animate: {
    scale: [1, 1.15, 1],
    y: [0, -20, 0],
    x: [0, 20, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

export default function Home() {
  const videoId = "mgAghdO59Ds";
  const featuredProperties = [
    {
      id: 1,
      title: "Premium Plot Ajmer Road Bhakrota",
      // price: "$450,000",
      size: "1.5 Acres",
      zoning: "Residential",
      location: "Prime location ",
      image: "/images/plotttt.jpg",
      features: ["Scenic views", "Ready to build", "Utilities available"]
    },
    {
      id: 2,
      title: "Plot at Sirsi Road, Jaipur",
      // price: "$1,200,000",
      size: "3.2 Acres",
      zoning: "Commercial",
      location: "Highway frontage with excellent visibility",
      image: "/images/landplotss.jpg",
      features: ["High traffic area", "Zoned for retail", "Excellent exposure"]
    },
    {
      id: 3,
      title: "Plot in Khatipura",
      // price: "$850,000",
      size: "2.8 Acres",
      zoning: "Mixed-Use",
      location: "near market , ",
      image: "/images/plottt.jpg",
      features: ["Waterfront property", "Flexible zoning", "Development potential"]
    },
  ];

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Preload important images
    const preloadImages = [
      '/images/land-hero.jpg',
      '/images/bigiee.jpg',
      '/images/plotttt.jpg',
      '/images/landplotss.jpg',
      '/images/plottt.jpg'
    ];

    preloadImages.forEach(img => {
      new Image().src = img;
    });
  }, []);

  return (
    <div className="bg-white">
      <Head>
        <title>Prime Land Holdings | Premium Land Brokerage Services</title>
        <meta name="description" content="Premier land brokerage services helping you find the perfect parcel for your vision. Specializing in residential, commercial, and investment properties." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Enhanced Hero Section */}
      {/* Investment Opportunities Section */}
      <div className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern-light.svg')]"></div>
        </div>

        {/* Animated floating circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              opacity: 0.1
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Investment Opportunities
            </h2>
            <motion.div
              className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto">
              Premier land brokerage services connecting investors with high-potential properties across prime locations.
            </p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-300"
              >
                View Land Listings
                <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
        {/* Decorative cloud elements */}
        <div className="absolute top-10 left-10 w-24 h-16 bg-white rounded-full opacity-30"></div>
        <div className="absolute top-20 right-20 w-32 h-20 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-24 bg-white rounded-full opacity-30"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
              Our Property Showcase
            </h2>
            <p className="mt-2 text-blue-800 md:text-lg">
              Watch our latest property listings in this short preview
            </p>
          </div>

          {/* YouTube Shorts Player - Enhanced */}
          <div className="flex justify-center">
            <div className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] transform transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="relative pb-[177.78%] h-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white bg-white">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&loop=1&mute=1`}
                  title="Property Shorts Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Property Description */}
          <div className="mt-8 text-center max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white">
            <h3 className="text-xl font-semibold text-blue-900">
              Premium Plots Available Now
            </h3>
            <p className="mt-3 text-blue-800">
              This short video shows our featured properties. Contact us for site visits and investment opportunities.
            </p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Property Details
            </button>
          </div>
        </div>
      </section>


      <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-4 overflow-hidden">

        {/* Blobs Background */}
        <motion.div
          className="absolute w-80 h-80 bg-blue-300 rounded-full top-[-4rem] left-[-4rem] opacity-30 blur-3xl"
          {...blobAnimation}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-200 rounded-full bottom-[-5rem] right-[-6rem] opacity-20 blur-2xl"
          {...blobAnimation}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-400 rounded-full top-1/2 left-[40%] opacity-10 blur-3xl"
          {...blobAnimation}
        />

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto p-8 shadow-2xl border border-blue-300 rounded-3xl bg-white/80 backdrop-blur-md z-10"
        >
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-2">Jaipur Development Authority</h2>
            <p className="text-blue-600 font-semibold">Near Jagatpura, Jaipur’s Prime Location</p>
            <p className="text-lg font-medium text-gray-700 mt-2">
              &quot;Jaipur&apos;s New Economic Hub&quot; located on Ring Road
            </p>
            <h3 className="text-2xl font-bold text-blue-700 mt-4">Commercial Plots</h3>
            <p className="text-md font-medium text-gray-600 mt-2">
              A golden opportunity to buy plots at a low budget in &quot;today&apos;s time&quot;
            </p>
          </div>

          {/* Info Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-800">
            {[
              'Just 10 minutes from Bombay Hospital, Jagatpura',
              'Only 10 minutes away from JECRC College, Poornima College',
              'Only 1 minute from IIS World University',
            ].map((text, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-lg border border-blue-100"
              >
                <p className="text-center text-blue-700 font-medium">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight Text */}
          <div className="mt-8 text-center">
            <p className="text-md text-green-700 font-semibold">
              All commercial plots available on 200 ft wide road
            </p>
            <p className="text-md text-purple-700">
              Free registration and loan facility available
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-10 text-center">
            <p className="text-blue-700 font-semibold text-lg mb-2">For more information, contact us</p>
            <div className="flex justify-center items-center gap-2">
              <PhoneCall className="text-blue-600" />
              <span className="text-blue-600 font-medium">+91 8560980604</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* New Section for Second Image (Layout Plan) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12 bg-gray-50">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Layout Plan of Rukmani Nagar Ext. (E-Block)</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-700">Location: V.S.E. - Habsuliya, Faghi Road, Jaipur</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-700">Scheme: M.I.D.A. Scheme Rohani Nagar Phase-1</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-gray-700">Proximity: Near Sanganer area</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Detailed Layout Information
                </motion.a>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img
                src="/images/saganer.jpg"
                alt="Rukmani Nagar Ext. Layout Plan"
                className="max-h-96 w-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Properties - Enhanced Section */}
      <div id="featured" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Exclusive Listings
            </span>
            <motion.h2
              className="mt-2 text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Land Parcels
            </motion.h2>
            <motion.div
              className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <PropertyCard
                property={property}
                className="shadow-xl hover:shadow-2xl transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <motion.a
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            href="/properties"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg"
          >
            Explore All Land Listings
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a> */}
        </motion.div>
      </div>

      {/* Value Proposition Section - Enhanced */}
      <div className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Investment Advantages
            </span>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Why Land is the Ultimate Asset
            </h2>
            <motion.div
              className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
            ref={featuresRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Appreciation",
                description: "Land values historically increase over time with limited supply"
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Low Maintenance",
                description: "No structures to maintain while your investment grows"
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Flexible Use",
                description: "Hold, develop, or lease - multiple exit strategies"
              },
              {
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Tax Benefits",
                description: "Potential deductions and favorable capital gains treatment"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div className="mt-6 text-xl font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-300">
                    {feature.title}
                  </div>
                  <p className="mt-3 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section - Enhanced */}
      <div className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Expertise
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Land Acquisition Services
              </h2>
              <div className="mt-6 border-t-2 border-blue-100 pt-8">
                <div className="space-y-10">
                  {[
                    {
                      icon: (
                        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      ),
                      title: "Land Sourcing",
                      description: "We identify off-market opportunities and exclusive listings before they hit public markets."
                    },
                    {
                      icon: (
                        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ),
                      title: "Zoning Analysis",
                      description: "Comprehensive evaluation of development potential and permitted uses."
                    },
                    {
                      icon: (
                        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: "Due Diligence",
                      description: "Title research, environmental assessments, and legal review for risk mitigation."
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start group"
                    >
                      <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl leading-6 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  className="w-full h-auto object-cover"
                  src="/images/bigiee.jpg"
                  alt="Land development services"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-2xl p-8 text-white transform hover:-translate-y-2 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold">Landowner Benefits</h3>
                <p className="mt-4 text-blue-100">
                  We help landowners maximize value through strategic positioning and targeted marketing.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Competitive market analysis",
                    "Customized marketing plans",
                    "Developer network access"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-3 text-blue-100 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials - Enhanced */}
      <div className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Client Success
            </span>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <motion.div
              className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-10 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                name: "Developers Group",
                quote: "They secured us a prime 25-acre parcel at 15% below market. Their land sourcing network is unmatched.",
                role: "Commercial Developer"
              },
              {
                name: "Private Investor",
                quote: "Sold my rural land holding for 40% above appraisal through their targeted marketing approach.",
                role: "Individual Investor"
              },
              {
                name: "Family Trust",
                quote: "Their due diligence uncovered zoning changes that increased our land value by $1.2M overnight.",
                role: "Trust Administrator"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-blue-600">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="mt-6 text-gray-600 italic relative">
                  <div className="absolute top-0 left-0 text-6xl text-blue-100 font-serif leading-none -mt-2">&quot;</div>
                  <p className="relative z-10 pl-6">{testimonial.quote}</p>
                  <div className="absolute bottom-0 right-0 text-6xl text-blue-100 font-serif leading-none -mb-4">&quot;</div>
                </blockquote>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/dots-pattern-light.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/30 to-blue-900/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Ready to explore land opportunities?
              </h2>
              <motion.p
                className="mt-4 text-xl text-blue-200 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Schedule your free land assessment today.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"  // Change this to your desired path
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white/10 transition-all duration-300"
                >
                  Contact Our Land Team
                  <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/property"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-lg font-semibold rounded-lg text-blue-800 bg-yellow-400 hover:bg-yellow-300 transition-all duration-300"
                >
                  View Available Land
                  <svg className="ml-3 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}