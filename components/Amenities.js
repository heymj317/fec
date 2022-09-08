import React, { useEffect } from "react";

const Amenities = ({ amenities }) => {
  return (
    <ul className="amenitiesList">
      {amenities.map((value, i) => {
        let itemKey = value + i;
        return <li key={itemKey}>{value}</li>;
      })}
    </ul>
  );
};

export default Amenities;
