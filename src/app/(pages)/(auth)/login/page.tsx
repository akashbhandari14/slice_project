"use client"


// components/LoginPage.tsx
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Box } from 'lucide-react';
import Link from 'next/link';

interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-bgColor py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full">
                {/* Logo and Title */}
                <div className="login_heading">
                    <h1 className='text-center text-4xl font-bold'>Login</h1>
                    <ul className='flex justify-center gap-3'>
                        <li className='text-red-800'>Home</li>
                        <li>Login</li>
                    </ul>
                </div>

                <div className="login_box p-8 rounded-lg shadow-md space-y-8 bg-bgColor">
                    {/* Login Form */}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-6 rounded-md">
                            <div>
                                <h3 className="text-3xl font-semibold mb-2 text-center">Login to Rai's Sweet</h3>
                                <p className="text-gray-600 text-center">
                                    Don't have an account?{' '}
                                    <Link href="/register" className="text-rose-600 hover:text-rose-500 underline">
                                        Create a free account
                                    </Link>
                                </p>
                            </div>


                            <div className="or_sigin_with_Email flex justify-between items-center mt-12 px-4 sm:px-6 lg:px-8">
                                <div className='h-[0.1rem] w-[50%] max-sm:w-[30%] bg-gray-400'></div>
                                <p className=' w-full px-4 text-center'>or Sign in with Email</p>
                                <div className='h-[0.1rem] w-[50%] max-sm:w-[30%] bg-gray-400'></div>
                            </div>


                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Your Email
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="appearance-none block w-full p-3 outline-none bg-[#f0ead4] border-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                                            placeholder="sholy@mail.com"
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
                                            className="appearance-none block w-full p-3 outline-none bg-[#f0ead4] border-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                                            placeholder="Min. 6 characters"
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
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                                        checked={formData.rememberMe}
                                        onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <Link href="/forgot" className="text-rose-600 hover:text-rose-500">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center p-3 border border-transparent rounded-md shadow-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default LoginPage;