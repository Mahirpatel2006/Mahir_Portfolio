import React from 'react';

import ContactForm from './Contactform';

import { Mail, MessageSquare, Clock } from 'lucide-react';
import Navbar from './Navbar';

export default function Sphere() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Fullscreen iframe */}
      <iframe
        src="/sphere.html"
        title="3D Sphere"
        className="absolute inset-0 w-full h-full border-none filter blur-sm"
      />
      <Navbar/>
      
      {/* Left content - Added responsive positioning */}
      <div className='absolute pointer-events-none left-4 md:left-16 top-8 md:top-16 flex px-4 md:px-0'>
        <div className="max-w-xl space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Let's Create Something
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-50">
            I'm always excited to connect with new people and discuss potential collaborations.
            Whether you have a project in mind or just want to say hello, I'd love to hear from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-purple-100">
                <Mail className="h-5 md:h-6 w-5 md:w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400">Email Response Time</h3>
                <p className="text-white">Usually within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-pink-100">
                <MessageSquare className="h-5 md:h-6 w-5 md:w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400">Clear Communication</h3>
                <p className="text-white">Direct and professional dialogue</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-full bg-yellow-100">
                <Clock className="h-5 md:h-6 w-5 md:w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-400">Timezone</h3>
                <p className="text-white">Available during business hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* Color change button */}  
      <div className="absolute bottom-3 left-1/2 md:left-[45%] -translate-x-1/2 md:translate-x-0 pointer-events-none">
        <button type="button" className="h-11 w-32 py-1 px-1 me-2 mb-2 relative top-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Change Color
        </button>
      </div>

      {/* Contact Form - Added responsive positioning */}
      <div className="absolute left-4 md:left-3/4 top-[450px] md:top-20 w-[calc(100%-2rem)] md:w-auto">
        <ContactForm/>
      </div>

    </div>
  );
}