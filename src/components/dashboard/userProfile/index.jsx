import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../pageTitle";
import UserDetails from "../../userDetails";
import UserAccountDetails from "../../userAccountDetails";
import AvatorImg from "../../../assets/images/avatar.png";

const accDetailsProps = {
  title: "Account Details",
};

const userDetails = {
  userDetails: {
    name: "Brian Omondi",
    avatar: AvatorImg,
    jobTitle: "Vice Chairman",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
  },
};

const UserProfile = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle
        title="User Profile"
        subtitle="Overview"
        md="12"
        className="ml-sm-auto mr-sm-auto"
      />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetails {...userDetails} />
      </Col>
      <Col lg="8">
        <UserAccountDetails {...accDetailsProps} />
      </Col>
    </Row>
  </Container>
);

export default UserProfile;
