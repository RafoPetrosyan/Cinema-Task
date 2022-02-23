import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { date, editeUpperCase } from "../../helpers/constant";
import { setState } from "../../store/cinemaReducer";
import styles from './Booking.module.css';

const Booking = ({element, row, number}) =>{

    const dispatch = useDispatch();
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    const nameChange = e =>{
        setName(e.target.value);
    }
    const surnameChange = e =>{
        setSurname(e.target.value);
    }
    const emailChange = e =>{
        setEmail(e.target.value);
    }

    const submitChange = e =>{
        e.preventDefault();

        element.userInfo = {
            firstName: editeUpperCase(name),
            lastName: editeUpperCase(surname),
            email: email,
        }
        element.date = date();
        dispatch(setState(element));
    }

    return(
        <div className={styles.booking}>
            <p className={styles.p}>Row {row} N` {number}</p>

            <form className={styles.form} onSubmit={submitChange}>
                <input
                    className={styles.input}
                    placeholder='First Name'
                    type='text'
                    value={name}
                    onChange={nameChange}
                    required
                />
                <input
                    className={styles.input}
                    placeholder='Last Name'
                    type='text'
                    value={surname}
                    onChange={surnameChange}
                    required
                />
                <input
                    className={styles.input}
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={emailChange}
                    required
                />
                <button className={styles.btn} type="submit">
                    Save
                </button>
                
            </form>
        </div>
    )
}

export default Booking;

