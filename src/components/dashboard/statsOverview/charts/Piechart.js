import React, { useEffect, useRef } from "react";
import { Card, CardBody } from "shards-react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function PieChart(props) {
  const { data, title } = props;
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

  useEffect(() => {
    const chart = new Chart(canvaRef.current, config);
    return () => {
      chart.destroy();
    };
  }, [config]);
  const canvasHeight = 300;
  const canvaRef = useRef();
  return (
    <Card>
      <div className="border-bottom card-header">
        <h6 className="mb-0 text-center text-capitalize">{title}</h6>
      </div>

      <CardBody>
        <canvas height={canvasHeight} ref={canvaRef} />
      </CardBody>
    </Card>
  );
}

export default PieChart;
