import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Example = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const loadChart = async () => {
      const { Chart, registerables } = await import("chart.js");
      Chart.register(...registerables);

      const ctx = document.getElementById("myChart").getContext("2d");
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["10k", "40k", "30k", "40k", "50k"],
          datasets: [
            {
              data: [66, 144, 146, 116, 107],
              label: "Applied",
              backgroundColor: "#482B48",
              borderWidth: 2,
              borderRadius: 6,
            },
            {
              data: [40, 100, 144, 170, 163],
              label: "Accepted",
              backgroundColor: "#FFB75A",
              borderWidth: 2,
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    };

    loadChart();
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="min-h-[200px] flex items-center px-2 pt-0 w-full h-full bg-customBgChart rounded-[10px]">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Example), { ssr: false });
