import React from 'react'
import SmallStats from "./charts/SmallStats"
import PieChart from "./charts/Piechart"
import AcountHistory from "./charts/AccountBalance"

function DashboardStats() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                backgroundColor: "#f2fbf6",
                borderColor: "#8ae2b7",
                data: [0, 10, 5, 2, 20, 30, 45],
                fill: true,
            },
        ],
    };
    const pieData = {
        labels: ['1st years', '2nd years', '3rd years', '4th years', 'others'],
        datasets: [
            {

                data: [14, 10, 5, 2, 20],
                backgroundColor: [
                    "rgba(0,123,255,0.9)",
                    "rgba(0,123,255,0.5)",
                    "rgba(0,123,255,0.3)"
                ],
            }
        ]
    };
    const Accountdata = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
            {
                label: 'Account Balance Overview',
                data: [1922, 1345, 969, 859, 1567, 556],
                borderColor: "#ff6384",
                fill: false,
                stepped: true,
            }
        ]
    };
    return (
        <>
            <div className="row my-5 mx-3">
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <SmallStats
                        label="Test"
                        value="3203"
                        percentage="39%"
                        increase={true}
                        data={data}
                    />
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <SmallStats
                        label="Test"
                        value="1"
                        percentage="100"
                        increase={false}
                        data={data}
                    />
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <SmallStats
                        label="Test"
                        value="1"
                        percentage="100"
                        increase={true}
                        data={data}
                    />
                </div>
                <div className="col-lg mb-4 col-sm-6 col-md-6">
                    <SmallStats
                        label="Test"
                        value="1"
                        percentage="100"
                        increase={true}
                        data={data}
                    />
                </div>
                <div className="mb-4 col-sm-3 col-md-3">
                    <PieChart data={pieData}
                        title="Registered members"
                    />
                </div>

            </div>
            <AcountHistory data={Accountdata} />
        </>
    )
}

export default DashboardStats
