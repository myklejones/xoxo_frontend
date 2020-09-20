import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./user";
import EditUserForm from "./editUserForm";
import * as actionCreator from "../store/actions";
import AllUsersContainer from "./allUsersContainer.js";
import { Button } from "semantic-ui-react";

function UserContainer(props) {


  const { userData, uLoaded, allUsers } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(false);
  const [viewUsers, setViewUsers] = useState(false);

  const outlog = () => {
    props.history.push("/login");
  };
 

  if (!uLoaded) {
    outlog();
  }

 
  const viewProfileClicked = () => {
    setProfile(!profile);
  };

  const viewProfile = () =>{
    const filteredUser = allUsers.find((idNum) => {
      return idNum.id === userData.id;
    });
    dispatch(actionCreator.interactingUser(filteredUser));

    props.history.push("/profile")
  }
 


  return (
    <>
      <User viewSelf={viewProfileClicked} props={props} showAll={profile} />
      <Button color="blue" onClick={viewProfile}>
        View Profile
      </Button>
    </>
  );
}

export default UserContainer;
