'use client'; // Add this at the top

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaHome, FaBuilding, FaInfoCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { RiHomeHeartLine, RiHomeGearLine, RiHomeSmileLine, RiCustomerService2Line } from "react-icons/ri";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Rest of your footer content remains the same */}
          {/* Logo and Description */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              whileHover={{ scale: 1.02 }}
            >
              DreamHomes
            </motion.h2>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for finding the perfect property. Buy, sell, or rent with confidence through our premium services.
            </p>
            <div className="mt-6 flex space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer"
                  whileHover={{ 
                    y: -5,
                    backgroundColor: "#3B82F6"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaHome className="mr-2 text-blue-400" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", icon: <FaHome className="mr-2" />, link: "/" },
                { name: "Properties", icon: <FaBuilding className="mr-2" />, link: "/property" },
                { name: "About Us", icon: <FaInfoCircle className="mr-2" />, link: "/about" },
                { name: "Contact", icon: <FaPhone className="mr-2" />, link: "/contact" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white flex items-center transition-colors duration-300"
                  >
                    {item.icon} {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <RiHomeGearLine className="mr-2 text-purple-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Buy Property", icon: <RiHomeHeartLine className="mr-2" /> },
                { name: "Sell Property", icon: <RiHomeGearLine className="mr-2" /> },
                { name: "Rent Homes", icon: <RiHomeSmileLine className="mr-2" /> },
                { name: "Consulting", icon: <RiCustomerService2Line className="mr-2" /> }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white flex items-center transition-colors duration-300"
                  >
                    {item.icon} {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <FaPhone className="mr-2 text-blue-400" />
              Contact
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="mt-1 mr-3 text-red-400 flex-shrink-0" />
                <p className="text-gray-300">Jaipur, Rajasthan, India</p>
              </motion.div>
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="mt-1 mr-3 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">+91-8560980604
                </p>
              </motion.div>
              <motion.div 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="mt-1 mr-3 text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">mahendradadhich6662@gmail.com</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-6 border-t border-gray-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} DreamHomes. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white text-xs"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}