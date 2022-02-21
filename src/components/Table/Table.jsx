import React from "react";
import { useSelector } from "react-redux";
import { numbersTh } from "../../helpers/constant";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import styles from './Table.module.css';

const Table = ({showCart, openBooking}) =>{
    const cinemaList = useSelector(state => state.cinemaList.cinemaList);

    const hendleTd = (elem, index) =>{
        if(elem.occupation){
            showCart(elem, index);
        }else{
            openBooking(elem, index);
        }
    }

    return(
        <table className={styles.table}>

        <thead>
            <tr>
              <th></th>
              {
                numbersTh.map(item =>(
                  <th key={item + 'cinema-th'}>
                    {item}
                  </th>
                ))
              }
            </tr>
        </thead>

        <tbody>
            {
              cinemaList.map((item, index) =>(
                  <tr key={index + 'cinema-tr'}>
                    <th>{index + 1}</th>
                        {
                          item.map((elem, index)=>(
                            <td key={elem.id + 'cinema-td'} className={styles.parentImg} onClick={() => hendleTd(elem, index)}>
                              {
                                  elem.occupation ? 
                                  <img className={styles.tdImg} src={img1}/> :
                                  <img className={styles.tdImg} src={img2}/>
                              }
                            </td>
                          ))
                        }
                  </tr>
              ))
            }
        </tbody>
    </table>
    )
};

export default Table;