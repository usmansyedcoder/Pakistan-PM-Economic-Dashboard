import React from "react";
import {
  TrendingUp,
  DollarSign,
  BarChart,
  Activity,
  ArrowUp,
  ArrowDown,
  CreditCard,
  Package,
  Landmark,
  Users,
} from "lucide-react";
import { economicData } from "../utils/economicData";

const KpiCards = () => {
  const { kpiData } = economicData;

  const mainCards = [
    {
      title: "GDP Growth",
      value: `${kpiData.gdpGrowth}%`,
      icon: TrendingUp,
      change: "+0.5%",
      positive: true,
      color: "emerald",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-500",
      iconBg: "bg-emerald-500",
      subtitle: "Annual Growth Rate",
    },
    {
      title: "Inflation Rate",
      value: `${kpiData.inflation}%`,
      icon: Activity,
      change: "-1.2%",
      positive: true,
      color: "amber",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-500",
      iconBg: "bg-amber-500",
      subtitle: "Consumer Price Index",
    },
    {
      title: "Exports",
      value: `$${kpiData.exports}B`,
      icon: Package,
      change: "+$0.3B",
      positive: true,
      color: "blue",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-500",
      iconBg: "bg-blue-500",
      subtitle: "Monthly Goods",
    },
    {
      title: "Imports",
      value: `$${kpiData.imports}B`,
      icon: Package,
      change: "-$0.2B",
      positive: true,
      color: "red",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-500",
      iconBg: "bg-red-500",
      subtitle: "Monthly Goods",
    },
  ];

  const secondaryCards = [
    {
      title: "Forex Reserves",
      value: `$${kpiData.reserves}B`,
      icon: DollarSign,
      change: "+$0.5B",
      positive: true,
      color: "purple",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Remittances",
      value: `$${kpiData.remittances}B`,
      icon: CreditCard,
      change: "+$0.1B",
      positive: true,
      color: "indigo",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Fiscal Deficit",
      value: `${kpiData.fiscalDeficit}%`,
      icon: Landmark,
      change: "-0.3%",
      positive: true,
      color: "orange",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Exchange Rate",
      value: `Rs. ${kpiData.exchangeRate}`,
      icon: Activity,
      change: "+1.4",
      positive: false,
      color: "gray",
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainCards.map((card, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.bgColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${card.borderColor} border-l-4`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  {card.title}
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {card.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
                <div className="flex items-center mt-3">
                  <div
                    className={`flex items-center ${card.positive ? "text-green-600" : "text-red-600"} bg-white rounded-full px-2 py-1 shadow-sm`}
                  >
                    {card.positive ? (
                      <ArrowUp size={14} className="mr-1" />
                    ) : (
                      <ArrowDown size={14} className="mr-1" />
                    )}
                    <span className="text-xs font-semibold">{card.change}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    vs last month
                  </span>
                </div>
              </div>
              <div className={`${card.iconBg} p-3 rounded-xl shadow-lg`}>
                <card.icon size={24} className="text-white" />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
              <card.icon size={80} className="text-gray-800" />
            </div>
          </div>
        ))}
      </div>

      {/* Secondary KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {secondaryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`${card.bgColor} p-2 rounded-lg`}>
                <card.icon size={18} className={card.iconColor} />
              </div>
              <span
                className={`text-xs font-medium ${card.positive ? "text-green-600" : "text-red-600"} bg-${card.color}-50 px-2 py-1 rounded-full`}
              >
                {card.change}
              </span>
            </div>
            <p className="text-sm text-gray-600">{card.title}</p>
            <p className="text-xl font-bold text-gray-800 mt-1">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiCards;
