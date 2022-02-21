import React, { useCallback, useState } from 'react';
import Cart from './components/Carts/Cart';
import styles from './App.module.css';
import Table from './components/Table/Table';
import Booking from './components/Booking/Booking';


const App = () =>{
  const [show, setShow] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [element, setElement] = useState({});
  const [elementNumber, setElementNumber] = useState(null);
  const [bookingElem, setBookingElem] = useState('');

  const hendleCart = useCallback(() =>{
        setShow(false);
  }, []);

  const showCart = useCallback((elem, index) =>{
        setElement(elem);
        setElementNumber(index);
        setShowBooking(false);
        setShow(true);
  }, []);

  const showBook = useCallback(() =>{
        setShowBooking(false);
  }, []);

  const openBooking = useCallback((elem, index) =>{
      setBookingElem(elem);
      setElementNumber(index);
      setShow(false);
      setShowBooking(true);
  }, []);

      return(
        <div className={styles.app}>

            <Table showCart={showCart} openBooking={openBooking}/>
            {
                  show && <Cart hendleCart={hendleCart} element={element} elementNumber={elementNumber}/>
            }
            {
                  showBooking && <Booking showBook={showBook} bookingElem={bookingElem} elementNumber={elementNumber}/>
            }
        </div>
      )
};

export default App;