import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { date, editeUpperCase, setElement } from "../../helpers/constant";
import { setCinemaList } from "../../store/cinemaReducer";
import styles from "./Booking.module.css";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clear = () => setValue("");

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

const Booking = ({ elementObj, editeObj }) => {
  const { element, row, number } = elementObj;

  const name = useInput(editeObj.lastName || "");
  const surname = useInput(editeObj.firstName || "");
  const email = useInput(editeObj.email || "");

  const cinemaList = useSelector((state) => state.cinemaList.cinemaList);
  const dispatch = useDispatch();

  const submitChange = (e) => {
    e.preventDefault();

    element.userInfo = {
      firstName: editeUpperCase(name.value),
      lastName: editeUpperCase(surname.value),
      email: email.value,
    };
    element.date = date();
    dispatch(setCinemaList(setElement(cinemaList, element)));
  };

  return (
    <div className={styles.booking}>
      <p className={styles.p}>
        Row {row} N` {number}
      </p>

      <form className={styles.form} onSubmit={submitChange}>
        <input
          className={styles.input}
          placeholder="First Name"
          type="text"
          required
          {...name.bind}
        />
        <input
          className={styles.input}
          placeholder="Last Name"
          type="text"
          required
          {...surname.bind}
        />
        <input
          className={styles.input}
          placeholder="Email"
          type="email"
          required
          {...email.bind}
        />
        <button className={styles.btn} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Booking;
