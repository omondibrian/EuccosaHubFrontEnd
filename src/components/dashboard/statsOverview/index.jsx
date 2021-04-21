import React from "react";
import SmallStats from "./charts/SmallStats";
import PieChart from "./charts/Piechart";
import AcountHistory from "./charts/AccountBalance";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../pageTitle";
import Draft from "./Draft";
import Discussions from "./Disscussion";
import EventPlan from "./EventPlan";
import avator1 from "../../../assets/images/avatars/1.jpg";
import avator2 from "../../../assets/images/avatars/2.jpg";
import avator3 from "../../../assets/images/avatars/3.jpg";

const dicccussions = {
  title: "Discussions",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: avator1,
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "Well, the way they make shows is, they make one show ...",
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: avator2,
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "After the avalanche, it took us a week to climb out. Now...",
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: avator3,
        name: "John Doe",
        url: "#",
      },
      post: {
        title: "Hello World!",
        url: "#",
      },
      body: "My money's in that office, right? If she start giving me...",
    },
  ],
};

const TopReferrals = {
  title: "Top Referrals",
  referralData: [
    {
      title: "GitHub",
      value: "19,291",
    },
    {
      title: "Stack Overflow",
      value: "11,201",
    },
    {
      title: "Hacker News",
      value: "9,291",
    },
    {
      title: "Reddit",
      value: "8,281",
    },
    {
      title: "The Next Web",
      value: "7,128",
    },
    {
      title: "Tech Crunch",
      value: "6,218",
    },
    {
      title: "YouTube",
      value: "1,218",
    },
    {
      title: "Adobe",
      value: "1,171",
    },
  ],
};

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
      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <AcountHistory data={Accountdata} />
        </Col>
      </Row>
      <Row>
        <Col lg="4" md="6" sm="12" className="mb-4">
          <Draft />
        </Col>
        <Col lg="5" md="12" sm="12" className="mb-4">
          <Discussions
            title={dicccussions.title}
            discussions={dicccussions.discussions}
          />
        </Col>
        <Col lg="3" md="12" sm="12" className="mb-4">
          <EventPlan
            title={TopReferrals.title}
            referralData={TopReferrals.referralData}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardStats;
