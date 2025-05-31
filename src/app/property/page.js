import Image from 'next/image'
import { FaMapMarkerAlt, FaRulerCombined, FaMoneyBillWave, FaFileSignature, FaTree, FaRoad, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function PropertyDetail() {
  // Sample property data - replace with your actual data
  const property = {
    title: "Premium Residential Plot in KP Balaji",
    price: "₹45,00,000",
    pricePerSqYd: "₹35,000/sq.yd",
    size: "120 sq.yd (100.34 sq.m)",
    location: "KP Balaji, Near Sirsi Road, Jaipur",
    description: "This premium JDA-approved residential plot is located in the fast-developing KP Balaji area. The plot has clear titles, all necessary approvals, and excellent connectivity to major roads and amenities. Ideal for building your dream home with peaceful surroundings and future appreciation potential.",
    features: [
      "JDA Approved Layout",
      "Clear Title & Documentation",
      "30 Feet Wide Road Access",
      "Electricity & Water Available",
      "Peaceful Residential Area",
      "Near Future Metro Corridor"
    ],
    amenities: [
      { name: "Schools", distance: "1.2 km" },
      { name: "Hospitals", distance: "3.5 km" },
      { name: "Shopping Mall", distance: "4 km" },
      { name: "Metro Station", distance: "2 km (Proposed)" },
      { name: "Highway", distance: "5 km" },
      { name: "Park", distance: "0.5 km" }
    ],
    images: [
      "/images/finallygotit.jpg",
      "/images/wedone.jpg",
      "/images/wedtwo.jpg",
      "/images/wedthreee.jpg"
    ]
  }

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-800">DadhimatiReality</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Services</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Properties</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {property.title}
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              <FaMapMarkerAlt className="inline mr-2" />
              {property.location}
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                {property.pricePerSqYd}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Property Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Takes full width */}
          <div className="w-full">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 relative h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={property.images[0]}
                  alt="Main plot view"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-48 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={image}
                    alt={`Plot view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Property Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaRulerCombined className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Plot Size</h3>
                  <p className="text-lg font-semibold text-gray-900">{property.size}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMoneyBillWave className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Price</h3>
                  <p className="text-lg font-semibold text-gray-900">{property.price}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="text-lg font-semibold text-gray-900">KP Balaji</p>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Plot Details</h2>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaFileSignature className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Legal Status</h3>
                    <p className="mt-1 text-gray-600">Clear Title, JDA Approved, All Documents Available</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaRoad className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Access</h3>
                    <p className="mt-1 text-gray-600">30 Feet Wide Paved Road, Easy Approach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Plot Features</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Amenities */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Nearby Amenities</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{amenity.name}</h3>
                      <p className="mt-1 text-gray-600">{amenity.distance} away</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white">Interested in this property?</h2>
              <p className="mt-2 text-blue-100">Contact us today for a site visit or more information</p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+918560980604" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                  <FaPhone className="mr-2" /> Call Now
                </a>
                <a href="https://wa.me/918560980604" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}