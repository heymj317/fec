import React, { useState } from "react";
import styles from "../styles/AboutModal.module.css";

const AboutModal = ({ showAModal, setShowAModal, onClose, property }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {showAModal ? (
        <>
          <div className={styles.modalOverlay} onClick={onClose} />

          <div className={styles.AboutModal}>
            <div className={styles.header}>
              <button className={styles.button} onClick={onClose}>
                X
              </button>
            </div>
            <div className={styles.about}>
              <h1>About this space</h1>
              <p id="about">{property.about}</p>
              <h3>The space</h3>
              <p id="space">{property.prop_space}</p>
              <h3>Guest access</h3>
              <p id="guest-access">{property.guest}</p>
              <h3>Other things to note</h3>
              <p id="other">{property.other}</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AboutModal;
