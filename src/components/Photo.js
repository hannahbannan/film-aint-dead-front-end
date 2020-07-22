import React from "react";

const Photo = (props) => {
  console.log(props.image);
  return (
    <div className="single-photo">
      <img src={props.image} alt="photo" />
      <p>{props.caption}</p>
      <p>Taken by {props.takenBy}</p>
    </div>
  );
};

export default Photo;
