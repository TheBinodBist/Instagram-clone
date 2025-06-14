import React from 'react';
import Feed from './Feed';
import { Outlet } from 'react-router-dom';
import RightSidebar from './RightSidebar';
import useGetAllPost from '@/hooks/useGetAllPost';
import useGetSuggestedUsers from '@/hooks/useGetSuggestedUsers';

const Home = () => {
  useGetAllPost();
  useGetSuggestedUsers();

  return (
    <div className="flex justify-between max-w-7xl mx-auto px-4">
      {/* Feed Section */}
      <div className="flex-1 max-w-2xl">
        <Feed />
        <Outlet />
      </div>

      
    </div>
  );
};

export default Home;
