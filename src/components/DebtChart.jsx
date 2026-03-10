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

const DebtChart = () => {
  // Updated data based on your image
  const data = [
    { quarter: "Q1 2023", value: 10 },
    { quarter: "Q2 2023", value: 15 },
    { quarter: "Q3 2023", value: 17 },
    { quarter: "Q4 2023", value: 12 },
    { quarter: "Q1 2024", value: 13 },
    { quarter: "Q2 2024", value: 33 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-sm text-pakistan-green">
            Public Debt: {payload[0].value}% of GDP
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="quarter" stroke="#666" />
        <YAxis stroke="#666" domain={[0, 35]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          dataKey="value"
          name="Public Debt"
          fill="#f97316"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DebtChart;
