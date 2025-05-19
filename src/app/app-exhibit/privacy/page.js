'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AppExhibitPrivacy() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-8 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark">
      <div className="mx-auto max-w-3xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card bg-card-light dark:bg-card-dark shadow-lg rounded-lg p-6"
        >
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
              App Exhibit app Privacy Policy
            </h1>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <p>
                I built the App Exhibit app as a Freemium app.
              </p>

              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Information Collection and Use
              </h2>
              <p>
                I don't store any user-identifiable data anywhere outside your device.
              </p>
              <p>
                The app does use third-party APIs that may collect information used to identify you.
              </p>

              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Link to the privacy policy of third-party service providers used by the app
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a 
                    href="https://www.apple.com/legal/privacy/en-ww/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary transition-colors duration-200"
                  >
                    iTunes API
                  </a>
                </li>
                <li>
                  <a 
                    href="https://freemiumkit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary transition-colors duration-200"
                  >
                    FreemiumKit
                  </a>
                </li>
              </ul>

              <p>
                I may update my Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>This policy is effective as of 2024-09-20</p>

              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                Contact Me
              </h2>
              <p>
                If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at{' '}
                <a 
                  href="mailto:appexhibit@xbow.dev" 
                  className="text-primary hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary transition-colors duration-200"
                >
                  appexhibit@xbow.dev
                </a>
                .
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 