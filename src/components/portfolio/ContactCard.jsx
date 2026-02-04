import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, Linkedin, Github } from 'lucide-react';
import InfoCard from './InfoCard';
import { portfolioData } from './PortfolioData';

export default function ContactCard() {
  const { email, linkedin, github, name } = portfolioData;
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = () => {
    window.location.href = `mailto:${email}?subject=Hello ${name}`;
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <InfoCard id="contact" delay={0.3} className="col-span-1 md:col-span-2 lg:col-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Get in Touch</h2>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        Interested in working together? Feel free to reach out and I'll get back to you as soon as possible.
      </p>
      
      <div className="space-y-3">
        <motion.button
          onClick={handleSendMessage}
          disabled={messageSent}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            messageSent
              ? 'bg-green-500 text-white'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
          }`}
          aria-label={messageSent ? "Message sent" : "Send message via email"}
        >
          {messageSent ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Opening Mail Client...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
        
        <div className="flex gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="View GitHub profile"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
      
      <p className="text-center text-slate-400 text-xs mt-6">
        {email}
      </p>
    </InfoCard>
  );
}