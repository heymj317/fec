import React, { useEffect, useState } from "react";
import styles from "../styles/Description.module.css";
import Amenities from "./Amenities";
import AmenitiesModal from "./AmenitiesModal";
import AboutModal from "./AboutModal";

const Description = ({ property, host }) => {
  const [showDModal, setShowDModal] = useState(false);
  const [showAModal, setShowAModal] = useState(false);

  const openDModal = () => {
    setShowDModal((prev) => !prev);
  };

  const openAModal = () => {
    setShowAModal((prev) => !prev);
  };

  return (
    <div className={styles.Description}>
      <h2 className={styles.titleLine}>
        {property.title} hosted by {host || "one of our most trusted hosts"}
      </h2>
      <p className={styles.propSpecs}>{property.specs}</p>
      <div id="about" className={styles.readout}>
        <p>{property.about}</p>
        <h3>The space</h3>
        <p id="space">{property.prop_space}</p>
        <h3>Guest access</h3>
        <p id="guest-access">{property.guest}</p>
        <h3>Other things to note</h3>
        <p id="other">{property.other}</p>
      </div>
      <div className={styles.link}>
        <u onClick={openAModal}>Show more</u>
      </div>
      <AboutModal
        showAModal={showAModal}
        setShowAModal={setShowAModal}
        property={property}
        onClose={() => {
          setShowAModal(false);
        }}
      />
      <div id="amenities" className={styles.readout}>
        <div id="listHolder">
          <ul>
            {property.amenities.ameniGroups.map((group) =>
              group.values.map((amenity, i) => {
                let itemKey = amenity + i;
                return <li key={itemKey}>{amenity}</li>;
              })
            )}
          </ul>
        </div>
      </div>
      <div className={styles.expander}>
        <button className={styles.button} onClick={openDModal}>
          Show All Amenities
        </button>
      </div>
      <AmenitiesModal
        showDModal={showDModal}
        setShowDModal={setShowDModal}
        amenities={property.amenities.ameniGroups}
        onClose={() => {
          setShowDModal(false);
        }}
      />
    </div>
  );
};

export default Description;
