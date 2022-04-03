import React, {useState} from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import {Button} from "../index";

const PizzaItem = ({id, imageUrl, name, types, sizes, price, onAddPizza, addedCounter}) => {
    const availableTypeNames = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];
    const [selectedType, setSelectedType] = useState(types[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const selectTypeHandler = (index) => setSelectedType(index);
    const selectSizeHandler = (size) => setSelectedSize(size);
    const addPizzaHandler = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: availableTypeNames[selectedType],
            size: selectedSize,
        }
        onAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypeNames.map((type, index) => {
                        return <li onClick={selectTypeHandler.bind(this, index)} className={classNames({
                            'active': index === selectedType,
                            'disabled': !types.includes(index)
                        })} key={type}>{type}</li>
                    })}
                </ul>
                <ul>
                    {availableSizes.map((size) => {
                        return <li onClick={selectSizeHandler.bind(this, size)} className={classNames({
                            'active': size === selectedSize,
                            'disabled': !sizes.includes(size)
                        })} key={size}>{size} см.</li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <Button onClick={addPizzaHandler} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCounter && <i>{addedCounter}</i>}
                </Button>
            </div>
        </div>
    );
};

PizzaItem.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number,
    category: PropTypes.number,
    rating: PropTypes.number,
    onAddPizza: PropTypes.func,
    addedCounter: PropTypes.number
}
PizzaItem.defaultProps = {
    imageUrl: 'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
    name: 'Название',
    types: [],
    sizes: [],
    price: 0,
}

export default PizzaItem;
