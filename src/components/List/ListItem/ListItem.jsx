import { memo } from "react";
import './ListItem.css';
import {MdOutlineOpenInFull} from 'react-icons/md';
import {AiFillDelete} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteElement } from "../../../state/List/reducer";

const ListItem = ({id, name, phoneNumber, placement}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteElement({id}));

    return(
        <li className="list__item">
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
        </li>
    );
};

export default memo(ListItem);