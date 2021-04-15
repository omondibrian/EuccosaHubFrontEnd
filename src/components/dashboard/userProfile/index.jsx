import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../pageTitle";
import UserDetails from "../../userDetails";
import UserAccountDetails from "../../userAccountDetails";


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
        <UserDetails  />
      </Col>
      <Col lg="8">
        <UserAccountDetails  />
      </Col>
    </Row>
  </Container>
);

export default UserProfile;
