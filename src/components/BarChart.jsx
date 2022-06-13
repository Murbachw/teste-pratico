import React from 'react'
import { Chart } from "react-google-charts";


export const data = [
        ["City", "2010 Population", "2000 Population"],
        ["South Korea", 8175000, 8008000],
        ["Canada", 3792000, 3694000],
        ["United Kingdom", 2695000, 2896000],
        ["Netherlands", 2099000, 1953000],
        ["Italy", 1526000, 1517000],
        ["France", 1526000, 1517000],
        ["Japan", 1526000, 1517000],
        ["United States", 1526000, 1517000],
        ["China", 1526000, 1517000],
        ["Germany", 1526000, 1517000],
      ];
      
      export const options = {
        chart: {
          title: "Barras",
        },
        bars: "horizontal",
        axes: {
          y: {
            0: { side: "right" },
          },
        },
      };
      
export function BarChart() {
        return (
          <Chart
            chartType="Bar"
            width="98%"
            height="400px"
            data={data}
            options={options}
          />
        );
      } 

export default BarChart
