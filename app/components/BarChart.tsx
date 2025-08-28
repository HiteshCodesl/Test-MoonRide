"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function RevenueBarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 22000, 30000, 25000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allows custom height
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Revenue (Bar Chart)",
      },
    },
  }

  return (
    <div className="w-[80vw] max-w-screen-md h-[100px] md:h-[200px] lg:h-[200px] mt-10 flex justify-center mx-auto">
      <Bar data={data} options={options} />
    </div>
  )
}
