import React from 'react'
import { Code2, Users, TrendingUp, Zap, BookOpen, Share2, ArrowDown } from "lucide-react";

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <nav className="flex justify-between items-center px-4 md:px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          
          <img src="/devbay-logo.png" className='h-6 w-6 md:h-8 md:w-8' alt="devbay-logo" />

          <span className="text-xl md:text-2xl font-bold text-foreground">DevBay</span>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-black transition-colors">Why DevBay?</a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">Explore</a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">Community</a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors">Resources</a>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          
          <button className="hover:bg-teal-200/90 text-slate-400
          hover:text-slate-500 rounded-md px-3 py-2 md:px-6 text-sm md:text-base cursor-pointer">
            Login
          </button>
          
          <button className="bg-teal-500 hover:bg-teal-500/90 text-white rounded-md px-3 py-2 md:px-6 text-sm md:text-base cursor-pointer">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  )
}

export default LandingPage