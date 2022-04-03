import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Categories = memo(({items, activeCategory, onSelectCategory}) => {
    const pickCategoryHandler = (value) => {
        onSelectCategory(value);
    }
    return (
        <div className="categories">
            <ul>
                <li onClick={pickCategoryHandler.bind(this, null)}
                    className={activeCategory === null ? 'active' : ''}>Все
                </li>
                {items && items.map((item, index) => {
                    return <li className={activeCategory === index ? 'active' : ''}
                               onClick={pickCategoryHandler.bind(this, index)} key={item}>{item}</li>
                })}
            </ul>
        </div>
    );
});
Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    activeCategory: PropTypes.number || null,
    onSelectCategory: PropTypes.func
}
Categories.defaultProps = {
    items: [],
    activeCategory: null,
}
export default Categories;
