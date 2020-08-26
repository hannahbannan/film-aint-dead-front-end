import React from "react";
import "./FeaturePhoto.css"

const FeaturePhoto = (props) => {
 if (props.shuffleData[10]) {
 return (
    <div className="feature-container">
        <img src={props.shuffleData[10].image} alt="Featured!" className="featured"/>
    </div>
 )
 }
 else
 return <p>Loading....</p>
}

export default FeaturePhoto;