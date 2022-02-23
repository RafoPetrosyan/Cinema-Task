import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './components/Table/Table';
import PopupWrapper from './components/PopupWrapper/PopupWrapper';
import PopupCart from './components/PopupWrapper/PopupCart/PopupCart';
import { setCinemaList } from './store/cinemaReducer';
import styles from './App.module.css';


const App = () =>{

      const cinemaList = useSelector(state => state.cinemaList.cinemaList);
      const dispatch = useDispatch();

      useEffect(() =>{
            return () =>{
                  localStorage.setItem('cinema-list', JSON.stringify(cinemaList));
            }
      }, [cinemaList]);

      useEffect(() =>{
            return () =>{
                  dispatch(setCinemaList(JSON.parse(localStorage.getItem('cinema-list'))));
            }
      }, [])

      const [show, setShow] = useState(false);
      const [elementObj, setElementObj] = useState({});

      const onClose = useCallback(() =>{
            setShow(false);
      }, []);

      const openPopup = useCallback((element, row, number) =>{
            setShow(true);
            setElementObj({element, row, number});
      }, []);

      return(
        <div className={styles.app}>
            <Table openPopup={openPopup} cinemaList={cinemaList} show={show}/>

            {show && <PopupWrapper onClose={onClose}>
                  <PopupCart elementObj={elementObj}/>
            </PopupWrapper>}
        </div>
      )
};

export default App;