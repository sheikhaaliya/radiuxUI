// components/AppBar.tsx

import React from 'react';
import { Flex, Heading, Button, IconButton,Box } from '@radix-ui/themes';
import { MagnifyingGlassIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import Link from "next/link";
import styles from "./header.module.css";
const AppBar: React.FC = () => {
  return (
    <Box p="2" className={styles.header} mb="3">
    <Flex>
      <Box flexGrow="1" p="2">
        <Link href="/">
          <Heading highContrast >Pokemon Deck Builder</Heading>
        </Link>
      </Box>
      <Box  p="2">
      <Flex gap="3">
        <IconButton aria-label="Search" className="text-white">
          <MagnifyingGlassIcon />
        </IconButton>
        <IconButton aria-label="Instagram" className="text-white">
          <InstagramLogoIcon />
        </IconButton>
      
      </Flex>
      </Box>
    
    </Flex>
    </Box>
  );
};

export default AppBar;
