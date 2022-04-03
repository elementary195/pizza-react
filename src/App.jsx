import React from 'react';

import "./scss/app.scss";
import {AppRouter, Header} from "./components";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <AppRouter/>
            </div>
        </div>

    );
};

export default App;
