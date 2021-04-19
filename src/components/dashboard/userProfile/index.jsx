import React, { useEffect } from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../pageTitle";
import UserDetails from "../../userDetails";
import UserAccountDetails from "../../userAccountDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, isLoading } from "../../../state/slices/user";
import ProfilePageSkeleton from "../../skeletons/dashboardSkeletons/profilePageSkeleton";
// import uUUserProfileSkeleto

const UserProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector(isLoading);

  useEffect(() => {
    const id = localStorage.getItem('ID')
    dispatch(
      fetchUserProfile({
        id,
      })
    );
  }, [dispatch]);

  return  state.loading ? (
    <ProfilePageSkeleton />
  ) : (
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
          <UserDetails />
        </Col>
        <Col lg="8">
          <UserAccountDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
