// type AssetType = "Stock" | "Crypto" | "Fiat";

interface BaseType {
  id: string;
}

export interface Asset extends BaseType {
  name: string;
  type: string;
}

export interface Price extends BaseType {
  asOf: string;
  asset: string;
  price: number;
}

export interface Position extends BaseType, Price {
  asOf: string;
  quantity: number;
}

export interface Portfolio extends BaseType {
  // asOf: string; // ISO Date String
  positions: Position[];
}

export interface HistoricalDef {
  asOf: string;
  value: number;
}
export interface FinancialPortfolioDef {
  assets: Asset[];
  prices: Price[];
  portfolios: Portfolio;
}
