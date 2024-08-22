// components/Layout.tsx

import React from 'react';
import AppBar from './Appbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen" style={{backgroundColor:"var(--radix-theme-secondary)"}}>
      <AppBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          {/* Box for content */}
          <div className="max-w-screen-xl mx-auto " >
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
