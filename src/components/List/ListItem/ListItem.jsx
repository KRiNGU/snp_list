import { memo, useCallback } from 'react';
import styles from './ListItem.module.css';
import {MdOutlineOpenInFull} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../../state/List/reducer";
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ListItem = ({id, name, phoneNumber, placement}) => {
    const dispatch = useDispatch();
    const handleDelete = useCallback(() => dispatch(deleteElement({id})), [dispatch, id]);

    return(
        <div className={styles.item}>
            <div className={classnames(styles.property, styles.id)}>{id}</div>
            <div className={classnames(styles.property, styles.name)}>{name}</div>
            <div className={classnames(styles.property, styles.phoneNumber)}>{phoneNumber}</div>
            <div className={classnames(styles.property, styles.placement)}>{placement}</div>
            <button className={classnames(styles.buttonChange, "button")}>
                <Link to={`/items/${id}`} className="link"> 
                    <MdOutlineOpenInFull 
                        color="black"
                    />
                </Link>
            </button>
            <button className={classnames("button", styles.buttonDelete)} onClick={handleDelete}>
                <AiFillDelete />
            </button>
        </div>
    );
};

ListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    placeholder: PropTypes.string,
}

export default memo(ListItem);