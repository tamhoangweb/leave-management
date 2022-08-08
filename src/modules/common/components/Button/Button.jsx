import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, typography } from '../../utils/styles';

const COLOR_MAPPING = {
    primary: {
        background: colors.primary,
        hover: colors.greenDark,
        text: colors.white,
    },
    secondary: {
        background: colors.secondary,
        hover: colors.gray5,
        text: colors.gray1,
    },
    danger: {
        background: colors.red,
        hover: colors.redDark,
        text: colors.white,
    },
};

const SIZE_MAPPING = {
    large: {
        padding: '0 2rem',
        height: '2.5rem',
        typography: typography.size.medium,
    },
    medium: {
        padding: '0 1.25rem',
        height: '2rem',
        typography: typography.size.small,
    },
};

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 24px;

    ${typography.weight.semibold}

    ${({ variant, disabled }) => {
        if (disabled) {
            return css`
                background: ${colors.gray4};
                color: ${colors.gray2};
            `;
        }

        const { background, hover, text } = COLOR_MAPPING[variant];
        return `
            background: ${background};
            color: ${text};
            :hover {
                background: ${hover};
                cursor: pointer;
            }
        `;
    }}

    ${({ size }) => {
        const { padding, height, typography } = SIZE_MAPPING[size];
        return `
            padding: ${padding};
            height: ${height};
            ${typography}
        `;
    }}
`;

const Button = ({ label, variant, size, disabled, onClick, ...restProps }) => {
    return (
        <StyledButton variant={variant} size={size} disabled={disabled} onClick={!disabled && onClick} {...restProps}>
            {label}
        </StyledButton>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
    size: PropTypes.oneOf(['large', 'medium']),
};
Button.defaultProps = {
    label: 'Placeholder for Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
};
export default Button;
