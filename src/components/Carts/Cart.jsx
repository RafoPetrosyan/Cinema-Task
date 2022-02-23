import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { setState } from "../../store/cinemaReducer";
import styles from './Cart.module.css';

const Cart = ({element, row, number}) =>{

    const dispatch = useDispatch();
    
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [changeValue, setChangeValue] = useState('');

    const deleteBtn = () =>{
        element.userInfo = null;
        dispatch( setState(element));
    }

    const changeInput = e =>{
        setInputValue(e.target.value);
    }

    const editeBtn = (value, changeValue) =>{
        setShow(prev => !prev);
        setInputValue(value);
        setChangeValue(changeValue);
    }

    const submitChange = e =>{
        e.preventDefault();
        element.userInfo[changeValue] = inputValue;
        dispatch(setState(element));
        setShow(false);
    }

    const {firstName, lastName, email} = element.userInfo;

    return(
        <div className={styles.cart}>
    
            <div className={styles.btnDiv}>
                <button className={styles.deleteBtn} onClick={deleteBtn}> 
                    Delete
                </button>
            </div>

            <div className={styles.text}>
                <div className={styles.info}>
                    <p className={styles.p}><span>Row`</span> {row} N` {number}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><span>First Name`</span> {firstName}</p>
                    <button onClick={() => editeBtn(firstName, 'firstName')} className={styles.editeBtn}>edite</button>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><span>Last Name`</span> {lastName}</p>
                    <button onClick={() => editeBtn(lastName, 'lastName')} className={styles.editeBtn}>edite</button>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><span>Email`</span> {email}</p>
                    <button onClick={() => editeBtn(email, 'email')} className={styles.editeBtn}>edite</button>
                </div>
                <div className={styles.info}>
                    <p className={styles.p}><span>Date`</span> {element.date}</p>
                </div>
            </div>

            {show && <form className={styles.form} onSubmit={submitChange}>
                <input
                    className={styles.input}
                    type='text'
                    value={inputValue}
                    onChange={changeInput}
                    required
                />
                <button className={styles.btn} type="submit">Save</button>
            </form>}

        </div>
    )
};

export default Cart;

