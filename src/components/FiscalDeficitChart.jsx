import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { economicData } from "../utils/economicData";

const FiscalDeficitChart = () => {
  const data = economicData.fiscalDeficit;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">Fiscal Year: {label}</p>
          <p className="text-sm text-pakistan-green">
            Deficit: {payload[0].value}% of GDP
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
        <XAxis dataKey="year" stroke="#666" />
        <YAxis stroke="#666" domain={[0, 10]} />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          dataKey="value"
          name="Fiscal Deficit"
          fill="#01411C"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FiscalDeficitChart;
