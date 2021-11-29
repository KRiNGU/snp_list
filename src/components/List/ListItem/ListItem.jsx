import { memo, useCallback } from 'react';
import './ListItem.css';
import {MdOutlineOpenInFull} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../../state/List/reducer";
import PropTypes from 'prop-types';

const ListItem = ({id, name, phoneNumber, placement}) => {
    const dispatch = useDispatch();
    const handleDelete = useCallback(() => dispatch(deleteElement({id})), [dispatch, id]);

    return(
        <div className="list__item">
            <div className="item__property id">{id}</div>
            <div className="item__property name">{name}</div>
            <div className="item__property phoneNumber">{phoneNumber}</div>
            <div className="item__property placement">{placement}</div>
            <button className="button item__change">
                <Link to={`/items/${id}`} className="link"> 
                    <MdOutlineOpenInFull 
                        color="black"
                    />
                </Link>
            </button>
            <button className="button item__delete" onClick={handleDelete}>
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