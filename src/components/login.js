import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../store/actions";

function Login(props) {
  const [password, setPassword] = useState("");
  const [ausername, setaUsername] = useState("");
  const [tog, setTog] = useState(false);
  const dispatch = useDispatch();
  const {
    token,
    userData,
    username,
    id,
    tLoaded,
    tError,
    uLoaded,
  } = useSelector((state) => state);

  const userInput = (evt) => {
    switch (evt.target.name) {
      case "ausername":
        setaUsername(evt.target.value);
        break;
      case "password":
        setPassword(evt.target.value);
        break;
    }
  };

  const signUpClicked = () => {
    props.history.push("/signUp");
  };

  const loginSubmit = (evt) => {
    evt.preventDefault();
    console.log("login clicked");
    dispatch(actionCreator.gotToken(ausername, password));
  };

  const getUser = (token, id) => {
    dispatch(actionCreator.getUser(token, id));
  };

  const pushUser = () => {
    props.history.push(`/${userData.username}`);
  };

  if (localStorage.token && !tog) {
    setTog(true);
    getUser(localStorage.token, localStorage.loggedInUserId);
  }
  if (tLoaded) {
    getUser(token, id);
  } else if (uLoaded) {
    pushUser();
  }
  useEffect(() => {}, []);

  console.log(token, id, ausername, password);
  return (
    <>
      <div class="ui inverted segment blue">
        <form onSubmit={loginSubmit} class="ui inverted form ">
          <div class="equal width fields">
            <div class="field">
              <label>Username</label>
              <div class="ui fluid input">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={userInput}
                  name="ausername"
                  id="login_username"
                />
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui fluid input">
                <input
                  laceholder="Password"
                  id="login_user_password"
                  type="password"
                  onChange={userInput}
                  name="password"
                  value={password}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <button type="submit" class="ui button ">
            Login
          </button>
        </form>
      </div>
      <button class="ui basic button blue" onClick={signUpClicked}>
        Sign up
      </button>
      {tError.errors ? console.log(tError) : null}
    </>
  );
}

export default Login;
