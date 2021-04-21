/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Card, CardBody } from "shards-react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function SmallStats(props) {
  const { label, value, percentage, increase, data } = props;
  const percentageClasses = classNames(
    "stats-small__percentage",
    `stats-small__percentage--${increase ? "increase" : "decrease"}`
  );

  const config = {
    type: "line",
    data,

    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: true,
      responsive: true,
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        custom: false,
      },
      elements: {
        point: {
          radius: 0,
        },
        line: {
          tension: 0.33,
        },
      },
      scales: {
        x: {
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false,
            isplay: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: true,
            drawTicks: false,
          },
        },
        y: {
          gridLines: false,
          scaleLabel: false,
          ticks: {
            display: false,
            isplay: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            drawOnChartArea: true,
            drawTicks: false,
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
  const canvasHeight = 170;
  const canvaRef = useRef();
  return (
    <Card  className="stats-small stats-small--1">
      <CardBody className="p-0 d-flex">
        <div className="d-flex flex-column m-auto">
          <div className="stats-small__data text-center">
            <span className="stats-small__label text-uppercase">{label}</span>
            <h6 className="stats-small__value my-3 count">{value}</h6>
          </div>
          <div className="stats-small__data">
            <span className={percentageClasses}>{percentage}</span>
          </div>
        </div>
        <canvas height={canvasHeight} ref={canvaRef} />
      </CardBody>
    </Card>
  );
}

export default SmallStats;
