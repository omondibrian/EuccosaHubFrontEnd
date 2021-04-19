import React, { useEffect, useRef } from "react";
import { Card, CardBody } from "shards-react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function AccountHistory({ data }) {
  const config = {
    type: "line",
    data: data,
    maintainAspectRatio: false,
    options: {
      responsive: true,
      interaction: {
        intersect: false,
        axis: "x",
      },
      scales: {
        y: {
          ticks: {
            suggestedMax: 45,
            callback(tick) {
              if (tick === 0) {
                return tick;
              }
              // Format the amounts using Ks for thousands.
              return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
            },
          },
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
  const canvasHeight = 120;
  const canvaRef = useRef();
  return (
    <div className="container mx-auto">
      <Card className="my-3 mx-3">
        <CardBody>
          <canvas height={canvasHeight} ref={canvaRef} />
        </CardBody>
      </Card>
    </div>
  );
}

export default AccountHistory;
