import { FC, HTMLAttributes } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ITableItem } from "../../../../types/table_item.interface";

type TypeProps = {
  table_item: ITableItem;
} & HTMLAttributes<HTMLDivElement>;

const TableItem: FC<TypeProps> = ({ table_item, ...rest }) => {
  const { count_days, from, to, type } = table_item;
  return (
    <>
      <div
        className=" h-[56px] text-white flex justify-between px-2 py-4 border-t border-border-primary max-[630px]:hidden"
        {...rest}
      >
        <div className="w-[41%] max-[1200px]:w-[20%]">{type}</div>
        <div className="w-[41%] max-[1200px]:w-[52%] flex gap-2 items-center">
          {from}{" "}
          <FaArrowRightLong
            color={type === "Отпуск" || type === "Больничный" ? "green" : "red"}
            size={24}
          />{" "}
          {to}
        </div>
        <div className="w-[28%]">{count_days}</div>
      </div>
      <div className="min-[630px]:hidden px-2 py-4 border-t border-border-primary flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary">Тип</p>
          <p>{type}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-text-secondary">Даты отпуска</p>
          <div className="flex gap-2 items-center">
            {from}{" "}
            <FaArrowRightLong
              color={
                type === "Отпуск" || type === "Больничный" ? "green" : "red"
              }
              size={24}
            />{" "}
            {to}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-secondary">Количество дней</p>
          <div className="">{count_days}</div>
        </div>
      </div>
    </>
  );
};

export default TableItem;
