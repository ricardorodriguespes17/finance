export interface StockType {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  highTime: number;
  low: number;
  lowTime: number;
  delayedPrice: number;
  delayedPriceTime: number;
  latestPrice: number;
  latestTime: string;
  latestUpdate: number;
  change: number;
  changePercent: number;
  volume: number;
  avgTotalVolume: number;
}

export interface StockActionType {
  type: string;
  payload: StockType;
}

export interface StockStateType {
  favorities: StockType[];
  recents: StockType[];
  stockInChart: StockType | undefined;
}

export interface ChartType {
  average: number;
  close: number;
  date: string;
  high: number;
  label: string;
  low: number;
  minutes: string;
  open: number;
}

export interface ProfileBarStateType {
  isShowBar: boolean;
}

export interface ProfileBarActionType {
  type: string;
  payload: undefined;
}

export interface StoreType {
  profileBar: ProfileBarStateType;
  stock: StockStateType;
}
