'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Premium */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ULTIMATE WebGen Demo
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:flex items-center space-x-8"
            >
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Services</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Contact</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Portfolio</Link>
              <Link 
                href="/contact"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section Ultra Premium */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                ULTIMATE WebGen Demo
                <span className="block text-primary font-medium mt-2">Intelligence Artificielle Révolutionnaire</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed font-light"
            >
              Plateforme IA de génération automatique de sites web avec monitoring temps réel et déploiement instantané
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Découvrir nos solutions
              </Link>
              
              <Link 
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium text-lg hover:border-primary hover:text-primary transition-all duration-300"
              >
                Nos services
              </Link>
              
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Services Section Premium */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Nos <span className="text-primary font-medium">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions sur-mesure pour répondre à vos besoins les plus exigeants
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Les services seront générés dynamiquement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Des solutions d'exception conçues pour dépasser vos attentes
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      

      {/* Footer Premium */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-4">ULTIMATE WebGen Demo</h2>
            <p className="text-gray-400 mb-8">Intelligence Artificielle Révolutionnaire</p>
            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-500">&copy; 2025 ULTIMATE WebGen Demo. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}