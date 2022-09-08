import React, { useState } from "react";
import styles from "../styles/AmenitiesModal.module.css";
import Amenities from "./Amenities";

const AmenitiesModal = ({ showDModal, setShowDModal, onClose, amenities }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {showDModal ? (
        <>
          <div className={styles.modalOverlay} onClick={onClose} />

          <div className={styles.AmenitiesModal}>
            <div className={styles.header}>
              <button className={styles.button} onClick={onClose}>
                X
              </button>
            </div>
            <div className={styles.amenitiesModalList}>
              <h2>What this place offers</h2>
              {amenities.map((group, i) => (
                <div className={styles.ameniGroup} key={i}>
                  <h3>{group.title}</h3>
                  <Amenities amenities={amenities[i].values} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AmenitiesModal;
