import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { booking } from "../../store/cinemaReducer";
import { date, setName, testFullName } from "../../helpers/constant";
import styles from './Booking.module.css';
import stylesCart from '../Carts/Cart.module.css';


const Booking = ({showBook, bookingElem, elementNumber}) =>{

    const dispatch = useDispatch();
    const ref = useRef(null);
    const [fullName, setFullName] = useState('');
    const [colorBorder, setColorBorder] = useState('1px solid black');

    useEffect(() =>{
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                    showBook && showBook();
                }
            };
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
    }, []);
    
    const hendleBtn = () =>{
        showBook();
    }

    const nameChange = e =>{
        setFullName(e.target.value);
    }

    const submitChange = e =>{
        e.preventDefault();

        if(testFullName(fullName)){
            const payloadObj = {
                id: bookingElem.id,
                fullName: setName(fullName),
                date: date(),
            }
            dispatch(booking(payloadObj));
            showBook();
        }
        setColorBorder('2px solid red');
    }

    return (
        <div className={styles.cart} ref={ref}>
            <div>
                <button className={stylesCart.btn} onClick={hendleBtn}>
                    &#8678;
                </button>
            </div>
            <p className={stylesCart.p}>Row {bookingElem.row} N` {elementNumber + 1}</p>
            <form className={styles.form} onSubmit={submitChange}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder = 'Full Name'
                    value={fullName}
                    onChange={nameChange}
                    style={{border: colorBorder}}
                    required
                />
                <button type="submit" className={styles.btn}>
                    Save
                </button>
            </form>
        </div>
    )
};

export default Booking;

