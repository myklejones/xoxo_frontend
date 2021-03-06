import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Login from "./components/login";
import UserForm from "./components/userForm";
import { useSelector, useDispatch } from "react-redux";
import UserContainer from "./components/userContainer";
import AllUserContainer from "./components/allUsersContainer.js";
import { Dropdown, Menu, Header, Image, List } from "semantic-ui-react";
import MessageContainer from "./components/MessageContainer";
import Message from "./components/messageTo";
import AUser from "./components/ASinlgleUser";

import * as actionCreator from "./store/actions";
import EditUserForm from "./components/editUserForm";

function App(props) {
  const {
    uLoaded,
    id,
    token,
    userData,
    interactingUser,
  } = useSelector((state) => state);
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [activeItemSel, setActiveItemSel] = useState("home");
  const [deleteProfile, setDeleteProfile] = useState(false);

  const gotToken = () => {
    localStorage.token = token;
    localStorage.loggedInUserId = id;
  };
  console.log(myState);
  const handleClick = (evt, { name }) => {
    if (name === "logout") {
      setActiveItemSel("home");
      localStorage.clear();
      dispatch(actionCreator.logout(name));
    } else {
      dispatch(actionCreator.activeItemSetter(name));
      setActiveItemSel(name);
    }
  };

  const profileHeaderClicked = (evt) => {
    console.log("image was clicke");
    setDeleteProfile(!deleteProfile);
  };

  const header = () => {
    return (
      <>
        <Menu color="blue" attached="top">
          <Header onClick={profileHeaderClicked} as="h1" color="red" >
           XoXo
          </Header>
          {/* <Dropdown>
            <Dropdown.Menu></Dropdown.Menu>
          </Dropdown> */}

          <Menu.Item
            name="home"
            active={activeItemSel === "home"}
            onClick={handleClick}
            icon="home"
            as={Link}
            to={`/${userData.username}`}
          />
          <Menu.Item
            name="messages"
            active={activeItemSel === "messages"}
            onClick={handleClick}
            icon="envelope"
            as={Link}
            to={`/${userData.username}/conversations`}
          />
          <Menu.Item
            name="users"
            active={activeItemSel === "users"}
            onClick={handleClick}
            icon="user"
            as={Link}
            to={`/${userData.username}/users`}
          />

          <Menu.Item
            name="logout"
            active={activeItemSel === "logout"}
            onClick={handleClick}
            icon="logout"
            as={Link}
            to={`/login`}
          />
        </Menu>
      </>
    );
  };

  return (
    <>
      {uLoaded ? header() : null}

      <Switch>
        <Route
          path="/signUp"
          render={(routerProps) => <UserForm {...routerProps} />}
        />
        <Route
          exact
          path={`/profile`}
          render={(routerProps) => <AUser {...routerProps} />}
        />
        <Route
          exact
          path={`/${userData.username}`}
          render={(routerProps) => <UserContainer {...routerProps} />}
        />
        <Route
          exact
          path={`/edit/${userData.username}`}
          render={(routerProps) => <EditUserForm {...routerProps} />}
        />
        <Route
          exact
          path={`/${userData.username}/users`}
          render={(routerProps) => <AllUserContainer {...routerProps} />}
        />
        <Route
          exact
          path={`/${userData.username}/users/${interactingUser.username}`}
          render={(routerProps) => <AUser {...routerProps} />}
        />
        <Route
          exact
          path={`/${userData.username}/conversations`}
          render={(routerProps) => <MessageContainer {...routerProps} />}
        />
        <Route
          exact
          path={`/${userData.username}/conversations/:id`}
          render={(routerProps) => <Message {...routerProps} />}
        />
        <Route
          exact
          path="*"
          render={(routerProps) => <Login {...routerProps} />}
        />
      </Switch>
    </>
  );
}

export default App;
