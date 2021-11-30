import { memo } from 'react';
import styles from './ListParameters.module.css';
import classnames from 'classnames';

const ListParameters = () => (
  <li className={styles.parameters}>
    <div className={classnames(styles.parameter, styles.id)}>ID</div>
    <div className={classnames(styles.parameter, styles.name)}>Name</div>
    <div className={classnames(styles.parameter, styles.phoneNumber)}>
      Phone Number
    </div>
    <div className={classnames(styles.parameter, styles.placement)}>
      Place of Residence
    </div>
  </li>
);

export default memo(ListParameters);
