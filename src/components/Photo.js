import React from "react";
import "./Photo.css";

const Photo = (props) => {
  return (
    <div className="single-photo">
      <img src={props.image} alt="photo" />
      <div className="description">
        <p>{props.caption}</p>
        <p>Taken by {props.takenBy}</p>
      </div>
    </div>
  );
};

export default Photo;
