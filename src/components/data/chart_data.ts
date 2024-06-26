import { ILegendItem } from "../types/legend_item.interface";

export const chart_data: ILegendItem[] = [
  {
    id: 1,
    label: "Доступно сейчас",
    color: "#22c55e",
    stat: 32,
    info: "32 дня",
  },
  {
    id: 2,
    label: "Запланировано",
    color: "#eab308",
    stat: 8,
    info: "8 дней",
  },
  {
    id: 3,
    label: "Использовано/недоступно",
    color: "#ef4444",
    stat: 4,
    info: "4 дня",
  },
];
