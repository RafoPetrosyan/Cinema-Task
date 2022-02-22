import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocalStorage } from './store/cinemaReducer';
import Table from './components/Table/Table';
import PopupWrapper from './components/PopupWrapper/PopupWrapper';
import PopupCart from './components/PopupWrapper/PopupCart/PopupCart';
import styles from './App.module.css';


const App = () =>{

      const cinemaList = useSelector(state => state.cinemaList.cinemaList);
      const dispatch = useDispatch();

      const [show, setShow] = useState(false);
      const [elementObj, setElementObj] = useState({});

      useEffect(() =>{
            return () =>{
                  localStorage.setItem('Cinema-list', JSON.stringify(cinemaList));
            }
      });

      useEffect(() =>{
            let localData = localStorage.getItem('Cinema-list');
            if(localData) {
                  dispatch( addLocalStorage(JSON.parse(localData)) );
            }
      }, []);

      const onClose = useCallback(() =>{
            setShow(false);
      }, []);

      const openPopup = useCallback((element, row, number) =>{
            setShow(true);
            setElementObj({element, row, number});
      }, []);

      return(
        <div className={show ? styles.appModale : styles.app} >
            <Table openPopup={openPopup} cinemaList={cinemaList} show={show}/>

            {show && <PopupWrapper onClose={onClose}>
                  <PopupCart elementObj={elementObj}/>
            </PopupWrapper>}
        </div>
      )
};

export default App;