"use client"


// components/SignupPage.tsx
import React, { useState } from 'react';
import { Eye, EyeOff, Box } from 'lucide-react';
import Link from 'next/link';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgColor py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        {/* Logo and Title */}
        <div className="login_heading">
          <h1 className='text-center text-4xl font-bold'>Register</h1>
          <ul className='flex justify-center gap-3'>
            <li className='text-red-800'>Home</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Signup Form */}
        <form className="mt-8 space-y-6 bg-bgColor p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="space-y-6 rounded-md">
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-center">Sign Up to Rai's Sweet.</h3>
              <p className="text-center text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-rose-600 hover:text-rose-500 underline">
                  Sign In
                </Link>
              </p>
            </div>


            <div className="or_signup_with_Email flex justify-between items-center mt-6 px-4 sm:px-6 lg:px-8">
              <div className='h-[0.1rem] w-[50%] max-sm:w-[30%] bg-gray-400'></div>
              <p className=' w-full px-4 text-center'>or Sign up with Email</p>
              <div className='h-[0.1rem] w-[50%] max-sm:w-[30%] bg-gray-400'></div>
            </div>


            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none block w-full p-3 bg-[#f0ead4] border-none outline-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full p-3 bg-[#f0ead4]  border-none outline-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="appearance-none block w-full p-3 bg-[#f0ead4] border-none outline-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Min. 8 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    className="appearance-none block w-full p-3 bg-[#f0ead4] border-none outline-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center p-3 bordernone rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;