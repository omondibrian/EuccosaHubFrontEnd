import React from "react";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../navBar";
import MainSidebar from "../SideBar";

const navProps = {
  stickyTop: true,
};

const sidebarProps = {
  hideLogoText: false,
};
const DefaultLayout = ({ children, noNavbar }) => (
  <Container fluid>
    <Row>
      <MainSidebar {...sidebarProps} />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <MainNavbar {...navProps} />}
        {children}
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;
