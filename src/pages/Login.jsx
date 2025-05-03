import AuthForm from "../components/AuthForm";
import Footer from '../components/Footer';

import React from 'react';


function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AuthForm />
      <Footer />
    </div>
  );
}

export default Login;
