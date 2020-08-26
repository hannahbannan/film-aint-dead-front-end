import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";
import "./PhotoWall.css";
import FeaturePhoto from "./FeaturePhoto"

const PhotoWall = () => {
  const [pData, setpData] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await axios(`http://localhost:3050/photos`);
        setpData(res.data.photos);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const shuffleData = pData.sort(() => Math.random() - 0.5).splice(0,100);
  
  const photosArr = shuffleData.map((el) => {
    return (
      <Photo
        key={el._id}
        image={el.image}
        caption={el.caption}
        takenBy={el.takenBy}
        date={el.date}
        className="grid-photo"
      />
    );
  });

  return (
    <>
      <div className="feature">
        <FeaturePhoto shuffleData={shuffleData} />
      </div>
      <div className="photos-container">{photosArr}</div>
    </>
  );
};

export default PhotoWall;
