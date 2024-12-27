
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  elements: {
    line: {
      tension: 0.3,
    },
  },
};

const labels = ["5k", "10k", "15k", "20k", "25k"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      borderColor: "#333333",
      backgroundColor: "rgba(51, 51, 51, 0.2)",
      fill: "start",
    },
  ],
};

export function AreaChartComponent() {
  return (
    <div className="">
      <div className="min-h-[200px] flex items-center px-2 pt-0 w-full h-full bg-customBgChart rounded-[10px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
