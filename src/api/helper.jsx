import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function GetChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: data.map((item) => `${item.month.slice(0, 3)}, ${item.year}`),
        datasets: [
          {
            data: data.map((item) => item.systolicValue),
            borderColor: "#C26EB4",
            tension: 0.4,

            pointRadius: 6,
            pointBackgroundColor: "#E66FD2",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
          },
          {
            data: data.map((item) => item.diastolicValue),
            borderColor: "#7E6CAB",
            tension: 0.4,

            pointRadius: 6,
            pointBackgroundColor: "#8C6FE6",
            pointBorderColor: "#fff",
            pointBorderWidth: 1,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { min: 60, max: 180 },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}
