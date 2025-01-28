import React from "react";
import { ArrowRight, Globe } from "lucide-react";
const Header = () => {
  return (
    <div className="h-8 w-full px-4 text-sm py-1 bg-slate-900 text-white">
      <div className="flex">
        <div className="flex-1 flex items-center">
        
          <button className="mr-2 hover:cursor-pointer hover:underline">GPU/AI</button>
          <ArrowRight className="h-4"/>
        </div>
        <div className="flex-1 justify-end flex gap-2">
          <button className="hover:underline hover:cursor-pointer">under attack?</button>
          <button className="hover:underline hover:cursor-pointer">login </button>
          <button className="flex items-center group hover:underline hover:cursor-pointer">
            <Globe className="h-4" />
            <span className=" group-hover:underline">En</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
