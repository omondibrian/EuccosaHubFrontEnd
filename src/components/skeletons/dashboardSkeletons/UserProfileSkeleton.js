import React from "react";
import SkeletonElement from "../skeletonElement";
import Shimmer from "../shimmer";
import "../skeleton.css";

function UserProfileSkeleton() {
  return (
    <div className="skeleton-wrapper ">
      
      <SkeletonElement type="avatar  mx-auto" />
      <SkeletonElement type="button pill mx-auto mt-3" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="text" />
      <SkeletonElement type="description" />
      <Shimmer />
    </div>
  );
}

export default UserProfileSkeleton;
