import react, { useState } from "react";
import styles from "../styles/ReviewModal.module.css";

const ReviewModal = ({ showModal, setShowModal, onClose, users, reviews }) => {
  const [modal, setModal] = useState(false);
  const averageRating = 0
  const reviewAverage = () => {
    for (var i = 0; i < reviews.length; i++) {      
      const starNumbers = parseInt(reviews[i].stars)
      averageRating += starNumbers / reviews.length
      console.log(averageRating)
    }
    return averageRating
  }
  reviewAverage();
  return (
    <>
      {showModal ? (
        <>
          <div className={styles.modalOverlay} />

          <div className={styles.reviewModal}>
            <div className={styles.header}>
              {" "}
              {/* header div start point */}
              <input
                className={styles.search}
                placeholder="Search reviews"
              ></input>
              <button onClick={onClose} className={styles.button}>
                X
              </button>
            </div>{" "}
            {/* header div end point */}
            <div className={styles.ratings}>Overall Reviews Rating: {averageRating} Stars!</div>
            <div>
              {reviews.map((item, i) => (
                <div key={i}>
                <ul className={styles.comments}>
                  <li>
                    <b>{item.first_name} {item.last_name}</b>
                  </li>                  
                </ul>
                <div className={styles.paragraph}>{item.stars} Stars! {item.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReviewModal;
