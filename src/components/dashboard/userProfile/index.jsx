import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../pageTitle";
import UserDetails from "../../userDetails";
import UserAccountDetails from "../../userAccountDetails";
import AvatorImg from "../../../assets/images/avatar.png";
const today = new Date();

const userDetails = {
  title: "Account Details",
  firstName: "Brian",
  lastName: "Omondi",
  Email: "omondibrian392@gmail.com",
  Address: {
    city: "Malindi",
    street: "Jiwe Leupe",
    country: "Kenya",
  },
  role: "Vice chairman",
  testimonial: "test testimonial",
  avatar: AvatorImg,
  phoneNumber:"+2544567890",
  startDate:today,
  completionDate:today,
  metaData: [
    {
      metaTitle: "Address",
      metaValue: `Jiwe Leupe Malindi,  Kenya `,
    },
    {
      metaTitle: "Email",
      metaValue: "omondibrian392@gmail.com ",
    },
  ],
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
        <UserAccountDetails {...userDetails} />
      </Col>
    </Row>
  </Container>
);

export default UserProfile;
