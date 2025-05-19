'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AppStoreButton } from './AppStoreButton';
import Link from 'next/link';

const appColors = {
  'App Exhibit': 'rgba(0, 122, 255, 0.1)', // iOS blue
  'Cosmo Pic': 'rgba(255, 45, 85, 0.1)',   // Pink
  'Game Sheet': 'rgba(88, 86, 214, 0.1)',  // Purple
  'Streaks Track': 'rgba(255, 149, 0, 0.1)', // Orange
  'Chameleon Calculator': 'rgba(52, 199, 89, 0.1)', // Green
};

const appPaths = {
  'App Exhibit': 'app-exhibit',
  'Cosmo Pic': 'cosmo-pic',
  'Game Sheet': 'game-sheet',
  'Streaks Track': 'streaks',
  'Chameleon Calculator': 'chameleon-calculator'
};

export function AppCard({ app, index }) {
  const appPath = appPaths[app.name];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
      className="card relative overflow-hidden border border-transparent dark:border-gray-700 bg-background-light dark:bg-background-dark transition-colors duration-200"
      style={{
        '--hover-color': appColors[app.name],
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = appColors[app.name];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      <div className="flex items-center gap-4 relative z-20">
        <Link href={`/${appPath}`} className="flex items-center gap-4 flex-1 no-underline">
          <Image
            src={app.icon}
            alt={`${app.name} Icon`}
            width={50}
            height={50}
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            unoptimized
          />
          <span className="text-text-light dark:text-text-dark font-medium">
            {app.name}
          </span>
        </Link>
        <div className="relative z-30 transition-transform duration-300 hover:scale-110" onClick={(e) => e.stopPropagation()}>
          <AppStoreButton
            url={app.url}
            theme="dark"
            linkProps={{ title: `${app.name} on iOS` }}
          />
        </div>
      </div>
    </motion.div>
  );
} 