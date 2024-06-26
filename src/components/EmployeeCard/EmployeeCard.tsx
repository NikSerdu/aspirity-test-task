import { FC, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Statistics from "./Statistics/Statistics";
import VacationsHistory from "./VacationsHistory/VacationsHistory";

import type { TabsProps } from "antd";
import { ConfigProvider, Tabs } from "antd";

const items: TabsProps["items"] = [
  {
    key: "info",
    label: (
      <span className="font-semibold text-sm uppercase">
        Основная информация
      </span>
    ),
  },
  {
    key: "vacation",
    label: <span className="font-semibold text-sm uppercase">Отпуск</span>,
  },
  {
    key: "equipment",
    label: (
      <span className="font-semibold text-sm uppercase">Оборудование</span>
    ),
  },
];

const EmployeeCard: FC = () => {
  const [value, setValue] = useState("vacation");

  return (
    <>
      <button className="text-text-secondary flex items-center gap-2 ml-4 px-4 py-[10px]">
        <IoIosArrowBack />
        <p className="text-text-secondary ">Вернуться к сотрудникам</p>
      </button>
      <div className="bg-bg-secondary rounded-xl p-10 text-white">
        <div className="flex gap-12 max-[669px]:flex-col max-[669px]:items-center">
          <div className="">
            <img src="avatar_big.png" alt="Аватар работника" />
          </div>
          <div className="">
            <h1 className="font-bold text-5xl leading-[56px]  max-w-[398px] max-[669px]:text-center">
              Иванов
              <br /> Иван Иванович
            </h1>
            <div className="mt-8 text-lg font-normal flex flex-col gap-[18px] max-[669px]:text-center">
              <p className="">Junior UI/UX designer</p>
              <div className=" flex items-center gap-2 max-[669px]:mx-auto">
                <p>Россия, Красноярск</p>
                <div className="w-[6px] h-[6px] bg-text-tetriary rounded-full"></div>
                <span className=" text-text-tetriary">14:03</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[52px] ">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemColor: "#B0B1B6",
                  titleFontSize: 20,
                  itemSelectedColor: "#E1E3E6",
                  inkBarColor: "#E1E3E6",
                  itemHoverColor: "#E1E3E6",
                  itemActiveColor: "#E1E3E6",
                  horizontalItemPadding: "12px 16px",
                },
              },
            }}
          >
            <Tabs
              defaultActiveKey="vacation"
              items={items}
              onChange={setValue}
            />
          </ConfigProvider>
        </div>
      </div>
      {value === "vacation" && (
        <>
          <div className="flex flex-wrap gap-3 max-[900px]:flex-col">
            <div className="min-[900px]:w-1/3 ">
              <Statistics />
            </div>
            <div className="min-[900px]:w-[calc(100%/3*2-12px)]">
              <VacationsHistory />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EmployeeCard;
