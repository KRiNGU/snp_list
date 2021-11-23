import { memo } from "react";
import './ListItem.css';
import {MdOutlineOpenInFull} from 'react-icons/md';

const ListItem = ({id, name, phoneNumbers, placeOfResidence}) => {
    return(
        <li className="list__item">
            <div className="item__property id">{id}</div>
            <div className="item__property name">{name}</div>
            <div className="item__property phoneNumbers">{phoneNumbers}</div>
            <div className="item__property placeOfResidence">{placeOfResidence}</div>
            <button className="item__change"><MdOutlineOpenInFull /></button>
        </li>
    );
};

export default memo(ListItem);