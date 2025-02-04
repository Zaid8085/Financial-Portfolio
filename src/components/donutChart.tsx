import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { api } from "../apis/portfolioMockData";
import { useEffect, useState } from "react";
import { Asset, Portfolio } from "../types/financialData";
import { CHART_COLORS } from "../constants/chartColors";
import React from "react";

const DonutChart = () => {
  const [viewMode, setViewMode] = useState("asset");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [portfolio, setPortfolio] = useState<Portfolio>();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      const assetsData: Asset[] = await api().getAssets();
      const portfolioData: Portfolio = await api().getPortfolio();
      setAssets(assetsData);
      setPortfolio(portfolioData);
    };
    fetchPortfolioData();
  }, []);

  if (!portfolio) return <div>Loading...</div>;

  const assetMap = assets.reduce((acc, asset) => {
    acc[asset.id] = asset;
    return acc;
  }, {} as Record<string, Asset>);

  let data;
  if (viewMode === "asset") {
    data = portfolio.positions.map((pos) => ({
      name: assetMap[pos.asset]?.name,
      value: pos.quantity * pos.price,
    }));
  } else {
    const classMap: Record<string, number> = {};
    portfolio.positions.forEach((pos) => {
      const assetType = assetMap[pos.asset]?.type;
      classMap[assetType] =
        (classMap[assetType] || 0) + pos.quantity * pos.price;
    });
    data = Object.entries(classMap).map(([key, value]) => ({
      name: key,
      value,
    }));
  }

  return (
    <div className="pt-4">
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 cursor-pointer rounded-md ${
            viewMode === "asset" ? "bg-sky-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setViewMode("asset")}
        >
          By Asset
        </button>
        <button
          className={`px-4 py-2 cursor-pointer rounded-md ${
            viewMode === "class" ? "bg-sky-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setViewMode("class")}
        >
          By Asset Class
        </button>
      </div>
      <PieChart width={400} height={400} className="mx-auto">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={CHART_COLORS[index % 4]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default React.memo(DonutChart);
