import React, { useEffect, useRef } from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function PieChart(props) {
  const { data, title } = props;

  useEffect(() => {
    const config = {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
    const chart = new Chart(canvaRef.current, config);
    return () => {
      chart.destroy();
    };
  }, [data]);
  const canvasHeight = 300;
  const canvaRef = useRef();
  return (
    <div className="card">
      <div className="border-bottom card-header">
        <h6 className="mb-0 text-center text-capitalize">{title}</h6>
      </div>

      <div className="card-body">
        <canvas height={canvasHeight} ref={canvaRef} />
      </div>
    </div>
  );
}

export default PieChart;
