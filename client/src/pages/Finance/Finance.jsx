import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { PIE_CHART_COLORS, FINANCE_GROUP } from "../../utils/constant";
import AllFinance from "./AllFinance";
import Wrapper from "../../assets/Wrappers/Finance";

ChartJS.register(ArcElement, Tooltip, Legend);

const Finance = () => {
  const pieData = {
    labels: FINANCE_GROUP,
    datasets: [
      {
        data: [5, 8, 10, 5, 4],
        backgroundColor: PIE_CHART_COLORS,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
    },
  };

  return (
    <Wrapper>
      <div id="pie-chart">
        <Pie data={pieData} options={options} />
      </div>
      <AllFinance />
    </Wrapper>
  );
};
export default Finance;
