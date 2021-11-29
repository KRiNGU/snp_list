import { memo, useCallback } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import Filter from './Filter/Filter';
import ListItem from './ListItem/ListItem';
import ListParameters from './ListParameters/ListParameters';
import './List.css';
import { useDispatch, useSelector } from 'react-redux';
import { addElement } from '../../state/List/reducer';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const List = () => {
  const dispatch = useDispatch();
  const queryString = require('query-string');
  const location = useLocation();
  const parsedLocation = queryString.parse(location.search);
  const newId = Date.now().toString().slice(1);
  const filterWord = parsedLocation.search?.toLowerCase();

  const handleAdd = useCallback(() => {
    dispatch(addElement({newId}));
  }, [dispatch, newId]);

  const doFilter = useCallback((items) => {
    let filteredItems = items.filter(item => item.id.match(filterWord));
    filteredItems = filteredItems.concat(items.filter(item => item.name.toLowerCase().match(filterWord)));
    filteredItems = filteredItems.concat(items.filter(item => item.phoneNumber.toLowerCase().match(filterWord)));
    filteredItems = filteredItems.concat(items.filter(item => item.placement.toLowerCase().match(filterWord)));
    return [...new Set(filteredItems)];
  }, [filterWord]);

  const items = useSelector(state => doFilter(state.items));

  return (
    <div className="list">
      <Filter />
      <ListParameters />
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          phoneNumber={item.phoneNumber}
          placement={item.placement}
        />
      ))}
      <button className="button__corner" onClick={handleAdd}>
        <Link to={`/items/${newId}`}>
          <IoIosAddCircle color='black' size="40px" />
        </Link>
      </button>
    </div>
  );
};

export default memo(List);
