import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
    const dataPointValues= props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalMaximum =Math.max(...dataPointValues); //spread operator to pull datas
    //because the max function requires comma ',' separated arguments like 1,2,3,4
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
