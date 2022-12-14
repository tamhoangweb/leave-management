import * as React from 'react';

const SvgCalendar = (props) => (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.647 3a.68.68 0 0 0-.68.68V4h-1.7A2.267 2.267 0 0 0 4 6.267v11.467A2.267 2.267 0 0 0 6.267 20h11.466A2.267 2.267 0 0 0 20 17.734V6.267A2.267 2.267 0 0 0 17.733 4h-1.606v-.32a.68.68 0 1 0-1.36 0V4h-5.44v-.32a.68.68 0 0 0-.68-.68Zm-.68 2.36v1.493a.68.68 0 1 0 1.36 0V5.36h5.44v1.493a.68.68 0 1 0 1.36 0V5.36h1.606c.501 0 .907.406.907.907v2.37H5.36v-2.37c0-.5.406-.907.907-.907h1.7ZM5.36 9.77v7.964c0 .5.406.906.907.906h11.466c.501 0 .907-.405.907-.906V9.77H5.36Z"
            fill={props.color}
        />
    </svg>
);

export default SvgCalendar;
