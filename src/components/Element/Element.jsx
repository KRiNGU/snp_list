import { memo, useCallback, useState } from 'react';
import './Element.css';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeName,
  changePhoneNumber,
  changePlacement,
} from '../../state/List/reducer';

const Element = ({ editing=true }) => {
  const { id } = useParams();
  const userInfo = useSelector((store) => store.items.filter(item => item.id === id)[0]);
  const [isNameEditing, setIsNameEditing] = useState(editing);
  const [isPhoneEditing, setIsPhoneEditing] = useState(editing);
  const [isPlacementEditing, setIsPlacementEditing] = useState(editing);
  const [name, setName] = useState(userInfo?.name);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
  const [placement, setPlacement] = useState(userInfo?.placement);
  const dispatch = useDispatch();

  const handleChange = useCallback(() => {
    setIsNameEditing(!isNameEditing);
    setIsPhoneEditing(!isPhoneEditing);
    setIsPlacementEditing(!isPlacementEditing);
  }, [
    setIsNameEditing,
    setIsPhoneEditing,
    setIsPlacementEditing,
    isNameEditing,
    isPhoneEditing,
    isPlacementEditing,
  ]);

  const handleDoubleClickName = useCallback(() => {
    setIsNameEditing(true);
  }, [setIsNameEditing]);

  const handleDoubleClickPhone = useCallback(() => {
    setIsPhoneEditing(true);
  }, [setIsPhoneEditing]);

  const handleDoubleClickPlacement = useCallback(() => {
    setIsPlacementEditing(true);
  }, [setIsPlacementEditing]);

  const handleChangeName = useCallback(
    (e) => {
      const value = e.target.value;  
      dispatch(changeName({ id, value }));
      setName(value);
    },
    [dispatch, setName, id]
  );

  const handleChangePhoneNumber = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch(changePhoneNumber({ id, value }));
      setPhoneNumber(value);
    },
    [dispatch, setPhoneNumber, id]
  );

  const handleChangePlacement = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch(changePlacement({ id, value }));
      setPlacement(value);
    },
    [dispatch, setPlacement, id]
  );

  const handleKeyDownName = useCallback((e) => {
    if (e.key === 'Enter') {
      setIsNameEditing(false);
    }
  }, [setIsNameEditing]);

  const handleKeyDownPhoneNumber = useCallback((e) => {
    if (e.key === 'Enter') {
      setIsPhoneEditing(false);
    }
  }, [setIsPhoneEditing]);

  const handleKeyDownPlacement = useCallback((e) => {
    if (e.key === 'Enter') {
      setIsPlacementEditing(false);
    }
  }, [setIsPlacementEditing]);

  if (!userInfo) {
    return(<h2>Отсутствует пользователь с таким id</h2>)
  }
  
  return (
    <div className="element__background">
      <button className="button button__change" onClick={handleChange}>
        <BsFillPencilFill />
      </button>
      <button className="button button__exit">
        <Link to="/">
          <AiOutlineArrowLeft color="black" />
        </Link>
      </button>
      <h2 className="element__title">Информация о человеке</h2>
      <ul className="element__list">
        <li className="element__property" id="property__id">
          <div className="property__name">ID:</div>
          <div className="property__parameter">{id}</div>
        </li>
        <li className="element__property" id="property__name">
          <div className="property__name">ФИО:</div>
          {isNameEditing ? (
            <input
              type="text"
              className="change__property"
              value={name}
              onChange={handleChangeName}
              onKeyDown={handleKeyDownName}
              placeholder="Введите имя"
            />
          ) : (
            <div className="property__parameter" onDoubleClick={handleDoubleClickName}>{name}</div>
          )}
        </li>
        <li className="element__property" id="property__phoneNumber">
          <div className="property__name">Номер телефона:</div>
          {isPhoneEditing ? (
            <input
              type="text"
              className="change__property"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              onKeyDown={handleKeyDownPhoneNumber}
              placeholder="Введите телефон"
            />
          ) : (
            <div className="property__parameter" onDoubleClick={handleDoubleClickPhone}>{phoneNumber}</div>
          )}
        </li>
        <li className="element__property" id="property__placement">
          <div className="property__name">Место проживания:</div>
          {isPlacementEditing ? (
            <input
              type="text"
              className="change__property"
              value={placement}
              onChange={handleChangePlacement}
              onKeyDown={handleKeyDownPlacement}
              placeholder="Введите адрес проживания"
            />
          ) : (
            <div className="property__parameter" onDoubleClick={handleDoubleClickPlacement}>{placement}</div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default memo(Element);
