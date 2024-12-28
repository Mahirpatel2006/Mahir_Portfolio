"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_yg6pxz9',
        'template_jvk1zm8',
        formRef.current,
        'Q8zOVgvfIKgRR6VwE'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="px-4 mx-auto relative min-w-full w-full max-w-lg">
      <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute -bottom-8 right-4 h-72 w-72 animate-blob animation-delay-2000 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute -right-4 top-0 h-72 w-72 animate-blob animation-delay-4000 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
      
      <div className="relative">
        <div className="m-8 rounded-2xl bg-transparent p-8 shadow-xl backdrop-blur-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="group relative">
              <input
                type="text"
                name="user_name"
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-gray-900 placeholder-transparent focus:border-purple-600 focus:outline-none"
                placeholder="Name"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-600">
                Name
              </label>
            </div>

            <div className="group relative">
              <input
                type="email"
                name="user_email"
                required
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 py-2 text-white placeholder-transparent focus:border-purple-600 focus:outline-none"
                placeholder="Email"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-600">
                Email
              </label>
            </div>

            <div className="group relative">
              <textarea
                name="message"
                required
                rows={4}
                className="peer w-full resize-none border-b-2 border-gray-300 bg-transparent px-0 py-2 text-white placeholder-transparent focus:border-purple-600 focus:outline-none"
                placeholder="Message"
              ></textarea>
              <label className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-purple-600">
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-white shadow-lg transition-all hover:from-purple-700 hover:to-pink-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send 
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;