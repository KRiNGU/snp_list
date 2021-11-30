import { memo } from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';

const Button = ({ className, children, onClick }) => (
  <button className={classnames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

export default memo(Button);
