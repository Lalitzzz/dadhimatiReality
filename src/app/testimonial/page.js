"use client"
import TestimonialCard from '@/components/testimonialCard'
import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Home Buyer",
      content: "The team at LuxuryHomes made my home buying experience seamless. They understood exactly what I was looking for and found me the perfect property within my budget. I couldn't be happier with my new home!",
      rating: 5,
      image: "/images/testimonial1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Investor",
      content: "As a real estate investor, I need reliable partners who understand the market. LuxuryHomes has consistently provided me with excellent investment opportunities and sound advice. Their market analysis is spot on.",
      rating: 5,
      image: "/images/testimonial2.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "First-time Seller",
      content: "Selling my first home was stressful, but my agent at LuxuryHomes guided me through every step. They marketed my property effectively and got me a price that exceeded my expectations. Highly recommend!",
      rating: 4,
      image: "/images/testimonial3.jpg"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Property Owner",
      content: "I've used LuxuryHomes for both buying and property management services. Their attention to detail and customer service is exceptional. My rental properties have never been better managed.",
      rating: 5,
      image: "/images/testimonial4.jpg"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Relocating Buyer",
      content: "Moving to a new city was daunting, but my agent took the time to understand my family's needs and showed us properties in neighborhoods we wouldn't have found on our own. We love our new community!",
      rating: 5,
      image: "/images/testimonial5.jpg"
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Commercial Client",
      content: "LuxuryHomes handled our commercial property acquisition with professionalism and expertise. They negotiated terms that saved our company significant money. Will definitely work with them again.",
      rating: 4,
      image: "/images/testimonial6.jpg"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Client Testimonials
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Hear what our clients say about their experiences with us
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Ready to share your experience?</h3>
        <p className="mt-4 text-gray-600">
          We'd love to hear about your journey with LuxuryHomes.
        </p>
        <div className="mt-6">
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            Leave a Review
          </Link>
        </div>
      </div>
    </div>
  )
}