import * as React from 'react';

const SvgChevronUp = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="m18 15-6-6-6 6" stroke={props.color} strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
);

export default SvgChevronUp;
