import React, { useState } from "react";
import { Award, Calendar, Download, Share2 } from "lucide-react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import KpiCards from "./KpiCards";
import EconomicGrowthChart from "./EconomicGrowthChart";
import InflationChart from "./InflationChart";
import FiscalDeficitChart from "./FiscalDeficitChart";
import ForeignReservesChart from "./ForeignReservesChart";
import ExportImportChart from "./ExportImportChart";
import RemittancesChart from "./RemittancesChart";
import SectoralGrowthChart from "./SectoralGrowthChart";
import DebtChart from "./DebtChart";
import CurrencyChart from "./CurrencyChart";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header Section */}
            <div
              id="dashboard"
              className="mb-8 bg-gradient-to-r from-green-600  to-green-600 rounded-2xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Award size={32} className="text-yellow-300" />
                    <h1 className="text-3xl font-bold text-white-800">
                      Pakistan Economic Dashboard
                    </h1>
                  </div>
                  <p className="text-white-700 text-lg">
                    Real-time economic indicators and performance metrics
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <button className="bg-green-700/20 hover:bg-green-700/30 text-white-900 px-4 py-2 rounded-lg flex items-center transition-colors">
                    <Calendar size={18} className="mr-2" />
                    Dec 2024
                  </button>
                  <button className="bg-green-700/20 hover:bg-green-700/30 text-white-900 px-4 py-2 rounded-lg flex items-center transition-colors">
                    <Download size={18} className="mr-2" />
                    Export
                  </button>
                  <button className="bg-green-700/20 hover:bg-green-700/30 text-white-900 px-4 py-2 rounded-lg flex items-center transition-colors">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* KPI Cards */}
            <KpiCards />

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              {/* GDP Growth Chart */}
              <div id="gdp" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    GDP Growth Rate (%)
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Annual
                  </span>
                </div>
                <EconomicGrowthChart />
              </div>

              {/* Inflation Chart */}
              <div id="inflation" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Inflation Rate (CPI %)
                  </h3>
                  <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    Monthly
                  </span>
                </div>
                <InflationChart />
              </div>

              {/* Fiscal Deficit Chart */}
              <div id="fiscal" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Fiscal Deficit (% of GDP)
                  </h3>
                  <span className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                    FY 2024-25
                  </span>
                </div>
                <FiscalDeficitChart />
              </div>

              {/* Foreign Reserves Chart */}
              <div id="reserves" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Foreign Exchange Reserves
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Billion USD
                  </span>
                </div>
                <ForeignReservesChart />
              </div>

              {/* Exports vs Imports Chart */}
              <div
                id="exports"
                className="dashboard-card lg:col-span-2 scroll-mt-20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Exports vs Imports
                  </h3>
                  <div className="flex space-x-3">
                    <span className="flex items-center text-xs">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                      Exports
                    </span>
                    <span className="flex items-center text-xs">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                      Imports
                    </span>
                  </div>
                </div>
                <ExportImportChart />
              </div>

              {/* Remittances Chart */}
              <div id="remittances" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Remittances
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    Billion USD
                  </span>
                </div>
                <RemittancesChart />
              </div>

              {/* Sectoral Growth Chart */}
              <div id="sectors" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Sectoral Growth
                  </h3>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
                    FY 2024
                  </span>
                </div>
                <SectoralGrowthChart />
              </div>

              {/* Public Debt Chart */}
              <div id="debt" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    Public Debt
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    % of GDP
                  </span>
                </div>
                <DebtChart />
              </div>

              {/* Currency Chart */}
              <div id="currency" className="dashboard-card scroll-mt-20">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-pakistan-green">
                    PKR/USD Exchange Rate
                  </h3>
                  <span className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                    Daily
                  </span>
                </div>
                <CurrencyChart />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                    alt="Pakistan Flag"
                    className="w-12 h-8 object-cover rounded shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Prime Minister's Office
                    </p>
                    <p className="text-xs text-gray-500">
                      Economic Advisory Council • Cabinet Division, Islamabad
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4 text-xs text-gray-500">
                  <span>Data source: Pakistan Bureau of Statistics, SBP</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Last updated: December 2024</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
