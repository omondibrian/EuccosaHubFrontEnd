import React from "react";
import SkeletonElement from "./skeletonElement";
import Shimmer from "./shimmer";

export default function AboutSkeleton() {
  return (
    <div className={`skeleton-wrapper `}>
      <div className="skeleton-about">
        <div >
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div>
          <SkeletonElement type="thumbnail " />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
