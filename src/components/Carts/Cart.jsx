import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setName, testFullName } from "../../helpers/constant";
import { deleteBooking, editeFullNameChange } from "../../store/cinemaReducer";
import styles from './Cart.module.css';

const Cart = ({hendleCart, element, elementNumber}) =>{

    const dispatch = useDispatch();
    const ref = useRef(null);
    const [editFyllName, setEditFullName] = useState(element.fullName);
    const [showEdit, setShowEdit] = useState(false);
    const [colorBorder, setColorBorder] = useState('1px solid black');

    useEffect(() =>{
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                    hendleCart && hendleCart();
                }
            };
            document.addEventListener('click', handleClickOutside);
            return () => {
                document.removeEventListener('click', handleClickOutside);
            };
    }, []);
    
    const hendleBtn = () =>{
        hendleCart();
    }

    const deletedBtn = (id) =>{
        dispatch(deleteBooking(id));
        hendleCart();
    }

    const openEdite = () =>{
        setShowEdit(true);
    }

    const editeName = e =>{
        setEditFullName(e.target.value); 
    }

    const editeChange = e =>{
        e.preventDefault();

        if(testFullName(editFyllName)){

            const payloadObj = {
                id: element.id,
                fullName: setName(editFyllName),     
            }
            dispatch(editeFullNameChange(payloadObj));
            setShowEdit(false);
        }
        setColorBorder('2px solid red');
        
    }

    return(
        <div className={styles.cart} ref={ref}>
            <div className={styles.btnDiv}>
                <button onClick={hendleBtn} className={styles.btn}>
                    &#8678;
                </button>
                <button onClick={openEdite} className={styles.editeBtn}>
                    Edite
                </button>
                <button onClick={() => deletedBtn(element.id)} className={styles.editeBtn}>
                    Delete
                </button>
            </div>
            <div className={styles.text}>
                <p className={styles.p}>Row {element.row} N` {elementNumber + 1}</p>
                <p className={styles.p}>{element.fullName}</p>
                <p className={styles.p}>{element.date}</p>
            </div>
            {
                showEdit && <form onSubmit={editeChange} className={styles.form}>
                    <input 
                        type='text'
                        value={editFyllName}
                        onChange={editeName}
                        style={{border: colorBorder}}
                        required
                    />
                    <button>Save</button>
                </form>
            }
        </div>
    )
};

export default Cart;