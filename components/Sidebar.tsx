// components/Sidebar.tsx
"use client"
import React from 'react';
import { Flex, Link, Text } from '@radix-ui/themes';
import { BookmarkIcon, FileIcon, CrumpledPaperIcon } from '@radix-ui/react-icons';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar: React.FC = () => {
  const router = useRouter();
const pathname=usePathname()
  // Function to determine if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <Flex 
      className="w-100 h-full bg-gray-800 text-white p-4 flex-col"
      direction="column"
      align="start"
      style={{ width: "204px", padding: 20 }}
    >
      <Text size="3" weight="bold" className="mb-4" color="blue">
        Menu
      </Text>
      <Link 
        href="/dashboard" 
        className={`p-2 rounded ${isActive('/dashboard') ? 'bg-blue-700' : 'hover:bg-gray-700'} text-white`}
      >
        <Flex align="center" gap="2">
          <BookmarkIcon />
          <Text>Dashboard</Text>
        </Flex>
      </Link>
      <Link 
        href="#" 
        className={`p-2 rounded ${isActive('/add-item') ? 'bg-blue-700' : 'hover:bg-gray-700'} text-white`}
      >
        <Flex align="center" gap="2">
          <FileIcon />
          <Text>Add Item</Text>
        </Flex>
      </Link>
      <Link 
        href="#" 
        className={`p-2 rounded ${isActive('/documents') ? 'bg-blue-700' : 'hover:bg-gray-700'} text-white`}
      >
        <Flex align="center" gap="2">
          <CrumpledPaperIcon />
          <Text>Documents</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Sidebar;
