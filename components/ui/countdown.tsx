"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function Countdown({
  initialMinutes = 10,
  initialSeconds = 0,
}: CountdownProps) {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-blue-500 text-white rounded-2xl shadow-lg p-6 w-full mb-10">
      <h2 className="text-2xl font-bold mb-3">🔥 Hurry up!</h2>
      <p className="text-center text-lg mb-5">
        Only <span className="font-semibold">10 minutes</span> left to grab
        extra bonuses with our promo code 🚀
      </p>
      <div className="flex gap-3 text-4xl font-mono font-bold">
        <div className="bg-black/20 rounded-lg px-4 py-2">
          {minutes.toString().padStart(2, "0")}
        </div>
        <span>:</span>
        <div className="bg-black/20 rounded-lg px-4 py-2">
          {seconds.toString().padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
