import React, { useEffect, useRef } from "react";


import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function AccountHistory({ data }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div>
      <div className="card" >
        <div className="card-body">
          <canvas height={canvasHeight} ref={canvaRef} />
        </div>
      </div>
    </div>
  );
}

export default AccountHistory;
