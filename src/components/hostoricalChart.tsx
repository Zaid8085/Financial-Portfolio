import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { useEffect, useState } from "react";
import { HistoricalDef } from "../types/financialData";
import HistoricalChartFilter from "./historicalChartFilter";
import { getHistoricalData } from "../helper/financialPortfolio";
import React from "react";

const HistoricalChart = () => {
  const [historicalData, setHistoricalData] = useState<HistoricalDef[]>([]);

  // Fetch current portfolio data on initial load
  useEffect(() => {
    const loadInitialData = async () => {
      const data: HistoricalDef[] = await getHistoricalData();
      setHistoricalData([...data]);
    };
    loadInitialData();
  }, []);

  // Handle date selection
  const handleDateChange = async (date: Date | null) => {
    const data: HistoricalDef[] = await getHistoricalData(date);
    setHistoricalData([...data]);
  };

  return (
    <div>
      <HistoricalChartFilter onDateChange={handleDateChange} />
      <LineChart
        width={600}
        height={400}
        data={historicalData}
        className="mx-auto p-4 w-[400px] h-[200px] lg:w-full lg:h-auto"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="asOf" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#0284C7" />
      </LineChart>
    </div>
  );
};
export default React.memo(HistoricalChart);
