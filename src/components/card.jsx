import React from "react";
import "./../styles.css";

const Card = ({ data }) => {
  const { title, date, user } = data;
  return (
    <div className="cardWrapper">
      <span>{title}</span>
      <div className="duedate">
        <span style={{ marginRight: "7px", fontWeight: "bold" }}>Due</span>
        <span>{date}</span>
      </div>

      <div className="user">
        <span style={{ color: "grey" }}>{user}</span>
      </div>
    </div>
  );
};

export default Card;
