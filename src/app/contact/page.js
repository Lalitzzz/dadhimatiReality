"use client"
import Head from "next/head";
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    const whatsappMessage = `Hello! My name is ${name}. ${message} (Reply to: ${email})`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/918560980604?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              scale: [0, Math.random() * 0.5 + 0.5, 0],
              opacity: [0, 0.3, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-blue-200/30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50/70 to-white/70 pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Animated Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-extrabold text-blue-900 sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-sm">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 max-w-xl mx-auto text-xl text-blue-700/90"
            >
              We&#39;d love to hear from you. Drop us a message!
            </motion.p>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 w-20 h-1 bg-blue-400 mx-auto rounded-full"
            />
          </motion.div>
          
          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col lg:flex-row bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-100/50"
          >
            {/* Left Side - Contact Form */}
            <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-bold mb-8 text-blue-800">
                Send us a <span className="text-blue-600">message</span>
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                {[
                  { label: "Your Name", name: "name", type: "text", placeholder: "John Doe" },
                  { label: "Your Email", name: "email", type: "email", placeholder: "john@example.com" },
                  { label: "Your Message", name: "message", type: "textarea", placeholder: "How can we help you?" }
                ].map((field, index) => (
                  <motion.div 
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <label className="block mb-2 text-sm font-medium text-blue-700/90">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        required
                        className="w-full p-3 h-32 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent transition-all duration-200 placeholder-blue-400/60 backdrop-blur-sm"
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-transparent transition-all duration-200 placeholder-blue-400/60 backdrop-blur-sm"
                        placeholder={field.placeholder}
                      />
                    )}
                  </motion.div>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Send via WhatsApp
                </motion.button>
              </form>
            </div>
            
            {/* Right Side - Contact Info */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-800/95 to-blue-700/95 text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden backdrop-blur-sm">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              
              <h2 className="text-3xl font-bold mb-8 relative z-10">
                Contact <span className="text-blue-300">Information</span>
              </h2>
              
              <div className="space-y-8 relative z-10">
                {[
                  { icon: <FaPhone />, title: "Phone", content: "+91 98765 43210" },
                  { icon: <FaEnvelope />, title: "Email", content: "Mahendradadhich6662@gmail.com" },
                  { 
                    icon: <FaMapMarkerAlt />, 
                    title: "Address", 
                    content: "kamla nehru nagar,near ajmer road, jaipur " 
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-blue-600/80 p-3 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-blue-50">{item.title}</h3>
                      <p className="mt-1 text-blue-200/90">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* WhatsApp Button */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 relative z-10"
              >
                <a 
                  href="https://wa.me/918560980604" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}