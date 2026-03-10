import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { economicData } from "../utils/economicData";

const CurrencyChart = () => {
  const data = economicData.exchangeRate;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">{label} 2024</p>
          <p className="text-sm text-pakistan-green">
            PKR/USD: Rs. {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="month" stroke="#666" />
        <YAxis stroke="#666" domain={[280, 300]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name="PKR/USD"
          stroke="#6b7280"
          strokeWidth={3}
          dot={{ fill: "#6b7280", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CurrencyChart;
