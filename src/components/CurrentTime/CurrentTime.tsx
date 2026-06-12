import { useEffect, useState } from "react";

const formatTime = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${month}/${day}/${year} - ${hours}:${minutes}:${seconds}`;
};

export const CurrentTime = () => {
  const [time, setTime] = useState<string>(() => formatTime(new Date()));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  return <span className="text-xs font-bold cursor-pointer">{time}</span>;
};
