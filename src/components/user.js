import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../store/actions";
import { Image, Header, Label, Icon } from "semantic-ui-react";
import { editUserProfile } from "../store/actions";

function User({ props }) {
  const { userData, userConversations } = useSelector((state) => state);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorUpdatingUser);
  console.log(props);

  const userProfile = (evt) => {
    dispatch(actionCreator.interactingUser(userData));
    props.history.push(`/profile`);
  };

  if (!userData.photo && !userData.about_me) {
    props.history.push(`/edit/${userData.username}`);
  }

  return (
    <>
      <Image
        src={userData.photo}
        size="small"
        attached="top"
        onClick={userProfile}
      />
      <Header as="h1" attached>
        {userData.username}, {userData.age}
      </Header>

      
      {/* <Label>
        <Icon name='mail' />
            23
         <Label.Detail>View Mail</Label.Detail>
            </Label> */}
    </>
  );
}

export default User;
