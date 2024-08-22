// components/Footer.tsx

import React from 'react';
import { Flex, Text, Link } from '@radix-ui/themes';

const Footer: React.FC = () => {
  return (
    <Flex 
     
      className="w-full p-4 bg-gray-900 text-white"
      justify="center" 
      align="center"
      direction="column"
      style={{backgroundColor:"var(--radix-theme-primary)"}}
    >
      <Text size="2" className="mb-2">
        &copy; {new Date().getFullYear()} My Radiux App. All rights reserved.
      </Text>
      <Flex gap="4">
        <Link href="/privacy" className="text-white hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-white hover:underline">
          Terms of Service
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
