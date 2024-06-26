export interface ITableItem {
  id: number;
  type: "Отпуск" | "Отгул" | "Больничный";
  count_days: number;
  from: string;
  to: string;
}
