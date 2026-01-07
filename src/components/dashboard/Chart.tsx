import { useState } from "react";
import { Line } from "react-chartjs-2";
// import { getMonthlyReports } from "@/actions/dashboard/chart-data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { TooltipItem } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);
interface MonthlyData {
  date: string;
  amount: number;
}

const MOCK_ITEMS: MonthlyData[] = [
  { date: "2025-01-01", amount: 120 },
  { date: "2025-02-01", amount: 300 },
  { date: "2025-03-01", amount: 180 },
  { date: "2025-04-01", amount: 450 },
  { date: "2025-05-01", amount: 220 },
  { date: "2025-06-01", amount: 600 },
];



export default function Chart() {
  // const [items, setItems] = useState<MonthlyData[]>([]);
  const [items] = useState<MonthlyData[]>(MOCK_ITEMS);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getMonthlyReports();
  //     if (!res.success || !res.data) {
  //       alert("معامله ای در این ماه نشده");
  //       return;
  //     }
  //     setItems(res.data);
  //   };

  //   fetchData();
  // }, []);

  const MONTHS = [
    "حمل",
    "ثور",
    "جوزا",
    "سرطان",
    "اسد",
    "سنبله",
    "میزان",
    "عقرب",
    "قوس",
    "جد",
    "دلو",
    "حوت",
  ];

  // normalize backend data → always 12 months
  const amounts = MONTHS.map((_, index) => {
    const match = items.find((i) => {
      const d = new Date(i.date);
      return d.getMonth() === index;
    });

    return match ? match.amount : 0;
  });

  const data = {
    labels: MONTHS,
    datasets: [
      {
        label: "Amount",
        data: amounts,
        borderColor: "#0070f3",
        backgroundColor: "rgba(0,112,243,0.15)",
        tension: 0.4, // smooth curve (monotone equivalent)
        fill: true,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"line">) => `${ctx.parsed.y} AFN`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
          borderDash: [3, 3],
        },
        ticks: {
          color: "#9ca3af",
        },
      },
    },
  };

  return (
    <div className="h-64 md:h-80 bg-white p-4 rounded-xl shadow">
      <Line data={data} options={options} />
    </div>
  );
}
