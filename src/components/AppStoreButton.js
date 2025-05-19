import { motion } from 'framer-motion';
import Image from 'next/image';

export function AppStoreButton({ url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="block dark:hidden">
        <Image
          src="/assets/download_on_app_store_white.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          priority
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src="/assets/download_on_app_store_black.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          priority
        />
      </div>
    </motion.a>
  );
} 