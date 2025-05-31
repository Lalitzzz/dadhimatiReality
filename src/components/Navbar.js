// 'use client'
// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { usePathname } from 'next/navigation'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navLinks = [
//     { href: '/', name: 'Home' },
//     { href: '/about', name: 'About' },
//     { href: '/services', name: 'Services' },
//     { href: '/property', name: 'Properties' },
//     { href: '/contact', name: 'Contact' },
//     {href:'/patarkar' , name:'Patarkar Colony'}
//   ]

//   const isActive = (href) => {
//     if (href === '/') return pathname === href
//     return pathname.startsWith(href)
//   }

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           <div className="flex items-center">
//             <Link 
//               href="/" 
//               className="flex-shrink-0 flex items-center"
//               onClick={() => setIsOpen(false)}
//             >
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
//                 DadhimatiReality
//               </span>
//             </Link>
//             <div className="hidden sm:ml-10 sm:flex sm:space-x-6">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-300
//                     ${isActive(link.href) ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
//                 >
//                   {link.name}
//                   {isActive(link.href) && (
//                     <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-500 rounded-full origin-left animate-scale-x"></span>
//                   )}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {/* <Link
//               href="/contact"
//               className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
//             >
//               Get Started
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </Link> */}
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
//               aria-label="Toggle menu"
//             >
//               {!isOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
//         <div className="pt-2 pb-4 space-y-1 bg-white shadow-xl">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className={`block pl-3 pr-4 py-3 text-base font-medium border-l-4 transition-all duration-300
//                 ${isActive(link.href) 
//                   ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                   : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <div className="px-4 pt-2">
//             <Link
//               href="/contact"
//               onClick={() => setIsOpen(false)}
//               className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
//             >
//               Get Started
//               <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }


'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/services', name: 'Services' },
    { href: '/property', name: 'Properties' },
    { href: '/contact', name: 'Contact' },
    { href: '/patarkar', name: 'Patarkar Colony' }
  ]

  const isActive = (href) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-500 transition-all duration-300">
                DadhimatiReality
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-all duration-300
                    ${isActive(link.href) ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-blue-500 rounded-full origin-left animate-scale-x"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Updated with limited height */}
      <div className={`sm:hidden fixed right-0 z-50 w-64 bg-white shadow-xl transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
           style={{ top: '5rem', bottom: 'auto', borderRadius: '0 0 0 0.5rem' }}>
        <div className="overflow-y-auto">
          <div className="pt-2 pb-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-3 text-base font-medium border-l-4 transition-all duration-300
                  ${isActive(link.href) 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-1 pt-2 pb-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}