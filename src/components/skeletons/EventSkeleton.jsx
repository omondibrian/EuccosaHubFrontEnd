import React from "react";
import SkeletonElement from "./skeletonElement";
import Shimmer from "./shimmer";

export default function EventSkeleton() {
  return (
    <div className={`skeleton-wrapper `}>
      <div className="skeleton-events">
        <div>
          <SkeletonElement type="thumbnail" />
        </div>

        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
