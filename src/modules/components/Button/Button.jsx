import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    background: #32ab54;
    padding: 8px 24px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    border: 0;
    border-radius: 24px;

    :hover {
        background: #277e3f;
        cursor: pointer;
    }
`;

const Button = ({ label }) => {
    return <StyledButton>{label}</StyledButton>;
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
};
Button.defaultProps = {
    label: 'Placeholder for Button',
};
export default Button;
