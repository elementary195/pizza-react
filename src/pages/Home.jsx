import React, {useCallback, useEffect, useState} from 'react';
import {Categories, PizzaItem, PizzaLoadingItem, SortDropdown} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizza} from "../store/actions/pizza";
import {setCategory, setSortBy} from "../store/actions/filters";
import {addToCart} from "../store/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortTypes = [
    {name: 'популярности', type: 'rating', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'},
];

const Home = () => {
    const pizzaItems = useSelector(state => state.pizza.items);
    const cartItems = useSelector(state => state.cart.items);
    const {category, sortBy} = useSelector(state => {
        return {
            category: state.filters.category,
            sortBy: state.filters.sortBy
        }
    });
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const selectCategoryHandler = useCallback((cat) => dispatch(setCategory(cat)), [dispatch]);
    const selectSortByHandler = useCallback((sortObj) => dispatch(setSortBy(sortObj)), [dispatch]);
    const addPizzaHandler = (pizzaObj) => {
        dispatch(addToCart(pizzaObj));
    }

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            await dispatch(fetchPizza(category, sortBy))
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }, [dispatch, category, sortBy])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                            onSelectCategory={selectCategoryHandler}
                            items={categoryNames}/>
                <SortDropdown activeSortBy={sortBy.type}
                              onSelectSortBy={selectSortByHandler}
                              items={sortTypes}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? Array(12).fill(0).map((_, index) => {
                        return <PizzaLoadingItem key={index}/>
                    })
                    : pizzaItems.map(item => {
                        return <PizzaItem addedCounter={cartItems[item.id] && cartItems[item.id].items.length} onAddPizza={addPizzaHandler} key={item.id} {...item}/>
                    })
                }
            </div>
        </div>
    );
};

export default Home;
