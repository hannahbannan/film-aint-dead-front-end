import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";

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

  console.log(pData);

  const photosArr = pData.map((el) => {
    return (
      <Photo
        key={el._id}
        image={el.image}
        caption={el.caption}
        takenBy={el.takenBy}
        date={el.date}
      />
    );
    console.log(el._id);
  });

  return (
    <div className="photos-container">
      <p>Lots of film to come</p>
      {photosArr}
    </div>
  );
};

export default PhotoWall;
