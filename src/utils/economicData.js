// Economic data for Pakistan (simulated based on recent trends)

export const economicData = {
  // GDP Growth Rate (%)
  gdpGrowth: [
    { year: "2019-20", value: -0.5 },
    { year: "2020-21", value: 5.8 },
    { year: "2021-22", value: 6.0 },
    { year: "2022-23", value: 0.3 },
    { year: "2023-24", value: 2.5 },
    { year: "2024-25", value: 3.5 },
  ],

  // Inflation Rate (CPI %)
  inflation: [
    { month: "Jan", value: 24.5 },
    { month: "Feb", value: 23.1 },
    { month: "Mar", value: 22.8 },
    { month: "Apr", value: 21.5 },
    { month: "May", value: 20.2 },
    { month: "Jun", value: 19.8 },
    { month: "Jul", value: 18.9 },
    { month: "Aug", value: 17.5 },
    { month: "Sep", value: 16.2 },
    { month: "Oct", value: 15.8 },
    { month: "Nov", value: 14.9 },
    { month: "Dec", value: 13.7 },
  ],

  // Fiscal Deficit (% of GDP)
  fiscalDeficit: [
    { year: "2019-20", value: 8.1 },
    { year: "2020-21", value: 7.2 },
    { year: "2021-22", value: 6.5 },
    { year: "2022-23", value: 7.0 },
    { year: "2023-24", value: 6.8 },
    { year: "2024-25", value: 6.2 },
  ],

  // Foreign Exchange Reserves (Billion USD)
  foreignReserves: [
    { month: "Jan", value: 8.2 },
    { month: "Feb", value: 8.5 },
    { month: "Mar", value: 8.8 },
    { month: "Apr", value: 9.1 },
    { month: "May", value: 9.4 },
    { month: "Jun", value: 9.8 },
    { month: "Jul", value: 10.2 },
    { month: "Aug", value: 10.5 },
    { month: "Sep", value: 10.9 },
    { month: "Oct", value: 11.2 },
    { month: "Nov", value: 11.5 },
    { month: "Dec", value: 12.0 },
  ],

  // Exports and Imports (Billion USD)
  trade: [
    { quarter: "Q1 2023", exports: 7.2, imports: 12.5 },
    { quarter: "Q2 2023", exports: 7.5, imports: 13.2 },
    { quarter: "Q3 2023", exports: 7.8, imports: 13.8 },
    { quarter: "Q4 2023", exports: 8.1, imports: 14.2 },
    { quarter: "Q1 2024", exports: 8.4, imports: 14.5 },
    { quarter: "Q2 2024", exports: 8.7, imports: 14.8 },
  ],

  // Remittances (Billion USD)
  remittances: [
    { month: "Jan", value: 2.1 },
    { month: "Feb", value: 2.2 },
    { month: "Mar", value: 2.3 },
    { month: "Apr", value: 2.4 },
    { month: "May", value: 2.5 },
    { month: "Jun", value: 2.6 },
    { month: "Jul", value: 2.7 },
    { month: "Aug", value: 2.8 },
    { month: "Sep", value: 2.9 },
    { month: "Oct", value: 3.0 },
    { month: "Nov", value: 3.1 },
    { month: "Dec", value: 3.2 },
  ],

  // Sectoral Growth (%)
  sectoralGrowth: [
    { sector: "Agriculture", value: 3.2 },
    { sector: "Industry", value: 2.8 },
    { sector: "Services", value: 4.1 },
    { sector: "Manufacturing", value: 2.5 },
    { sector: "Construction", value: 3.5 },
    { sector: "IT", value: 7.8 },
  ],

  // Public Debt (% of GDP)
  publicDebt: [
    { year: "2019", value: 84.5 },
    { year: "2020", value: 86.2 },
    { year: "2021", value: 85.8 },
    { year: "2022", value: 87.3 },
    { year: "2023", value: 88.5 },
    { year: "2024", value: 87.8 },
  ],

  // Exchange Rate (PKR/USD)
  exchangeRate: [
    { month: "Jan", value: 285.5 },
    { month: "Feb", value: 287.2 },
    { month: "Mar", value: 286.8 },
    { month: "Apr", value: 288.5 },
    { month: "May", value: 287.9 },
    { month: "Jun", value: 289.2 },
    { month: "Jul", value: 290.5 },
    { month: "Aug", value: 291.8 },
    { month: "Sep", value: 293.2 },
    { month: "Oct", value: 294.5 },
    { month: "Nov", value: 295.8 },
    { month: "Dec", value: 297.2 },
  ],

  // KPI Cards Data
  kpiData: {
    gdpGrowth: 3.5,
    inflation: 13.7,
    reserves: 12.0,
    remittances: 3.2,
    exports: 8.7,
    imports: 14.8,
    fiscalDeficit: 6.2,
    exchangeRate: 297.2,
    population: 241.5,
    unemployment: 6.5,
  },
};
