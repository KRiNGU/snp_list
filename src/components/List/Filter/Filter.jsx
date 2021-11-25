import { memo, useCallback } from "react";
import "./Filter.css";

const Filter = ({changeFilterFunction}) => {

    const handleChange = useCallback((e) => {
        changeFilterFunction(e.target.value);
    }, [changeFilterFunction]);

    return(
        <input type="text" className="filter-input" placeholder="Type to search..." onChange={handleChange}/>
    );
}

export default memo(Filter);