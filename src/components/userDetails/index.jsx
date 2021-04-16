import React from "react";
import ImageCrop from "../dashboard/imageCrop/ImageCrop"

import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,

} from "shards-react";

const UserDetails = ({ firstName, lastName, role, avatar, metaData }) => (
  <Card small className="mb-4 pt-3">
    <ImageCrop Profile={avatar} />
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={avatar}
          alt={firstName}
          width="110"
        />
      </div>
      <h4 className="mb-0">{firstName + lastName}</h4>
      <span className="text-muted d-block mb-2">{role}</span>
      <Button pill outline size="sm" className="mb-2"
        onClick={() => document.querySelector(".image-crop").classList.remove("d-none")}>
        <i className="material-icons mr-1">edit</i> Edit profile image
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-4">
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
      </ListGroupItem>
    </ListGroup>
  </Card>
);

export default UserDetails;
