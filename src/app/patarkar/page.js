"use client"

import { useState } from 'react';
import Head from 'next/head';

export default function PropertyListing() {
  const [activeImage, setActiveImage] = useState(0);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // All 15 property images with descriptions
  const propertyImages = [
    // Exterior (3 images)
    {
      id: 1,
      url: '/images/nava6.jpg',
      alt: 'Front facade of Patarkar Colony villa with beautiful landscaping'
    },
    {
      id: 2,
      url: '/images/nava7.jpg',
      alt: 'Side view showing the villa architecture and design'
    },
    {
      id: 3,
      url: '/images/nava8.jpg',
      alt: 'Backyard with seating area and well-maintained garden'
    },
    
    // Living Areas (3 images)
    {
      id: 4,
      url: '/images/nava9.jpg',
      alt: 'Spacious living room with modern furniture and large windows'
    },
    {
      id: 5,
      url: '/images/nava10.jpg',
      alt: 'Living room showing the entertainment unit and seating area'
    },
    {
      id: 6,
      url: '/images/nava11.jpg',
      alt: 'Elegant dining area with 8-seater table and chandelier'
    },
    
    // Kitchen (2 images)
    {
      id: 7,
      url: '/images/nava12.jpg',
      alt: 'Modern modular kitchen with island and premium appliances'
    },
    {
      id: 8,
      url: '/images/nava13.jpg',
      alt: 'Kitchen storage spaces and cooking area'
    },
    
    // Bedrooms (4 images)
    {
      id: 9,
      url: '/images/nava14.jpg',
      alt: 'Master bedroom with king size bed and walk-in closet'
    },
    {
      id: 10,
      url: '/images/nava15.jpg',
      alt: 'Luxurious master bathroom with jacuzzi and marble finish'
    },
    {
      id: 11,
      url: '/images/nava16.jpg',
      alt: 'Second bedroom with balcony access and built-in wardrobe'
    },
    {
      id: 12,
      url: '/images/nava17.jpg',
      alt: 'Third bedroom with study table and ample natural light'
    },
    
    // Outdoor (3 images)
    {
      id: 13,
      url: '/images/nava18.jpg',
      alt: 'Well-maintained garden with flowering plants'
    },
    {
      id: 14,
      url: '/images/nava19.jpg',
      alt: 'Terrace with panoramic city views and seating'
    },
    {
      id: 15,
      url: '/images/nava20.jpg',
      alt: 'Covered parking space for two cars'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you shortly about this property.`);
    setShowEnquiryForm(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>Luxury Villa in Patarkar Colony | 80 Lakh - 1 Crore</title>
        <meta name="description" content="Beautiful 4 BHK villa for sale in prime Patarkar Colony location. Priced between 80 lakh to 1 crore. Contact for viewing." />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
        <img 
          src={propertyImages[0].url} 
          alt={propertyImages[0].alt}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Luxury Villa in Patarkar Colony
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            Spacious 2 BHK villa with modern amenities, located in the heart of the city. Priced between ₹80 Lakh - ₹1 Crore.
          </p>
          <button 
            onClick={() => setShowEnquiryForm(true)}
            className="mt-8 bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-xl border-4 border-white">
          <img 
            src={propertyImages[activeImage].url} 
            alt={propertyImages[activeImage].alt}
            className="w-full h-96 object-cover"
          />
          <div className="bg-blue-700 p-4 text-center">
            <p className="text-white font-medium">{propertyImages[activeImage].alt}</p>
          </div>
        </div>

        {/* Image Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {propertyImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => setActiveImage(index)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-200 ${activeImage === index ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'}`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-32 object-cover"
              />
              <div className="bg-blue-50 p-1">
                <p className="text-xs text-blue-800 text-center truncate">Image {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Property Details */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-2">Property Details</h2>
              <p className="text-gray-700 mb-6">
                This exquisite 2 BHK villa in Patarkar Colony offers a perfect blend of luxury and comfort. Spread across 3000 sq.ft., the property features premium finishes and thoughtful design throughout.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">2 Bedrooms</span> with attached bathrooms</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900"> Balconies</span> with scenic views</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">Modern kitchen</span> with premium appliances</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">Spacious</span> living & dining area</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900"> garden</span> with seating</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">Covered parking</span> for cars and motor-bikes</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">24/7 Security</span> & CCTV</span>
                  </li>
                  <li className="flex items-start bg-blue-50 p-3 rounded-lg">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium text-blue-900">Premium finishes</span> throughout</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-blue-800 mb-3 border-b border-blue-200 pb-2">Floor Plan</h3>
              <p className="text-gray-700 mb-4">
                The villa is thoughtfully designed with bedrooms on the upper floor and living areas on the ground floor, ensuring privacy and functionality.
              </p>

              <h3 className="text-2xl font-semibold text-blue-800 mb-3 border-b border-blue-200 pb-2">About Patarkar Colony</h3>
              <p className="text-gray-700 mb-6">
                Patarkar Colony is one of the most prestigious residential areas in the city, known for its peaceful environment and excellent connectivity. The locality offers:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Near mansarovar metro station, Ajmer Road, Digi Road</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10-minute drive to major hospitals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Walking distance to shopping complexes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Excellent public transport connectivity</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 water and electricity supply</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Gated community with security</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Price & Highlights */}
          <div className="bg-white p-6 rounded-xl shadow-lg h-fit sticky top-6 border border-blue-100">
            <div className="bg-blue-700 text-white p-4 rounded-lg mb-6 text-center">
              <h3 className="text-2xl font-bold mb-1">₹80 Lakh - ₹1 Crore</h3>
              <p className="text-blue-100">Negotiable</p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Property Type</h4>
                <p className="text-gray-700">Independent Villa</p>
              </div>
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Built-up Area</h4>
                <p className="text-gray-700">3000 sq.ft. (280 sq.m.)</p>
              </div>
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Bedrooms</h4>
                <p className="text-gray-700">2 (All with attached bathrooms)</p>
              </div>
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Bathrooms</h4>
                <p className="text-gray-700"> 1 guest toilet</p>
              </div>
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Year Built</h4>
                <p className="text-gray-700">2025 (Excellent condition)</p>
              </div>
              <div className="border-b border-blue-100 pb-2">
                <h4 className="font-semibold text-blue-900">Floors</h4>
                <p className="text-gray-700">2 (Ground + 1)</p>
              </div>
            </div>
            <button 
              onClick={() => setShowEnquiryForm(true)}
              className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
            >
              Schedule a Visit
            </button>
            <div className="mt-4 text-center text-sm text-blue-700 bg-blue-50 p-2 rounded-lg">
              Call for immediate response: <span className="font-semibold">+91 8560980604</span>
            </div>
          </div>
        </div>

        {/* Virtual Tour Section */}
        <div className="mt-16 bg-white p-6 rounded-xl shadow-md border border-blue-100">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b border-blue-200 pb-2">Virtual Tour</h2>
          <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-lg overflow-hidden border border-blue-200">
            <div className="w-full h-96 flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="text-center">
                <svg className="h-12 w-12 text-blue-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-blue-700 font-medium">Virtual Tour Coming Soon</p>
                <p className="text-blue-500 text-sm mt-1">360° view of the property</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            Take a 360° virtual tour of this beautiful villa to explore every corner from the comfort of your home.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center border-b border-blue-200 pb-4">What Residents Say About Patarkar Colony</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">AS</div>
                <div>
                  <h4 className="font-semibold text-blue-900">Amit Sharma</h4>
                  <p className="text-blue-500 text-sm">Resident since 2019</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Patarkar Colony offers the perfect blend of tranquility and convenience. The community is wonderful and the location can't be beat - just 10 minutes from the business district but feels like a retreat."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">PK</div>
                <div>
                  <h4 className="font-semibold text-blue-900">Priya Khanna</h4>
                  <p className="text-blue-500 text-sm">Resident since 2017</p>
                </div>
              </div>
              <p className="text-gray-700">
                "We've lived here for 5 years and couldn't be happier. The security is excellent, maintenance is prompt, and our children love the park nearby. Property values have appreciated nearly 40% since we bought."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">RS</div>
                <div>
                  <h4 className="font-semibold text-blue-900">Rahul Singh</h4>
                  <p className="text-blue-500 text-sm">Resident since 2020</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As an investor, I've seen properties in Patarkar Colony appreciate significantly. The infrastructure development in the area makes it one of the best long-term investment opportunities in the city."
              </p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative border-2 border-blue-200 shadow-2xl">
            <button 
              onClick={() => setShowEnquiryForm(false)}
              className="absolute top-4 right-4 text-blue-500 hover:text-blue-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-blue-700 text-white p-4 rounded-t-lg -m-6 mb-6">
              <h3 className="text-2xl font-bold">Enquire About This Villa</h3>
              <p className="text-blue-100">We'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-900 mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    placeholder="Mobile number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-blue-50"
                    placeholder="Preferred time for visit, specific questions, etc."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-blue-600 text-center">
              By submitting, you agree to our representative contacting you about this property.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}