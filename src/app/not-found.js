'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8"
      >
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
} 