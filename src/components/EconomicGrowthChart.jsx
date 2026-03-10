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

const EconomicGrowthChart = () => {
  const data = economicData.gdpGrowth;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">Fiscal Year: {label}</p>
          <p className="text-sm text-pakistan-green">
            GDP Growth: {payload[0].value}%
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
        <XAxis dataKey="year" stroke="#666" />
        <YAxis stroke="#666" domain={[-1, 7]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name="GDP Growth Rate"
          stroke="#01411C"
          strokeWidth={3}
          dot={{ fill: "#01411C", r: 6 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EconomicGrowthChart;
