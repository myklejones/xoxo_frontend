import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./user";
import EditUserForm from "./editUserForm";
import * as actionCreator from "../store/actions";
import AllUsersContainer from "./allUsersContainer.js";
import { Button } from "semantic-ui-react";

function UserContainer(props) {
  const { userData, uLoaded } = useSelector(
    (state) => state
  );
  const [profile, setProfile] = useState(false);
  const [viewUsers, setViewUsers] = useState(false);

  const outlog = () => {
    props.history.push("/login");
  };
 

  if (!uLoaded) {
    outlog();
  }

  const editClicked = () => {
    props.history.push(`/edit/${userData.username}`);
  };
  const viewProfileClicked = () => {
    setProfile(!profile);
  };
 

  return (
    <>
      <User viewSelf={viewProfileClicked} props={props} showAll={profile} />
      <Button color="blue" onClick={editClicked}>
        Edit Profile
      </Button>
    </>
  );
}

export default UserContainer;
