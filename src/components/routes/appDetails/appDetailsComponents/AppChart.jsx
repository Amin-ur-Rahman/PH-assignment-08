import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AppChart({ app }) {
  //   console.log(app);
  const { ratings } = app;

  return (
    <ResponsiveContainer height={400} width="100%">
      <BarChart
        data={ratings}
        layout="vertical"
        margin={{ top: 20, bottom: 20, left: 10, right: 10 }}
      >
        <XAxis type="number" padding={{ left: 20, right: 20 }}></XAxis>
        <YAxis
          dataKey="name"
          type="category"
          padding={{ top: 20, bottom: 20 }}
          width={70}
          stroke="0"
          reversed
        ></YAxis>
        <Legend></Legend>
        <Tooltip></Tooltip>
        <Bar dataKey="count" fill="orange" barSize={30}></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default AppChart;
