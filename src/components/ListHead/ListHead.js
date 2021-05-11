import React from 'react';
import { userDataDirection } from '../../modules/Content/directionQue';

import styles from './ListHead.module.scss';

const ListHead = props => {
  return (
    <tr className={styles.ListHead} >
      {userDataDirection?.map( el => <td key={el} > {el.toUpperCase()} </td>)}
    </tr>
  );
};

export default ListHead;
