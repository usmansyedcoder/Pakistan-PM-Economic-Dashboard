import React, { useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  BarChart3,
  PieChart,
  Globe,
  X,
  Home,
  Package,
  CreditCard,
  Landmark,
  Settings,
  LogOut,
  LineChart,
  Activity,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    {
      id: "dashboard",
      icon: Home,
      label: "Dashboard Overview",
      section: "main",
    },
    { id: "gdp", icon: TrendingUp, label: "GDP & Growth", section: "main" },
    {
      id: "inflation",
      icon: Activity,
      label: "Inflation & Prices",
      section: "main",
    },
    {
      id: "trade",
      icon: BarChart3,
      label: "Trade & Commerce",
      section: "main",
    },
    {
      id: "sectors",
      icon: PieChart,
      label: "Sectoral Growth",
      section: "economic",
    },
    {
      id: "exports",
      icon: Package,
      label: "Exports/Imports",
      section: "economic",
    },
    {
      id: "remittances",
      icon: CreditCard,
      label: "Remittances",
      section: "economic",
    },
    {
      id: "fiscal",
      icon: Landmark,
      label: "Fiscal Policy",
      section: "economic",
    },
    { id: "debt", icon: LineChart, label: "Public Debt", section: "economic" },
    {
      id: "currency",
      icon: DollarSign,
      label: "Exchange Rate",
      section: "economic",
    },
    {
      id: "reserves",
      icon: Globe,
      label: "Foreign Reserves",
      section: "economic",
    },
  ];

  const handleNavigation = (itemId) => {
    setActiveItem(itemId);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    const element = document.getElementById(itemId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const mainMenuItems = menuItems.filter((item) => item.section === "main");
  const economicMenuItems = menuItems.filter(
    (item) => item.section === "economic",
  );

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-30 w-72 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 shadow-lg ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                alt="Pakistan Flag"
                className="w-6 h-4 object-cover rounded"
              />
            </div>
            <div>
              <h2 className="text-gray-800 font-bold text-lg">PM Economic</h2>
              <p className="text-gray-500 text-xs">Dashboard v2.0</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-800 lg:hidden transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 h-[calc(100vh-200px)] overflow-y-auto">
          <div className="mb-8">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-4 mb-3">
              Main
            </p>
            {mainMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center px-4 py-3 mb-1 rounded-lg transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-green-600 text-white shadow"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                <item.icon
                  size={20}
                  className={`mr-3 ${activeItem === item.id ? "text-white" : "text-gray-500"}`}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mb-8">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider px-4 mb-3">
              Economic Indicators
            </p>
            {economicMenuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full flex items-center px-4 py-2.5 mb-1 rounded-lg transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-green-600 text-white shadow"
                    : "text-gray-700 hover:bg-green-100"
                }`}
              >
                <item.icon
                  size={18}
                  className={`mr-3 ${activeItem === item.id ? "text-white" : "text-gray-500"}`}
                />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <button className="w-full flex items-center px-4 py-2.5 rounded-lg text-gray-700 hover:bg-green-100 transition-all duration-200">
              <Settings size={18} className="mr-3 text-gray-500" />
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 w-full p-4">
          <div className="bg-green-50 rounded-xl p-4 border border-gray-200 shadow-inner">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PM</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm font-semibold">
                  Prime Minister's Office
                </p>
                <p className="text-gray-500 text-xs">
                  Cabinet Division, Islamabad
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-800 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
