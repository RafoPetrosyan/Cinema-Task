import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { date, editeUpperCase, setElement } from "../../helpers/constant";
import { setState } from "../../store/cinemaReducer";
import styles from './Booking.module.css';

const Booking = ({elementObj, editeObj}) =>{

    const cinemaList = useSelector(state => state.cinemaList.cinemaList);
    const dispatch = useDispatch();
    const {element, row, number} = elementObj;
 
    const [name, setName] = useState(editeObj.firstName || '');
    const [surname, setSurname] = useState(editeObj.lastName || '');
    const [email, setEmail] = useState(editeObj.email || '');

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
        dispatch(setState(setElement(cinemaList, element)));
    }

    return(
        <div className={styles.booking}>
            <p className={styles.p}>Row {row} N` {number}</p>

            <form className={styles.form} onSubmit={submitChange}>

                <input  
                    className={styles.input} placeholder='First Name' type='text'
                    value={name} onChange={nameChange} required
                />
                <input
                    className={styles.input} placeholder='Last Name' type='text'
                    value={surname} onChange={surnameChange} required
                />
                <input
                    className={styles.input} placeholder='Email' type='email'
                    value={email} onChange={emailChange} required
                />
                <button className={styles.btn} type="submit">
                    Save
                </button>
                
            </form>
        </div>
    )
}

export default Booking;

