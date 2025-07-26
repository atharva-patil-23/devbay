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

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                
                Where 
                <span className="text-teal-500"> Developers</span> <br />
                document their journey<br className="hidden sm:block" />
              </h1>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-muted-foreground max-w-lg">
                <p>
                Every bug you fix, every feature you ship, every lesson you learn is content waiting to be shared. Help other developers while building your own brand.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:space-x-4 sm:gap-0">
              
              <button className="bg-teal-500 hover:bg-teal-400/90 text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold">
                Get started free
              </button>
              <button className="flex text-black hover:bg-gray-300 
              hover:text-white rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              <ArrowDown className="h-3 w-3 md:h-5 md:w-5 mr-2 " />
                Try the demo
              </button>
            </div>
          </div>

          {/* Right Column - Static Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img 
                src="/hero-image.jpg"
                alt="Developer coding on monitor"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
               
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage