import { Tooltip } from "antd";
import { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { CiCircleInfo } from "react-icons/ci";
import { chart_data } from "../../../data/chart_data";
import { useChart } from "../../../hooks/useChart";
import LegendItem from "./LegendItem/LegendItem";
import { getChartConfig } from "./chart_config";
const Statistics: FC = () => {
  const { activeId, chartRef, handleClick, setActiveId } = useChart();
  const [config, setConfig] = useState(getChartConfig(chart_data, setActiveId));

  return (
    <div className="p-[30px] bg-bg-secondary rounded-xl text-white max-h-[444px]">
      <div className="flex gap-[9px] items-center text-2xl">
        <h2>Статистика</h2>

        <button>
          <Tooltip
            placement="right"
            title={"1 раб. месяц = 3 дня отпуска"}
            arrow={false}
          >
            <CiCircleInfo />
          </Tooltip>
        </button>
      </div>
      <div className="relative flex justify-center items-center mt-4">
        <div className="h-[160px] ">
          {config && (
            <ReactApexChart
              ref={chartRef}
              options={config.options}
              series={config.series}
              type="donut"
              width={"242"}
            />
          )}
        </div>
        <div className="pt-4 leading-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl text-white">
          <p>
            {chart_data.find((item) => item.label === "Доступно сейчас")
              ?.stat || "0"}{" "}
            <br />
            <span className="text-sm text-text-secondary font-medium">дня</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base mt-4">
        {chart_data.map((item) => {
          return (
            <LegendItem
              onClick={() => handleClick(item.id)}
              color={item.color}
              info={item.info}
              label={item.label}
              key={item.id}
              isActive={activeId === item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
