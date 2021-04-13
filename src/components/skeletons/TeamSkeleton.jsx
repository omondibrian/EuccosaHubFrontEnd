import React from "react";
import SkeletonElement from "./skeletonElement";
import Shimmer from "./shimmer";

export default function TeamSkeleton() {
  return (
    <div className={`skeleton-wrapper `}>
      <div className="skeleton-team">
        <div>
          <SkeletonElement type="thumbnail " />
        </div>
        <div>
          <SkeletonElement type="thumbnail " />
        </div>
        <div>
          <SkeletonElement type="thumbnail " />
        </div>
        <div>
          <SkeletonElement type="thumbnail " />
        </div>

      </div>
      <Shimmer />
    </div>
  );
}
