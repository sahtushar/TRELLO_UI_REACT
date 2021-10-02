import React, { useEffect, useState } from "react";
import "./model.css";
const Modal = (props) => {
  const { onClose, show, setAppState, appState } = props;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [taskState, setTaskStateDate] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const segregateUsers = () => {
    let users = [];
    appState.map((item) => {
      if (!users.find((user) => item.user === user)) {
        users.push(item.user);
      }
    });

    console.log(users);
    setUsersList(users);
  };

  useEffect(() => {
    segregateUsers();
  }, []);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  if (!show) {
    return null;
  }

  const onSelectState = (e) => {
    setTaskStateDate(e.target.value || "Started");
  };

  const onSelectUser = (e) => {
    setSelectedUser(e.target.value || "");
  };

  const addTask = () => {
    const result = {
      title: title,
      date: date,
      user: selectedUser,
      state: taskState || "Planned"
    };
    const keys = Object.keys(result);

    for (let i = 0; i < keys.length; i++) {
      if (result[keys[i]] === "" || !result[keys[i]]) {
        alert("Fill:" + keys[i]);
        return;
      }
    }
    const updtatedAppState = [...appState];
    updtatedAppState.push(result);
    setAppState(updtatedAppState);
    alert("task added");
    onClose();
  };

  const addDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div class="modal" id="modal">
      <input
        type="text"
        placeholder="Adding the task"
        value={title}
        onChange={onTitleChange}
        style={{ marginBottom: "10px" }}
      />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <input
          type="date"
          onChange={(e) => {
            addDate(e);
          }}
          value={date}
        />
        <div>
          <select onChange={onSelectState} key="select">
            <option value="Planned">Planned</option>
            <option value="Started">Started</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px"
        }}
      >
        <select onChange={onSelectUser} key="select">
          <option value="">Select user</option>;
          {usersList.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>

      <div class="actions">
        <button class="toggle-button" onClick={addTask}>
          Add
        </button>
        <button class="toggle-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
