import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Image, Header, List } from "semantic-ui-react";
import * as actionCreator from "../store/actions";

function MessageContainer(props) {
  const {
    userData,
    userConversations,
    allUsers,
    interactingUser,
    interactingConvo,
  } = useSelector((state) => state);
  const [searchinput, setSearchinput] = useState("");
  const [right, setRight] = useState(false);
  const dispatch = useDispatch();
  const c = () => {
    dispatch(actionCreator.convos(localStorage.token));
  };


  const imageClicked = (evt) => {
    let selectedId = parseInt(evt.target.id);
    const userToBeSet = allUsers.find((u) => u.id === selectedId);

    dispatch(actionCreator.interactingUser(userToBeSet));
    props.history.push(`/${userData.username}/users/${userToBeSet.username}`);
  };

  const messageClicked = (evt) => {
    let selectedId = parseInt(evt.target.id);
    const userToBeSet = allUsers.find((u) => u.id === selectedId);
    dispatch(actionCreator.interactingUser(userToBeSet));
    let selectedConvoId = parseInt(evt.target.parentElement.id);
    const convoToBeSet = userConversations.find(
      (c) => parseInt(c.id) === selectedConvoId
    );
    dispatch(actionCreator.interactingConvo(convoToBeSet));
    props.history.push(`/${userData.username}/conversations/${userToBeSet.id}`);
  };
  const searchInput = (evt) => {
    setSearchinput(evt.target.value);
  };

  const rightClick = (evt) => {
    evt.preventDefault();
    let selectedId = parseInt(evt.target.id);
    const userToBeSet = allUsers.find((u) => u.id === selectedId);
    dispatch(actionCreator.interactingUser(userToBeSet));

    let selectedConvoId = parseInt(evt.target.parentElement.id);
    const convoToBeSet = userConversations.find(
      (c) => parseInt(c.id) === selectedConvoId
    );
    dispatch(actionCreator.interactingConvo(convoToBeSet));

    setRight(!right);
  };
  const convoRightClicked = (evt) => {
    switch (evt.target.name) {
      case "yes":
        console.log("yes");
        dispatch(
          actionCreator.deleteConversation(
            interactingConvo.id,
            localStorage.token
          )
        );
        break;
      case "no":
        setRight(false);
        break;
    }
  };

  return (
    <>
      <Input
        onChange={searchInput}
        icon="search"
        iconPosition="left"
        placeholder="Search..."
      />

      <List>
        {userConversations.map((c) => {
          if (c.attributes.sender_id === userData.id) {
            let a_user = allUsers.find((u) => {
              return u.id === c.attributes.recipient_id;
            });
            let lastNum = null;
            if (c.attributes.messages[0]) {
              lastNum = c.attributes.messages.length - 1;
            }
            if (searchinput.length === 0) {
              return (
                <List.Item id={a_user.id}>
                  <Image
                    id={a_user.id}
                    onClick={imageClicked}
                    size="mini"
                    circular
                    src={a_user.photo}
                  />
                  <List.Content id={c.id} onContextMenu={rightClick}>
                    <List.Header onClick={messageClicked} id={a_user.id}>
                      {a_user.username}
                    </List.Header>
                    <List.Description id={a_user.id} onClick={messageClicked}>
                      {c.attributes.messages[lastNum]
                        ? c.attributes.messages[lastNum].body
                        : null}{" "}
                    </List.Description>
                  </List.Content>
                  {right && a_user.id === interactingUser.id ? (
                    <Header>
                      Delete this conversation ?
                      <Button onClick={convoRightClicked} name="yes">
                        Yes
                      </Button>
                      <Button onClick={convoRightClicked} name="no">
                        No
                      </Button>
                    </Header>
                  ) : null}
                </List.Item>
              );
            } else if (
              a_user.username
                .toUpperCase()
                .startsWith(searchinput.toUpperCase())
            ) {
              return (
                <List.Item id={a_user.id}>
                  <Image
                    id={a_user.id}
                    onClick={imageClicked}
                    size="mini"
                    circular
                    src={a_user.photo}
                  />
                  <List.Content id={c.id} onContextMenu={rightClick}>
                    <List.Header onClick={messageClicked} id={a_user.id}>
                      {a_user.username}
                    </List.Header>
                    <List.Description id={a_user.id} onClick={messageClicked}>
                      {c.attributes.messages[lastNum]
                        ? c.attributes.messages[lastNum].body
                        : null}
                    </List.Description>
                  </List.Content>
                  {right && a_user.id === interactingUser.id ? (
                    <Header>
                      Delete this conversation ?
                      <Button onClick={convoRightClicked} name="yes">
                        Yes
                      </Button>
                      <Button onClick={convoRightClicked} name="no">
                        No
                      </Button>
                    </Header>
                  ) : null}
                </List.Item>
              );
            }
          } else if (c.attributes.recipient_id === userData.id) {
            let a_user = allUsers.find((u) => {
              return u.id === c.attributes.sender_id;
            });
            let lastNum = null;
            if (c.attributes.messages[0]) {
              lastNum = c.attributes.messages.length - 1;
            }
            if (searchinput.length === 0) {
              return (
                <List.Item id={a_user.id}>
                  <Image
                    id={a_user.id}
                    onClick={imageClicked}
                    size="mini"
                    circular
                    src={a_user.photo}
                  />
                  <List.Content id={c.id} onContextMenu={rightClick}>
                    <List.Header onClick={messageClicked} id={a_user.id}>
                      {a_user.username}
                    </List.Header>
                    <List.Description id={a_user.id} onClick={messageClicked}>
                      {c.attributes.messages[lastNum]
                        ? c.attributes.messages[lastNum].body
                        : null}
                    </List.Description>
                    {right && a_user.id === interactingUser.id ? (
                      <Header>
                        Delete this conversation ?
                        <Button onClick={convoRightClicked} name="yes">
                          Yes
                        </Button>
                        <Button onClick={convoRightClicked} name="no">
                          No
                        </Button>
                      </Header>
                    ) : null}
                  </List.Content>
                </List.Item>
              );
            } else if (
              a_user.username
                .toUpperCase()
                .startsWith(searchinput.toUpperCase())
            ) {
              return (
                <List.Item id={a_user.id}>
                  <Image
                    id={a_user.id}
                    onClick={imageClicked}
                    size="mini"
                    circular
                    src={a_user.photo}
                  />
                  <List.Content id={c.id} onContextMenu={rightClick}>
                    <List.Header onClick={messageClicked} id={a_user.id}>
                      {a_user.username}
                    </List.Header>
                    <List.Description onClick={messageClicked} id={a_user.id}>
                      {c.attributes.messages[0]
                        ? c.attributes.messages[lastNum].body
                        : null}
                    </List.Description>
                    {right && a_user.id === interactingUser.id ? (
                      <Header>
                        Delete this conversation ?
                        <Button onClick={convoRightClicked} name="yes">
                          Yes
                        </Button>
                        <Button onClick={convoRightClicked} name="no">
                          No
                        </Button>
                      </Header>
                    ) : null}
                  </List.Content>
                </List.Item>
              );
            }
          }
        })}
      </List>
    </>
  );
}

export default MessageContainer;
