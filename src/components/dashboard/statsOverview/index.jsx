import React from "react";
import SmallStats from "./charts/SmallStats";
import PieChart from "./charts/Piechart";
import AcountHistory from "./charts/AccountBalance";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../pageTitle";
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
    labels: ["1st years", "2nd years", "3rd years", "4th years", "others"],
    datasets: [
      {
        data: [14, 10, 5, 2, 20],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(0,123,255,0.3)",
        ],
      },
    ],
  };
  const Accountdata = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "Account Balance Overview",
        data: [1922, 1345, 969, 859, 1567, 556],
        borderColor: "#ff6384",
        fill: false,
        stepped: true,
      },
    ],
  };
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          title=" statistical Overview"
          subtitle="DashBoard"
          md="12"
          className="ml-sm-auto mr-sm-auto"
        />
      </Row>
      <Row>
        <Col className="col-xl-4 col-lg-6 col-sm-12">
          <PieChart data={pieData} title="Registered members" />
        </Col>
        <Col className="col-xl-4 col-sm-12">
          <PieChart data={pieData} title="Registered members" />
        </Col>

        <Col className="col-xl-4 col-lg-12 col-sm-12 ">
          <div className="mt-5  mb-5">
            <SmallStats
              label="Test"
              value="3203"
              percentage="39%"
              increase={true}
              data={data}
            />
          </div>
          <div className="mb-5">
            <SmallStats
              label="Test"
              value="3203"
              percentage="39%"
              increase={true}
              data={data}
            />
          </div>
        </Col>
      </Row>
      <div style={{ position: "relative",width:'contentBox' }}>
        <AcountHistory data={Accountdata} />
      </div>
    </Container>
  );
}

export default DashboardStats;
