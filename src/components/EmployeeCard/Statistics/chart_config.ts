import { ILegendItem } from "../../../types/legend_item.interface";

export const getChartConfig = (data: ILegendItem[], setActiveId: any) => {
  return {
    series: data.map((item) => item.stat),
    options: {
      labels: data.map((item) => item.id),
      colors: data.map((item) => item.color),
      chart: {
        id: "vacation_chart",
        events: {
          dataPointSelection: (event, chartContext, config) => {
            setActiveId((prevId) => {
              const newId =
                chartContext.w.globals.labels[config.dataPointIndex];
              if (prevId === newId) return null;
              return chartContext.w.globals.labels[config.dataPointIndex];
            });
          },
        },
      },

      legend: {
        show: false,
      },
      stroke: {
        show: false,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            background: "transparent",
          },
          expandOnClick: true,
        },
      },
    },
  };
};
