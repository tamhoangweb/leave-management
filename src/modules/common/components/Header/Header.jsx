import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Bell, ChevronDown } from '../Icons';
import Logo from './Logo.svg';
import Avatar from './tamhoangweb.png';
import { typography, colors } from '../../utils/styles';

const StyledHeader = styled.header`
    ${({ fixed }) =>
        fixed
            ? css`
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  z-index: 2;
              `
            : ''}

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 3.5rem;
    padding: 1rem 1.5rem;
    background-color: ${colors.white};
    box-shadow: 0px 1px 4px rgba(205, 207, 209, 0.5);

    .header-right,
    .actions {
        display: flex;
        align-items: center;
    }

    .actions {
        margin-left: 2rem;

        > * + * {
            margin-left: 0.5rem;
        }
        ${typography.size.small}
    }
`;
const Header = ({ fixed, ...restProps }) => {
    return (
        <StyledHeader {...restProps} fixed={fixed}>
            <img src={Logo} alt="" />

            <div className="header-right">
                <Bell color={colors.gray2} />

                <div className="actions">
                    <img src={Avatar} alt="" className="avatar" width={25} height="25" />
                    <span className="username">Tâm Hoàng</span>
                    <ChevronDown color={colors.gray2} />
                </div>
            </div>
        </StyledHeader>
    );
};

Header.propTypes = {
    fixed: PropTypes.bool,
};
Header.defaulProps = {
    fixed: true,
};
export default Header;
