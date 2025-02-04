import { useEffect, useState } from "react";
import { api } from "../apis/portfolioMockData";
import { Asset, Portfolio } from "../types/financialData";
import React from "react";

const PositionsTable = () => {
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
    acc[asset.id] = asset.name;
    return acc;
  }, {} as Record<string, string>);

  return (
    <div className="overflow-x-auto pt-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-sky-500">
        <thead className="bg-sky-500 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Asset</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Total Value</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.positions.map((pos, index) => (
            <tr
              key={pos.id}
              className={index % 2 === 0 ? "bg-sky-100" : "bg-white"}
            >
              <td className="px-4 py-2 border-b border-sky-300">
                {assetMap[pos.asset]}
              </td>
              <td className="px-4 py-2 border-b border-sky-300">
                {pos.quantity}
              </td>
              <td className="px-4 py-2 border-b border-sky-300">
                ${pos.price.toFixed(2)}
              </td>
              <td className="px-4 py-2 border-b border-sky-300">
                ${(pos.quantity * pos.price).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(PositionsTable);
