// pages/index.tsx

import React from 'react';
import Layout from '../../components/Layout';
import Home from './home/page'; // Assuming this is your content page

const Page: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Page;
