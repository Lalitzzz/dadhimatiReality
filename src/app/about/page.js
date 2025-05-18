import Head from 'next/head'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Your Plot Land Solutions</title>
        <meta name="description" content="Learn about our mission to provide affordable land plots for your dream home since 2020" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-opacity-75">
            <img
              className="w-full h-full object-cover"
              src="/images/lala.jpg"
              alt="About our land services"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Land, Your Future
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering transparent land deals since 2020
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Our Journey</span>
                <span className="block text-blue-600">From Vision to Reality</span>
              </h2>
              <div className="mt-6 border-t-2 border-blue-100 pt-6 space-y-6 text-gray-600">
                <p>
                  Plot Services was founded in 2020 with a simple yet powerful vision - to make land ownership accessible 
                  to everyone. Our founders recognized the growing need for affordable, well-located plots where families 
                  could build their dream homes without compromising on quality or legal security.
                </p>
                <p>
                  We started with just a handful of JDA-approved plots in prime locations, and today we're proud to be 
                  one of the most trusted names in residential and commercial land development across the region.
                </p>
                <p>
                  What sets us apart is our commitment to transparency. Every plot we offer comes with complete documentation, 
                  clear titles, and all necessary approvals from development authorities.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="/images/plottt.jpg"
                alt="Our team working on land projects"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-last lg:order-first">
                <img
                  className="w-full rounded-lg shadow-xl"
                  src="/images/bigiee.jpg"
                  alt="Land development process"
                />
              </div>
              <div className="mt-12 lg:mt-0">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Our Core</span>
                  <span className="block text-blue-600">Mission & Values</span>
                </h2>
                <div className="mt-6 space-y-6 text-gray-600">
                  <p>
                    We believe land is more than just a commodity - it's the foundation for dreams, businesses, 
                    and communities. Our mission is to bridge the gap between landowners and aspiring homeowners 
                    through fair deals and ethical practices.
                  </p>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-blue-600">Why Choose Our Plots?</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full">
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-3">All plots approved by JDA and local development authorities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full">
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-3">Legal clearance and transparent documentation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full">
                          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-3">Strategic locations with future development potential</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Land</span>
              <span className="block text-blue-600">Acquisition Process</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              How we ensure you get the best plots at the best prices
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600">01</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Land Identification</h3>
              <p className="mt-2 text-gray-600">
                Our experts scout locations with high growth potential, verifying all legal and zoning aspects before acquisition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600">02</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Due Diligence</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive checks including title verification, soil testing, and approval status from JDA and other authorities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <div className="text-4xl font-bold text-blue-600">03</div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Customer Allocation</h3>
              <p className="mt-2 text-gray-600">
                Fair distribution through transparent booking process, with complete documentation and payment plans.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Meet Our</span>
                <span className="block text-blue-600">Land Experts</span>
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
                The team that makes your land ownership dreams possible
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="/images/bhind.jpg"
                  alt="Land acquisition specialist"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Mahendra Sharma</h3>
                <p className="text-blue-600">Land Acquisition Head</p>
                <p className="mt-2 text-gray-600">
                  5+ years experience in identifying and securing premium land parcels across the jaipur region.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="/images/BHAGWATI.jpg"
                  alt="Legal expert"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Bhagwati</h3>
                <p className="text-blue-600">Legal & Compliance</p>
                <p className="mt-2 text-gray-600">
                  Ensures all our plots have clear titles and meet all JDA and government regulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src="/images/cutomerthree.jpg"
                  alt="Customer relations"
                />
                <h3 className="mt-4 text-xl font-bold text-gray-900">Mukesh  Vaishnav</h3>
                <p className="text-blue-600">Customer Relations</p>
                <p className="mt-2 text-gray-600">
                  Guides you through every step of your land purchase journey with transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to own your piece of land?</span>
              <span className="block text-blue-200">Get in touch with our land experts today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}