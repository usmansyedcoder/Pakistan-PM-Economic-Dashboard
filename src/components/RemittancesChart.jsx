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

const RemittancesChart = () => {
  // Updated data based on your image
  const data = [
    { quarter: "Q1 2023", value: 2.5 },
    { quarter: "Q2 2023", value: 2.8 },
    { quarter: "Q3 2023", value: 3.0 },
    { quarter: "Q4 2023", value: 3.2 },
    { quarter: "Q1 2024", value: 3.5 },
    { quarter: "Q2 2024", value: 3.8 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-sm text-pakistan-green">
            Remittances: ${payload[0].value} Billion
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
        <XAxis dataKey="quarter" stroke="#666" />
        <YAxis stroke="#666" domain={[0, 4]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name="Remittances"
          stroke="#a855f7"
          strokeWidth={3}
          dot={{ fill: "#a855f7", r: 6 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RemittancesChart;
