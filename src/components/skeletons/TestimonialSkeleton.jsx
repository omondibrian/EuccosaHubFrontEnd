import React from "react";
import SkeletonElement from "./skeletonElement";
import Shimmer from "./shimmer";

export default function TestimonialSkeleton() {
  return (
    <div className={`skeleton-wrapper `}>
      <div className="skeleton-testimonials">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="avator" />
      </div>
      <Shimmer />
    </div>
  );
}
