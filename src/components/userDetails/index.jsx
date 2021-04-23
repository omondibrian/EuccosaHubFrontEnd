import React  from "react";
import { useSelector } from "react-redux";
import ImageCrop from "../dashboard/imageCrop/ImageCrop"
import { getState } from "../../state/slices/user";

const UserDetails = () => {
  const  {user}  = useSelector(getState);
  const { firstName, lastName, role, avatar, metaData } = user;
  return (
    <div  className="card mb-4 pt-3">
      <ImageCrop  Profile={avatar}/>
      <div className="card-header border-bottom text-center">
        <div className="mb-3 mx-auto">
          <img
            className="rounded-circle"
            src={avatar}
            alt={firstName}
            width="110"
          />
        </div>
        <h4 className="mb-0">{`${firstName}  ${lastName}`}</h4>
        <span className="text-muted d-block mb-2">{role}</span>
        <button   className="btn btn-outlined-info mb-2"
          onClick={() => document.querySelector(".image-crop").classList.remove("d-none")}>
          <i className="material-icons mr-1">edit</i> Edit profile image
        </button>
      </div>
      <div className="list-group list-group-flush">
        <div className="list-group-item p-4">
          {metaData.map((data, index) => {
            return (
              <div key={index}>
                <strong className="text-muted d-block mb-2">
                  {data.metaTitle}
                </strong>
                <span>{data.metaValue}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
