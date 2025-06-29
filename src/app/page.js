"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppCard } from '../components/AppCard';
import { MotionWrapper } from '../components/MotionWrapper';

const apps = [
  {
    name: 'App Exhibit',
    icon: '/assets/appexhibit.webp',
    url: 'https://apps.apple.com/de/app/app-exhibit-your-app-showcase/id6503256642',
  },
  {
    name: 'Cosmo Pic',
    icon: '/assets/cosmopic.webp',
    url: 'https://apps.apple.com/de/app/cosmo-pic/id6472663048',
  },
  {
    name: 'Game Sheet',
    icon: '/assets/gamesheeticon.webp',
    url: 'https://apps.apple.com/de/app/game-sheet/id6446234019?l=en',
  },
  {
    name: 'Streaks Track',
    icon: '/assets/streaks.webp',
    url: 'https://apps.apple.com/de/app/streaks-track/id1610940278?l=en',
  },
  {
    name: 'Chameleon Calculator',
    icon: '/assets/chameleoncalculatoricon.webp',
    url: 'https://apps.apple.com/de/app/chameleon-calculator/id1508721476?l=en',
  },
];

export default function Home() {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  return (
    <main className="container mx-auto min-h-screen px-4 py-8 md:px-8 lg:px-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <MotionWrapper className="card">
          <div className="space-y-4">
            <div className="flex flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark">
                  Hi, my name is Jan 👋
                </h2>
                <h3 className="text-xl text-text-secondary-light dark:text-text-secondary-dark">
                  📍 Hamburg ⚓️, Germany 🇩🇪
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/assets/CV_Jan_Armbrust_iOS_Engineer_English.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative"
                >
                  <div className="w-16 h-20 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-200 p-10">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📄</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">Download CV</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </MotionWrapper>

        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <AppCard key={app.name} app={app} index={index} />
            ))}
          </div>

          <MotionWrapper className="card" transition={{ delay: 0.1 }}>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">
                About Me
              </h2>
              <div className="space-y-4 text-text-secondary-light dark:text-text-secondary-dark">
                <p>
                  I'm passionate indie app developer with a soft spot for pixel-perfect details, creative problem-solving, and the Apple ecosystem.
                </p>
                <p>
                  My journey into app development took off at the Kodeco iOS Accelerator Bootcamp, where I laid the foundation for modern iOS development with Swift and SwiftUI. That experience ignited a fire in me — not just for building apps, but for building apps that feel delightful to use.
                </p>
                <p>
                  Since then, I've taken a huge leap forward by joining the Apple Developer Academy, an experience that's challenged me to grow in ways I didn't expect. From collaborating in diverse teams to exploring real-world impact through design thinking and challenge-based learning, the Academy has been a playground for both my creativity and technical skills.
                </p>
                <p>
                  I'm currently working on a few indie projects I'm really proud of — all crafted with SwiftUI, CoreData, and CloudKit — and I love sharing my progress, learnings, and occasional struggles with the community.
                </p>
                <p>
                  If you're into building meaningful apps, nerding out over elegant UI, or just want to chat about Swift or the magic of making things — I'd love to connect.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper className="card" transition={{ delay: 0.4 }}>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/n0rthk1n9"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="block dark:hidden">
                <Image
                  src="/assets/github-mark.svg"
                  alt="GitHub Icon"
                  width={50}
                  height={50}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/assets/github-mark-white.svg"
                  alt="GitHub Icon"
                  width={50}
                  height={50}
                  className="rounded-lg"
                  unoptimized
                />
              </div>
            </a>
            <a
              href="https://mastodon.social/@n0rthk1n9"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/mastodon.webp"
                alt="Mastodon Icon"
                width={50}
                height={50}
                className="rounded-lg"
                unoptimized
              />
            </a>
            <a
              href="https://bsky.app/profile/n0rthk1n9.bsky.social"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/assets/bluesky.webp"
                alt="Bluesky Icon"
                width={50}
                height={50}
                className="rounded-lg"
                unoptimized
              />
            </a>
          </div>
        </MotionWrapper>
      </div>
    </main>
  );
} 