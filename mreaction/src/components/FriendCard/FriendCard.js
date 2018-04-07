import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
    <img alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>id:</strong> {props.name}
        </li>
      </ul>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} >
      𝘅
    </span> */}
  </div>
);

export default FriendCard;
