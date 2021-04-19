import React from "react";
import SkeletonElement from "../skeletonElement";
import Shimmer from "../shimmer";
import "../skeleton.css";

function UserAccountDetailsSkeleton() {
    return (
        <div className="skeleton-wrapper mt-5 pt-5 ">

            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="text  mt-3" />
            <SkeletonElement type="button  mt-3" />

            <Shimmer />
        </div>
    );
}

export default UserAccountDetailsSkeleton;
