import { FaMapMarkerAlt, FaRulerCombined, FaMoneyBillWave, FaFileSignature, FaTree, FaRoad, FaPhone, FaEnvelope } from 'react-icons/fa'

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
    <div className="bg-white">
      {/* Navbar - Added this section */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-800">Reality</span>
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

      {/* Hero Section - Adjusted padding to account for navbar */}
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
                ₹35,000/sq.yd
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Property Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <img
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  src={property.images[0]}
                  alt="Main plot view"
                />
              </div>
              {property.images.slice(1).map((image, index) => (
                <div key={index}>
                  <img
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                    src={image}
                    alt={`Plot view ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            {/* Property Details */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Plot Details</h2>
              <p className="mt-4 text-gray-600">{property.description}</p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaRulerCombined className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Plot Size</h3>
                    <p className="mt-1 text-gray-600">{property.size}</p>
                    <p className="mt-1 text-blue-600 font-medium">{property.pricePerSqYd}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="mt-1 text-gray-600">{property.location}</p>
                  </div>
                </div>

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
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Plot Features</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
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
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4">Nearby Amenities</h2>
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
          </div>

          {/* Sidebar */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              {/* Price Box */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">Plot Price</h3>
                <p className="mt-1 text-3xl font-semibold text-white">{property.price}</p>
                <p className="mt-1 text-blue-100">{property.pricePerSqYd}</p>
              </div>

              {/* Contact Form */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Enquire About This Plot</h3>
                <form className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="I'm interested in this plot. Please contact me with more details."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>

                {/* Quick Contact */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Quick Contact</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <FaPhone className="flex-shrink-0 h-5 w-5 text-blue-600" />
                      <span className="ml-3 text-gray-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="flex-shrink-0 h-5 w-5 text-blue-600" />
                      <span className="ml-3 text-gray-600">info@landservices.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map */}
            <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-4 bg-gradient-to-r from-blue-700 to-blue-600">
                <h3 className="text-lg font-bold text-white">Plot Location</h3>
              </div>
              <div className="p-4 h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Map will be displayed here</p>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  <FaMapMarkerAlt className="mr-2" />
                  View on Map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Reality</h3>
              <p className="text-blue-100">Premium property solutions in Jaipur since 2010.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">Home</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Services</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Properties</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-blue-100">
                KP Balaji, Near Sirsi Road<br />
                Jaipur, Rajasthan<br />
                Phone: +91 98765 43210<br />
                Email: info@reality.com
              </address>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md w-full text-gray-900 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center text-blue-100">
            <p>&copy; {new Date().getFullYear()} Reality. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}