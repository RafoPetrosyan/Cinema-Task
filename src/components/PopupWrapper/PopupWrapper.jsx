import React, {useRef, useEffect} from 'react';
import styles from './PopupWrapper.module.css';

const PopupWrapper = ({children, onClose}) => {

    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClose && onClose();
          }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    return(
        <div className={styles.popupWrapper} ref={ref}>
            <button onClick={onClose} className={styles.btn}>&#8678;</button>
            {children}
        </div>
    )
}

export default PopupWrapper;