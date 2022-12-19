import React, { useState,useEffect} from "react";
import { Chart } from "primereact/chart";

function ChartMap({ bg, value }) {
  const [chartData,setChartData] = useState();

  //To Set the onchange data
  useEffect(()=>{
   setChartData({
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [bg, "#C4C7CF"],
      },
    ],
  })
  },[bg, value])
  return (
    <>
      <Chart
        type="doughnut"
        data={chartData}
      />
    </>
  );
}

export default ChartMap;
