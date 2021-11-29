import { memo } from 'react';
import './ListParameters.css';

const ListParameters = () => (
    <li className="parameters">
        <div className="parameter id">ID</div>
        <div className="parameter name">Name</div>
        <div className="parameter phoneNumber">Phone Number</div>
        <div className="parameter placement">Place of Residence</div>
    </li>
);

export default memo(ListParameters);