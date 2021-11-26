import { memo, useCallback } from "react";
import { useHistory } from "react-router";
import "./Filter.css";

const Filter = () => {
    const history = useHistory();

    const handleChange = useCallback((e) => {
        history.replace(`/search=${e.target.value}`)
        if (!e.target.value) {
            history.replace('/');
        }
    }, [history]);

    return(
        <input type="text" className="filter-input" placeholder="Type to search..." onChange={handleChange}/>
    );
}

export default memo(Filter);