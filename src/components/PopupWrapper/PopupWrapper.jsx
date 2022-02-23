import React from 'react';
import styles from './PopupWrapper.module.css';

const PopupWrapper = ({children, onClose}) => {

    return(
      <>
        <div className={styles.modalComponent} onClick={onClose}></div>
        <div className={styles.popupWrapper}>
            <button onClick={onClose} className={styles.btn}>&#8678;</button>
            {children}
        </div>
      </>  
    )
}

export default PopupWrapper;