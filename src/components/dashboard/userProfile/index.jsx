import React, { useEffect } from "react";
import PageTitle from "../pageTitle";
import UserDetails from "../userDetails";
import UserAccountDetails from "../userAccountDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile, isLoading } from "../../../state/slices/user";
import { getApplicationState } from "../../../state/slices/Application"
import ProfilePageSkeleton from "../../skeletons/dashboardSkeletons/profilePageSkeleton";
import ErrorText from "../../error";


const UserProfile = () => {
  const dispatch = useDispatch();
  const state = useSelector(isLoading);
  const { application } = useSelector(getApplicationState)
  const id = application.userID
  useEffect(() => {
    dispatch(
      fetchUserProfile({
        id,
      })
    );
  }, [dispatch, id]);
  return <>
    {state.loading && <ProfilePageSkeleton />}
    {state.fetchStatus.code < 400 && !state.loading ?
      <div className="main-content-container px-4 container-fluid" >
        <div className="page-header py-4">
          <PageTitle
            title="User Profile"
            subtitle="Overview"
            className="ml-sm-auto mr-sm-auto col-12"
          />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <UserDetails />
          </div>
          <div className="col-lg-8">
            <UserAccountDetails />
          </div>
        </div>
      </div > : <ErrorText error={state.fetchStatus}/>
    }
  </>

};

export default UserProfile;
