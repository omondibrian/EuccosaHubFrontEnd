import React, { useContext } from "react";
import { UserContext } from "../../state/context/userContext";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
} from "shards-react";

const UserDetails = () => {
  const { state } = useContext(UserContext);
  const { firstName, lastName, role, avatar, metaData } = state;
  return (
    <Card small className="mb-4 pt-3">
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
        <Button pill outline size="sm" className="mb-2">
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
};

export default UserDetails;
