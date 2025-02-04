// import { api } from "../apis/portfolioMockData";

import { api } from "../apis/portfolioMockData";
import { Portfolio } from "../types/financialData";

export const getHistoricalData = async (date?: Date | null) => {
  let asOf;
  if (date) {
    asOf = date ? date.toISOString().split("T")[0] : undefined;
  }
  const portfolioData: Portfolio = await api().getPortfolio(asOf);
  return portfolioData.positions.map((pos) => ({
    asOf: pos.asOf,
    value: Math.floor(pos.quantity * pos.price), // Simulate slight variations
  }));
};
