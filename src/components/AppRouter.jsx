import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cart, Home} from "../pages";

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="*" element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;
