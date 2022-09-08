import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.css";

const Gallery = (props) => {
  const [showModal, setShowModal] = useState(false);  //this will be a modal later

  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Treehouse Casita</h1>
      <br></br>
      <div className={styles.desc}>
        5.0 · 1 reviews · Superhost · Colorado Springs, Colorado, United States
        <button className={styles.shareButton}>
          <u>share</u>
        </button>
        <button className={styles.saveButton}>
          <u>save</u>
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.mainImage}>
          <Image
            src="/1.PNG"
            alt="Landscape picture"
            width="500%"
            height="405%"
            objectFit="cover"
            className={styles.bigImage}
          />
        </div>
        <div className={styles.imageDivOne}>
          <Image width={300} height={200} objectFit="cover" src="/2.PNG" />
        </div>
        <div className={styles.imageDivTwo}>
          <Image width={300} height={200} objectFit="cover" src="/3.PNG" />
        </div>
        <div className={styles.imageDivThree}>
          <Image width={300} height={200} objectFit="cover" src="/4.PNG" />
        </div>
        <div className={styles.imageDivFour}>
          <Image width={300} height={200} objectFit="cover" src="/5.PNG" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
