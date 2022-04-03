import React from 'react';

import PropTypes from 'prop-types';
import classNames from "classnames";

const Button = ({children, outline, className, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('button', className, {
            'button--outline': outline
        })}>
            {children}
        </button>
    );
};
Button.propTypes = {
    outline: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}
export default Button;
