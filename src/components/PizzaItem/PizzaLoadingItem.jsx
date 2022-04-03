import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingItem = (props) => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="131" cy="120" r="119" />
            <rect x="0" y="259" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="296" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="395" rx="6" ry="6" width="80" height="30" />
            <rect x="122" y="388" rx="20" ry="20" width="154" height="41" />
        </ContentLoader>
    );
};

export default PizzaLoadingItem;
