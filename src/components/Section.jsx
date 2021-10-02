import React, { useState } from "react";
import "./../styles.css";
import Card from "./card";
import Modal from "./Modal";
const Section = ({ state, appState, setAppState }) => {
  const addTask = () => {
    showModal();
  };

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  return (
    <div className="sectionWrapper">
      <div style={{ marginBottom: "24px" }}>
        <span style={{ fontSize: "24px" }}>{state}</span>
      </div>
      {appState.map((item) => {
        if (item.state === state)
          return (
            <>
              <Card data={item} />
              {/* <Modal onClose={showModal} show={show}>
                <Card data={item} />
              </Modal> */}
            </>
          );
      })}
      <div
        className="addtask"
        onClick={() => {
          addTask();
        }}
      >
        <span>Add Another Task</span>
      </div>
      <Modal
        onClose={showModal}
        show={show}
        appState={appState}
        setAppState={setAppState}
      ></Modal>
    </div>
  );
};

export default Section;
