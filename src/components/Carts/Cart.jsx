import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setElement } from "../../helpers/constant";
import { setState } from "../../store/cinemaReducer";
import styles from './Cart.module.css';

const Cart = ({elementObj, editeChange}) =>{

    const cinemaList = useSelector(state => state.cinemaList.cinemaList);
    const dispatch = useDispatch();

    const {element, row, number} = elementObj;
    const {firstName, lastName, email} = element.userInfo;

    const deleteBtn = () =>{
        element.userInfo = null;
        dispatch( setState(setElement(cinemaList, element)));
    }

    const editeBtn = () =>{
        editeChange({firstName, lastName, email});
        deleteBtn();
    }
    
    return(
        <div className={styles.cart}>
    
            <div className={styles.btnDiv}>
                <button className={styles.btn} onClick={deleteBtn}> 
                    Delete
                </button>
                <button className={styles.btn} onClick={editeBtn}>
                    Edite
                </button>
            </div>

            <div>
                    <p className={styles.p}><span>Row`</span> {row} N` {number}</p>
                    <p className={styles.p}><span>First Name`</span> {firstName}</p>
                    <p className={styles.p}><span>Last Name`</span> {lastName}</p>
                    <p className={styles.p}><span>Email`</span> {email}</p>
                    <p className={styles.p}><span>Date`</span> {element.date}</p>
            </div>

        </div>
    )
};

export default Cart;

