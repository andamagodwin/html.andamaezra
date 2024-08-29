import React, { useState } from 'react';
import { User, ChevronDown, LogIn, Home, Book, Settings, LogOut, Menu, X, Info, Phone, Mail, User2 } from 'lucide-react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <>
            <nav className="bg-gradient-to-br from-purple-600 to-blue-500 bg-opacity-10 backdrop-blur-lg shadow-lg fixed w-full z-10 font-mono">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button onClick={toggleSideNav} className="text-white mr-4 focus:outline-none lg:hidden">
                                <Menu className="h-5 w-5 bg-red-600" />
                                <User2/>
                            </button>
                            <span className="text-white text-2xl font-bold font-mono">html.andama</span>
                        </div>
                        <div className="hidden lg:flex items-center space-x-4 font-mono">
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Home</a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Features</a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Pricing</a>
                            <a href="#" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-white text-purple-600 px-4 py-2 rounded-md mr-4 hover:bg-purple-100 transition duration-300">
                                Login
                                <LogIn className="inline-block ml-2 h-5 w-5" />
                            </button>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center text-white hover:text-gray-200 focus:outline-none transition duration-300"
                                >
                                    <User className="h-8 w-8" />
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <Home className="inline-block mr-2 h-4 w-4" /> Dashboard
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <Book className="inline-block mr-2 h-4 w-4" /> My Courses
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <Settings className="inline-block mr-2 h-4 w-4" /> Settings
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <LogOut className="inline-block mr-2 h-4 w-4" /> Logout
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Side Navigation */}
            <div className={`fixed inset-y-0 left-0 transform ${isSideNavOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-white shadow-lg transition duration-300 ease-in-out z-20`}>
                <div className="p-6">
                    <button onClick={toggleSideNav} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                    </button>
                    <div className="mt-8 space-y-4">
                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition duration-300">
                            <Home className="inline-block mr-2 h-5 w-5" /> Home
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition duration-300">
                            <Info className="inline-block mr-2 h-5 w-5" /> About
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition duration-300">
                            <Book className="inline-block mr-2 h-5 w-5" /> Courses
                        </a>
                        <a href="#" className="block text-gray-700 hover:text-purple-600 transition duration-300">
                            <Phone className="inline-block mr-2 h-5 w-5" /> Contact
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
