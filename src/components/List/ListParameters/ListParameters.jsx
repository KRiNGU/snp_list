import { memo } from "react";
import './ListParameters.css';

const ListParameters = () => {
    return(
        <li className="parameters">
            <div className="parameter id">ID</div>
            <div className="parameter name">Name</div>
            <div className="parameter phoneNumbers">Phone Number</div>
            <div className="parameter placeOfResidence">Place of Residence</div>
        </li>
    );
};

export default memo(ListParameters);