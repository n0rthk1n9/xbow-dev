'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AppStoreButton } from '../../components/AppStoreButton';
import Link from 'next/link';

const iOSUrl = 'https://apps.apple.com/de/app/cosmo-pic/id6472663048';

export default function CosmoPic() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Image
                src="/assets/cosmopic.webp"
                alt="Cosmo Pic Icon"
                width={50}
                height={50}
                className="rounded-lg"
                unoptimized
              />
              <AppStoreButton
                url={iOSUrl}
                theme="dark"
                linkProps={{ title: 'Cosmo Pic on iOS' }}
              />
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              <strong>To download Cosmo Pic, just press the download at the App Store button above</strong>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              I tried to download the Cosmo Pic App onto my device but it didn't work, what should I do?
            </h2>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <p>If you have problems downloading Cosmo Pic here are some tips:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Check how much storage you have left on your iPhone / iPad:
                  <ol className="list-decimal pl-6 mt-2 space-y-1">
                    <li>
                      Tap on <strong>Settings</strong> on your home screen and after that on <strong>General</strong>
                    </li>
                    <li>Tap on iPhone / iPad Storage</li>
                  </ol>
                </li>
                <li>
                  If there is less than 100 MB of space available you can try deleting other apps to free up some space. After that just try to download Cosmo Pic again.
                </li>
                <li>
                  Check your internet connection. To get the best experience, try to connect to a Wifi Network and start the download of Cosmo Pic again.
                </li>
                <li>Cancel the download and restart it.</li>
                <li>
                  Check Apples{' '}
                  <a
                    href="https://support.apple.com/en-us/HT207165"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    advice on how to detect errors when downloading apps
                  </a>
                  .
                </li>
                <li>Restart your iPhone and try to download Cosmo Pic again</li>
              </ul>
              <p>
                If this advice does not solve your problems, please contact me at:{' '}
                <a href="mailto:cosmopic@xbow.dev" className="text-primary hover:underline">
                  cosmopic@xbow.dev
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Where do I find the newest version of the Cosmo Pic App?
            </h2>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Just open the <strong>App Store</strong> App on your iPhone and search for "Cosmo Pic". If a new update is available it will show an "Update" button on the App Store page of the app.
                </li>
                <li>
                  The other way is to simply just tap on the App Store button on top of this support page to directly open the App Store page of the Cosmo Pic App
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              There is something wrong with the Cosmo Pic App on my phone, I think it has a bug, what should I do?
            </h2>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <ul className="list-disc pl-6 space-y-2">
                <li>First, try to update your App as described in the first point of the FAQ</li>
                <li>
                  If the error persists, please contact me at:{' '}
                  <a href="mailto:cosmopic@xbow.dev" className="text-primary hover:underline">
                    cosmopic@xbow.dev
                  </a>{' '}
                  with a description what happened and what you think should happen. Thanks in advance for your help!
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              What is the Cosmo Pic App capable of doing in general?
            </h2>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Instant Sharing: Generate QR codes for your photos to share them instantly with others. No need for lengthy explanations or searching through your photo library.
                </li>
                <li>
                  Offline Access: All your photo data is stored securely on your device, ensuring you have access anytime, anywhere, without the need for an internet connection.
                </li>
                <li>
                  Enhanced Visibility: Show your photos' screenshots and descriptions, and provide a direct link to the photo library for instant access.
                </li>
                <li>
                  Quick Setup: Simple and intuitive setup process. Add your photos in just a two steps and start sharing right away.
                </li>
                <li>
                  Secure and Private: Your data stays on your device, ensuring privacy and security without relying on external servers.
                </li>
              </ol>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card"
        >
          <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
            <p>
              Thank you for using my app Cosmo Pic. This means a lot to me. If you still have problems of any kind or you have suggestions on expanding it, don't hesitate to contact me at:{' '}
              <a href="mailto:cosmopic@xbow.dev" className="text-primary hover:underline">
                cosmopic@xbow.dev
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Legal
            </h2>
            <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
              <p>
                View our{' '}
                <Link 
                  href="/cosmo-pic/privacy" 
                  className="text-primary hover:text-primary-dark dark:text-primary-dark dark:hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 