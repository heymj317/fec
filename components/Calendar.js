import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

function Calendar({ date, setDate }) {
  return (
    <div className="search">
      <h2>Select checkout date</h2>
      <h5>Minimum stay: 2 nights</h5>
      {
        <DateRange
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="calendar"
          months={2}
          showSelectionPreview={true}
          direction={"horizontal"}
          editableDateInputs={true}
          minDate={new Date()}
          value={date}
        />
      }
    </div>
  );
  console.log(value);
}

export default Calendar;

// import styles from "../styles/Home.module.css";
// import React, { useState } from "react";
// import Calendar from "./Calendar";
// // import Search from "./Search";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";

// const Reservations = ({ property }) => {
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   return (
// <div>
//   <div className={styles.reservations_box}>
//     <span className={styles.price}>price per night</span>
//     <span className="stars">stars</span>
//     <br></br>
//     <div className={styles.spacer}></div>
//     <form
//       onSubmit={console.log(
//         "Please wait while you are transferred to our third-party payment site"
//       )}
//       className={styles.form}
//     >
//       <hr size="1" width="90%" color="grey"></hr>

//       {/* edited check in and checkout to interact with calendar */}
//       <div id={"check_in"}>
//         CHECK-IN & CHECKOUT
//         <span className="visitDates" onClick={() => setOpenDate(!openDate)}>
//           {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
//             date[0].endDate,
//             "MM/dd/yyyy"
//           )}`}
//         </span>
//         {openDate && (
//           <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setDate([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={date}
//             className="date"
//           />
//         )}
//       </div>

//       <br></br>
//       <label> Number of Guests</label>
//       <select>
//         <option value="1"> 1</option>
//         <option value="2"> 2</option>
//         <option value="3"> 3</option>
//         <option value="4"> 4</option>
//         <option value="5"> 5</option>
//         <option value="more than that"> More than that!</option>
//       </select>
//       <br></br>
//       <button type="submit" className={styles.reserve_button}>
//         Reserve
//       </button>
//       <p>You won`t be charged yet</p>
//     </form>
//     <span className={styles.leftrespan}>price X 2 nights</span>
//     <span className={styles.rightrespan}>price x 2</span>
//     <br></br>
//     <span className={styles.leftrespan}>Cleaning Fee</span>
//     <span className={styles.rightrespan}>60</span>
//     <br></br>
//     <div className={styles.spacer}></div>
//     <span className={styles.leftrespan}>Service Fee</span>
//     <span className={styles.rightrespan}>41</span>
//     <div className={styles.spacer}></div>
//     <br></br>
//     <hr size="1" width="90%" color="grey"></hr>
//     <div className={styles.spacer}></div>
//     <span className={styles.leftrespan}>
//       <b>Total Before Taxes</b>
//     </span>
//     <span className={styles.rightrespan}>
//       <b>price+cleaning+service</b>
//     </span>
//   </div>
//   <div className="search">
//     <h2>Select checkout date</h2>
//     <h5>Minimum stay: 2 nights</h5>
//     {
//       <DateRange
//         onChange={(item) => setDate([item.selection])}
//         moveRangeOnFirstSelection={false}
//         ranges={date}
//         className="calendar"
//         months={2}
//         showSelectionPreview={true}
//         direction={"horizontal"}
//         editableDateInputs={true}
//         minDate={new Date()}
//       />
//     }
//   </div>
