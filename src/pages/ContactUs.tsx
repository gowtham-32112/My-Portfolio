import React, { useRef, useState, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Auto-close toast after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    emailjs
      .sendForm('service_k1xzy2m', 'template_v7pbewp', form.current, {
        publicKey: 'dCk43C9uA8RQRekBB',
      })
      .then(() => {
        setToastMessage({ type: 'success', text: 'Message sent successfully!' });
        form.current?.reset();
      })
      .catch((error) => {
        setToastMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        console.error('Email sending error:', error);
      })
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 relative">
      {/* Toast Message */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`fixed top-6 right-6 px-6 py-3 rounded-lg shadow-md text-sm font-medium z-50 ${
              toastMessage.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {toastMessage.text}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Send me a message below.
          </p>
        </motion.div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center px-6 py-2 rounded-full font-semibold transition-colors ${
                isSending ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white`}
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
