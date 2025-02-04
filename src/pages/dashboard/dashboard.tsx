import DonutChart from "../../components/donutChart";
import PositionsTable from "../../components/positionsTable";
import HistoricalChart from "../../components/hostoricalChart";
import {
  PORTFOLIO_BALANCE_CHART_HEADING,
  PORTFOLIO_BALANCE_TABLE_CHART_HEDING,
  PORTFOLIO_HISTORICAL_CHART_HEADONG,
} from "../../constants/text";
import Header from "../../components/header";

export const Dashboard = () => {
  return (
    <main className="w-full lg:h-full bg-neutral-50">
      <Header />
      <section className="dashboard">
        <div className="flex flex-col items-center min-h-[700px] px-2 lg:mx-10 lg:p-10 shadow-l mt-10 bg-white rounded-2xl space-y-20">
          <div className="flex flex-col lg:flex-row space-x-10 m-10">
            <div className="card w-full">
              <h2 className="h-2">{PORTFOLIO_BALANCE_CHART_HEADING}</h2>
              <DonutChart />
            </div>
            <div className="card w-full">
              <h2 className="h-2">{PORTFOLIO_BALANCE_TABLE_CHART_HEDING}</h2>
              <PositionsTable />
            </div>
          </div>
          <div className="flex flex-col space-x-10 m-10">
            <div className="card">
              <h2 className="h-2">{PORTFOLIO_HISTORICAL_CHART_HEADONG}</h2>
              <HistoricalChart />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
