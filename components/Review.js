import React, { useEffect, useState } from "react";
import styles from "../styles/Review.module.css";
import ReviewModal from "./ReviewModal";
const Reviews = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div
      className="reviews"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      <div className={styles.reviews}>
        <div>
          {props.reviews.map((users, i) => (
            <div key={i}>
              <ul>
                <li>
                  {users.first_name} {users.last_name}
                </li>
                {users.stars} Stars! - {users.comment}
              </ul>
            </div>
          ))}
          <button className={styles.button} onClick={openModal}>
            Show all reviews
          </button>
        </div>
      </div>
      {/* //{" "} */}
      <ReviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        users={props.users}
        reviews={props.reviews}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default Reviews;