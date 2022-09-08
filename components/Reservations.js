import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Calendar from "./Calendar.js";
import Search from "./Search";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

const cleaningFee = 60;
const serviceFee = 41;

function retNights(date1, date2) {
  let result = Math.floor((date2 - date1) / 1000 / 60 / 60 / 24);
  return result;
}


const Reservations = ({ property, stars, handleDates }) => {

// function paymentSite() {
// alert("Please wait while you are transferred to our third-party payment site")
// }


  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  console.log(`${format(date[0].startDate, "MM/dd/yyyy")}`);
  console.log(`${format(date[0].endDate, "MM/dd/yyyy")}`);

  function handleRes(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById("form"));
    console.log(formData);
    const object = {
      prop_id: "1",
      first_name: "Joe",
      last_name: "Snuffy",
      guest_num: formData.get("guest_num"),
      startdate: `${format(date[0].startDate, "MM/dd/yyyy")}`,
      enddate: `${format(date[0].endDate, "MM/dd/yyyy")}`,
    };

    console.log(object);
    axios
      .post("/api/reservations", object)
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
  }

  function resClick(event, date) {
    event.preventDefault();
    let formData = new FormData(document.getElementById("form"));
  
    const object = {
      prop_id: "1",
      first_name: "Joe",
      last_name: "Snuffy",
      guest_num: formData.get("guest_num"),
      startdate: formData.get("checkin"),
      enddate: formData.get("checkout"),
    };
    console.log(object);
    axios
      .post("/api/reservations", {})
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
  }
  

  // console.log(date[0].startDate);
  // console.log(date[0].endDate);
  const handleChange = (e) => {
    e.preventDefault();
    setDate({
      ...date,
      startDate: e.currentTarget.value,
      endDate: e.currentTarget.value,
    });
    console.log(date[0].startDate);
    console.log(e.currentTarget.value);
  };

  const resTotal =
    parseInt(
      property.price *
        Math.floor((date[0].endDate - date[0].startDate) / 1000 / 60 / 60 / 24)
    ) +
    parseInt(cleaningFee) +
    parseInt(serviceFee);

  return (
    <div className="container">
      <div className={styles.reservations_box}>
        <span className={styles.price}>${property.price} per night</span>
        {/* <span className="stars">{stars} Stars!</span> */}
        <br></br>
        <div className={styles.spacer}></div>

        <form id="form"
          onSubmit={resClick}
          className={styles.form}
        >
          <hr size="1" width="90%" color="grey"></hr>

          <div id={"check_in"}>
            <div id="checkin">CHECK-IN</div>
            <input
              name="checkin"
              // type="button"

              className="visitDates"
              onClick={() => {
                setOpenDate(!openDate);
              }}
              value={`${format(date[0].startDate, "MM/dd/yyyy")}`}
            />
            <div id="checkout">CHECKOUT</div>
            <input
              name="checkout"
              // type="button"
              className="visitDates"
              onClick={() => {
                setOpenDate(!openDate);
              }}
              value={`${format(date[0].endDate, "MM/dd/yyyy")}`}
            />
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <br></br>
          <div className={styles.spacer}></div>
          <label> Number of Guests</label>
          <select name="guest_num">
            <option name="options" value="1">
              {" "}
              1
            </option>
            <option name="options" value="2">
              {" "}
              2
            </option>
            <option name="options" value="3">
              {" "}
              3
            </option>
            <option name="options" value="4">
              {" "}
              4
            </option>
            <option name="options" value="5">
              {" "}
              5
            </option>
            <option name="options" value="More than that">
              {" "}
              More than that!
            </option>
          </select>
          <hr size="1" width="90%" color="grey"></hr>
          <br></br>
          <button type="submit" className={styles.reserve_button}>
            Reserve
          </button>
          <p>You won`t be charged yet</p>
        </form>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          price X {retNights(date[0].startDate, date[0].endDate)} nights
        </span>
        <span className={styles.rightrespan}>

          ${property.price * Math.floor((date[0].endDate - date[0].startDate) / 1000 / 60 / 60 / 24)}

        </span>
        <div className={styles.spacer}></div>
        <br></br>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>Cleaning Fee</span>
        <span className={styles.rightrespan}>${cleaningFee}</span>
        <div className={styles.spacer}></div>
        <br></br>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>Service Fee</span>
        <span className={styles.rightrespan}>${serviceFee}</span>
        <div className={styles.spacer}></div>
        <br></br>
        <hr size="1" width="90%" color="grey"></hr>
        <div className={styles.spacer}></div>
        <span className={styles.leftrespan}>
          <b>Total Before Taxes</b>
        </span>
        <span className={styles.rightrespan}>
          <b>${resTotal}</b>
        </span>
      </div>
      <Calendar date={date} setDate={setDate} />
    </div>
  );
};
export default Reservations;
