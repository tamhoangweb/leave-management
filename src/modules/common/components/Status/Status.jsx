import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { colors, typography } from '../../utils/styles';
const STATUS_MAPPING = {
    accepted: {
        text: 'Accepted',
        color: colors.green,
    },
    pending: {
        text: 'Pending',
        color: colors.yellow,
    },
    rejected: {
        text: 'Rejected',
        color: colors.red,
    },
};
const StatusStyled = styled.span`
    display: inline-block;
    ${typography.size.xsmall}
    line-height: 18px;

    ${({ color }) => css`
        color: ${color};
        ::before {
            content: '';
            display: inline-block;
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: ${color};
            margin-right: 0.375rem;
        }
    `}
`;
const Status = ({ value, ...props }) => {
    const { text, color } = STATUS_MAPPING[value];

    return (
        <StatusStyled color={color} {...props}>
            {text}
        </StatusStyled>
    );
};

Status.propTypes = {
    value: PropTypes.oneOf(['accepted', 'pending', 'rejected']).isRequired,
};
export default Status;
