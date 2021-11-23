import { memo } from "react";
import "./Filter.css";

const Filter = () => {
    return(
        <input type="text" className="filter-input" placeholder="Type to search..."></input>
    );
}

export default memo(Filter);