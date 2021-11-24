import { memo } from 'react';
import './Element.css';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Element = ({ id, name, phoneNumber, placeOfResidence }) => {
  return (
    <div className="element__background">
      <button className="button button__change">
        <BsFillPencilFill />
      </button>
      <button className="button button__exit">
        <Link to="/">
          <AiOutlineArrowLeft 
            color="black"
          />
        </Link>
      </button>
      <h2 className="element__title">Информация о человеке</h2>
      <ul className="element__list">
        <li className="element__property" id="property__id">
          {' '}
          <div className="property__name">ID:</div>{' '}
          <div className="property__parameter">{id}</div>
        </li>
        <li className="element__property" id="property__name">
          <div className="property__name">ФИО:</div>{' '}
          <div className="property__parameter">{name}</div>
        </li>
        <li className="element__property" id="property__phoneNumber">
          <div className="property__name">Номер телефона:</div>{' '}
          <div className="property__parameter">{phoneNumber}</div>
        </li>
        <li className="element__property" id="property__placeOfResidence">
          <div className="property__name">Место проживания:</div>{' '}
          <div className="property__parameter">{placeOfResidence}</div>
        </li>
      </ul>
    </div>
  );
};

export default memo(Element);
