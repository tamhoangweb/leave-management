import * as React from 'react';

const SvgCheckbox = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 5.5H9A3.5 3.5 0 0 0 5.5 9v6A3.5 3.5 0 0 0 9 18.5h6a3.5 3.5 0 0 0 3.5-3.5V9A3.5 3.5 0 0 0 15 5.5ZM9 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H9Z"
            fill={props.color}
        />
    </svg>
);

export default SvgCheckbox;
