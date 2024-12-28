"use client";
import React from 'react';
import { Mail, MessageSquare, Clock } from 'lucide-react';

const ContactHero = () => {
  return (
    <div className="max-w-xl space-y-8">
      <h1 className="text-5xl font-bold leading-tight text-gray-800">
        Let's Create Something
        <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Amazing Together
        </span>
      </h1>
      
      <p className="text-lg text-gray-600">
        I'm always excited to connect with new people and discuss potential collaborations. 
        Whether you have a project in mind or just want to say hello, I'd love to hear from you.
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Email Response Time</h3>
            <p className="text-gray-600">Usually within 24 hours</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
            <MessageSquare className="h-6 w-6 text-pink-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Clear Communication</h3>
            <p className="text-gray-600">Direct and professional dialogue</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
            <Clock className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Timezone</h3>
            <p className="text-gray-600">Available during business hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;