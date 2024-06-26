import { FC } from "react";
import { ITableItem } from "../../../../types/table_item.interface";
import TableItem from "./TableItem/TableItem";

type TypeProps = {
  data: ITableItem[];
};

const Table: FC<TypeProps> = ({ data }) => {
  return (
    <>
      <div className="flex justify-between text-text-secondary px-2 py-4 max-[630px]:hidden">
        <div className="w-[41%] max-[1200px]:w-[20%]">Тип</div>
        <div className="w-[41%] max-[1200px]:w-[52%]">Даты отпуска</div>
        <div className="w-[28%]">Количество дней</div>
      </div>
      <div className=" ">
        {data.map((item) => {
          return <TableItem table_item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Table;
