import React from 'react';
import Booking from '../../Booking/Booking';
import Cart from '../../Carts/Cart';
import styles from './PopupCart.module.css';

const PopupCart = ({elementObj}) =>{
    return (
        <div className={styles.popupCart}>
            {elementObj.element.userInfo ? <Cart {...elementObj}/> : <Booking {...elementObj}/>}
        </div>
    )
}

export default PopupCart;