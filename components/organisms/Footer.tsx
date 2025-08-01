import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-2">EventTier</h3>
          <p className="text-sm text-gray-400">Premium event access based on your membership tier.</p>
        </div>
      
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-2">Product</h3>
          <ul>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">Events</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">Pricing</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer">Membership</li>
          </ul>
        </div>
       
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-2">Company</h3>
          <ul>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">About</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">Contact</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer">Support</li>
          </ul>
        </div>
       
        <div>
          <h3 className="text-lg font-bold text-gray-100 mb-2">Legal</h3>
          <ul>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">Privacy</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer mb-1">Terms</li>
            <li className="text-sm text-gray-400 hover:text-gray-200 cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} EventTier. All rights reserved.
      </div>
    </footer>
    );
}