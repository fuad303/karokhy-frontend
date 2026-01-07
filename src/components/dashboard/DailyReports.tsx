import { useEffect, useState } from "react";

export default function DailyReports() {
  const [data, setData] = useState({
    totalPurchases: 0,
    totalSales: 0,
    enteredSave: 0,
    spentSave: 0,
    profit: 0,
  });

  const [display, setDisplay] = useState({
    totalPurchases: 0,
    totalSales: 0,
    enteredSave: 0,
    spentSave: 0,
    profit: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      // const result = await getDailyTransactions();
      // setData(result);
    };
    fetchData();
  }, []);

  // Animate numbers from 0 → target
  useEffect(() => {
    const keys = Object.keys(data) as (keyof typeof data)[];
    let start: number | null = null;
    const duration = 1000; // animation duration in ms

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      const newDisplay = {} as typeof display;
      keys.forEach((key) => {
        newDisplay[key] = Math.floor(data[key] * progress);
      });
      setDisplay(newDisplay);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [data]);

  return (
    <div className="w-full p-4 md:p-6 bg-white rounded-xl shadow flex flex-col md:flex-row gap-4">
      <div className="flex-1 bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-gray-500">خرید ها</p>
        <p className="text-2xl font-bold">{display.totalPurchases}</p>
      </div>
      <div className="flex-1 bg-green-50 p-4 rounded-lg text-center">
        <p className="text-gray-500">فروشات</p>
        <p className="text-2xl font-bold">{display.totalSales}</p>
      </div>
      <div className="flex-1 bg-purple-50 p-4 rounded-lg text-center">
        <p className="text-gray-500">پول فروش</p>
        <p className="text-2xl font-bold">{display.enteredSave} AFN</p>
      </div>
      <div className="flex-1 bg-red-50 p-4 rounded-lg text-center">
        <p className="text-gray-500">پول خرید و مصارف</p>
        <p className="text-2xl font-bold">{display.spentSave} AFN</p>
      </div>
    </div>
  );
}
