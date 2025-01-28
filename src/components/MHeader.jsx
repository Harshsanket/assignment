import { ChevronDown, Sparkle } from 'lucide-react'
import React from 'react'

const MHeader = () => {
  return (
    <>
<header className="h-12 p-2 flex items-center justify-between sticky top-0 z-10 bg-slate/30 backdrop-blur-lg">

     
      {/* Left Section with Logo */}
      <div className="flex-1 flex  items-center">
        <Sparkle className="h-4 text-white" />
        <span className="text-2xl text-white font-semibold">Gcore</span>
      </div>

      {/* Middle Section with 5 Buttons */}
      <div className="flex-1 flex justify-center space-x-4 text-white ">
        <button className="flex items-center hover:cursor-pointer">Product
        <ChevronDown className="h-4" />
        </button>
        <button className="flex items-center hover:cursor-pointer">Pricing
          <ChevronDown className="h-4" />
        </button>
        <button className="flex items-center hover:cursor-pointer">Resources
          <ChevronDown className="h-4" />
        </button>
        <button className="flex items-center hover:cursor-pointer">Patners
          <ChevronDown className="h-4" />
        </button>
        <button className="flex items-center hover:cursor-pointer">why&nbsp;Gcore
          <ChevronDown className="h-4" />
        </button>
      </div>

      {/* Right Section with 2 Buttons with gap-4 */}
      <div className="flex-1 flex justify-end space-x-4 text-white text-sm">
        <button className="rounded-3xl px-2 py-1 bg-gray-500 text-white hover:cursor-pointer">Contact us</button>
        <button className="rounded-3xl px-2 py-1 bg-orange-500 text-white hover:cursor-pointer">Signup for free</button>
      </div>
    </header>
    </>
  )
}

export default MHeader