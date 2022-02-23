import React, {useState, useCallback} from 'react';
import Booking from '../../Booking/Booking';
import Cart from '../../Carts/Cart';
import styles from './PopupCart.module.css';

const PopupCart = ({elementObj}) =>{

    const [editeObj, setEditeObj] = useState({});

    const editeChange = useCallback((editeObj) =>{
        setEditeObj(editeObj);
    }, []);
    
    return (
        <div className={styles.popupCart}>
            {elementObj.element.userInfo ? 
                <Cart elementObj={elementObj} editeChange={editeChange} /> :
                <Booking elementObj={elementObj} editeObj={editeObj}/>}
        </div>
    )
}

export default PopupCart;