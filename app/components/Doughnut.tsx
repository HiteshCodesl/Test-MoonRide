"use client"

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export function TopProductsChart() {
  const data = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "Products",
        data: [55, 31, 14],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",   // green
          "rgba(255, 206, 86, 0.6)",   // yellow
          "rgba(255, 99, 132, 0.6)",   // red
        ],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    cutout: "70%", // makes it look like donut
    plugins: {
      legend: {
        display: false, // we'll make custom legend
      },
    },
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-card p-6 rounded-xl shadow-md max-w-screen-md mx-auto">
      {/* Chart */}
      <div className="w-[200px] h-[200px]">
        <Doughnut data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="mt-6 md:mt-0 md:ml-8 space-y-3 text-sm">
        <h3 className="font-bold text-lg">Top products</h3>
        <p className="text-muted-foreground text-xs">May - June 2021</p>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-teal-400"></span>
          <span className="font-medium">Basic Tees</span>
          <span className="ml-auto text-muted-foreground">55%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="font-medium">Custom Short Pants</span>
          <span className="ml-auto text-muted-foreground">31%</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="font-medium">Super Hoodies</span>
          <span className="ml-auto text-muted-foreground">14%</span>
        </div>
      </div>
    </div>
  )
}
