import React from "react";
import { Menu, Bell, User, Settings } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 focus:outline-none lg:hidden"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center ml-4 lg:ml-0">
            <span className="text-xl font-semibold text-pakistan-green">
              Islamic Republic of Pakistan
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-pakistan-green transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-gray-500 hover:text-pakistan-green transition-colors">
            <Settings size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pakistan-green rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              Prime Minister's Office
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
