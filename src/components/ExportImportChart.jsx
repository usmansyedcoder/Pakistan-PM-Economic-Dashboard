import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { economicData } from "../utils/economicData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-sm text-green-600">
          Exports: ${payload[0].value} Billion
        </p>
        <p className="text-sm text-red-600">
          Imports: ${payload[1].value} Billion
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Trade Deficit: ${(payload[1].value - payload[0].value).toFixed(1)}{" "}
          Billion
        </p>
      </div>
    );
  }
  return null;
};

const ExportImportChart = () => {
  const data = economicData.trade;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="quarter" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="exports"
          name="Exports"
          fill="#22c55e"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="imports"
          name="Imports"
          fill="#ef4444"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExportImportChart;
