import { memo } from 'react';
import styles from './Button.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, children, onClick }) => (
  <button className={classnames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onClick: PropTypes.func,
};

export default memo(Button);
