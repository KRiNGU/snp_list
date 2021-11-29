import { memo, useCallback, useState } from 'react';
import './Element.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeName,
  changePhoneNumber,
  changePlacement,
} from '../../state/List/reducer';

const Element = () => {
  const { id } = useParams();
  const userInfo = useSelector((state) => state.items.find(item => item.id === id));
  const [name, setName] = useState(userInfo?.name);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phoneNumber);
  const [placement, setPlacement] = useState(userInfo?.placement);
  const dispatch = useDispatch();
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

  if (!userInfo) {
    return(<h2>Отсутствует пользователь с таким id</h2>)
  }
  
  return (
    <div className="element__background">
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
            <input
              type="text"
              className="change__property"
              value={name}
              onChange={handleChangeName}
              placeholder="Введите имя"
            />
        </li>
        <li className="element__property" id="property__phoneNumber">
          <div className="property__name">Номер телефона:</div>
            <input
              type="text"
              className="change__property"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              placeholder="Введите телефон"
            />
        </li>
        <li className="element__property" id="property__placement">
          <div className="property__name">Место проживания:</div>
            <input
              type="text"
              className="change__property"
              value={placement}
              onChange={handleChangePlacement}
              placeholder="Введите адрес проживания"
            />
        </li>
      </ul>
    </div>
  );
};

export default memo(Element);
