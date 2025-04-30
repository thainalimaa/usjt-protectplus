import AuthForm from "../components/AuthForm";
import Header from '../components/Header';
import Footer from '../components/Footer';

import React from 'react';


function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Header />
      <AuthForm />
      <Footer />
    </div>
  );
}

export default Login;
