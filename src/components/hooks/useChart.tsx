import { useRef, useState } from "react";

export const useChart = () => {
  const chartRef = useRef(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (itemId: number) => {
    if (!chartRef.current) return;
    const event = new Event("mouseup");
    const chartItem = chartRef.current.chartRef.current
      .querySelector(`[data\\:realIndex='${itemId - 1}']`)
      .querySelector(`path`);
    chartItem.dispatchEvent(event);
    setActiveId((prevId) => {
      if (prevId === itemId) return null;
      return itemId;
    });
  };

  return { chartRef, handleClick, activeId, setActiveId };
};
