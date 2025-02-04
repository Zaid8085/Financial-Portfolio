import { Position } from "../types/financialData";
import FINANCIAL_PORTFOLIO_MOCK_DATA from "../mockData/financialMockData.json";
// Simulate a delay to mimic network latency
const simulateDelay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const api = () => {
  return {
    getAssets: async () => {
      await simulateDelay();
      return FINANCIAL_PORTFOLIO_MOCK_DATA.assets;
    },
    getPrices: async (assets?: string[], asOf?: string) => {
      await simulateDelay();
      let prices = FINANCIAL_PORTFOLIO_MOCK_DATA.prices;

      if (assets && assets.length > 0) {
        prices = prices.filter((price) => assets.includes(price.asset));
      }

      if (asOf) {
        prices = prices.filter((price) => price.asOf === asOf);
      }

      return prices;
    },
    getPortfolio: async (asOf?: string) => {
      await simulateDelay();
      const portfolios = { ...FINANCIAL_PORTFOLIO_MOCK_DATA.portfolios };
      let position: Position[] = [...portfolios.positions];
      if (asOf) {
        position = position.filter((pos: Position) =>
          pos.asOf.startsWith(asOf)
        );
        portfolios.positions = [...position];
      }

      return portfolios;
    },
  };
};
