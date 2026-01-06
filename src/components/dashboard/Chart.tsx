import { useEffect, useState } from "react";
import {Line};
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


export default function Chart() {
   const [items, setItems] = useState<>([]);

  useEffect(() => {
    const fetchData = async () => {
      // const res = await getMonthlyReports();
      // if (!res.success || !res.data) {
      //   return alert("معامله ای در این ماه نشده");
      // }
      // setItems(res.data);
    };

    fetchData();
  }, []);
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

  // items = your fetched data
  // items must contain { date: "2025-11-01", amount: 500 }

  const chartData = MONTHS.map((month, index) => {
    const match = items.find((i) => {
      const d = new Date(i.date);
      return d.getMonth() === index; // 0 = Jan, 11 = Dec
    });

    return {
      month,
      amount: match ? match.amount : 0, // default 0 if missing
    };
  });

  return (
    <div className="w-full h-64 md:h-80 bg-white p-4 rounded-xl shadow">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ left: 40, right: 10 }}>
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#0070f3"
            strokeWidth={3}
          />

          {/* subtle grid */}
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

          {/* X-axis: months */}
          <XAxis dataKey="month" tick={{ fill: "#6b7280" }} />

          {/* Y-axis: show subtle markers */}
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={(value) => ${value}} // or leave empty if you want only lines
            axisLine={false} // removes the main axis line for cleaner look
            tickLine={false} // removes small tick marks
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
            }}
            labelStyle={{ color: "#374151" }}
            formatter={(value) => [${value} AFN, "Amount"]}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
