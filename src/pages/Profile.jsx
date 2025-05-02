import User from '../components/User';
import Header from '../components/Header';
import Footer from '../components/Footer';

import React from 'react';


function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Header />
      <User />
      <Footer />
    </div>
  );
}

export default Profile;
