import React from "react";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import styles from './Table.module.css';

const Table = ({openPopup, cinemaList, show}) =>{

    const clickItem = (element, row, number) =>{
        openPopup(element, row + 1, number + 1);
    }

    return(
        <table className={styles.table}>
        <thead>
            <tr>
              <th></th>
              {
                cinemaList[0].map((item, index) =>(
                  <th key={index + 'cinema-th'}>
                    {index + 1}
                  </th>
                ))
              }
            </tr>
        </thead>
        <tbody>
            {cinemaList.map((item, index) =>(
                  <tr key={index + 'cinema-tr'}>
                    <th>{index + 1}</th>
                        {item.map((elem, i)=>(

                            <td key={elem.id + 'cinema-td'} className={styles.parentImg} onClick={() => clickItem(elem, index, i)}>
                              { elem.userInfo ? 
                                  <img className={styles.tdImg} src={img1}/> :
                                  <img className={styles.tdImg} src={img2}/>
                              }
                            </td>

                          ))}
                  </tr>
              ))}
        </tbody>
    </table>
    )
};

export default Table;