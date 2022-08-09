import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/styles';
import Item from './Item';

const StyledSidebar = styled.nav`
    min-height: calc(100vh - 3.5rem);
    width: 13.75rem;
    background-color: ${colors.tealDark};

    ${({ fixed }) =>
        fixed
            ? `
        position: fixed;
        top: 3.5rem;
        left: 0;
        right: 0;
        z-index: 2;
        `
            : `
        position: absolute;
        `}
`;
const Sidebar = (props) => <StyledSidebar {...props} />;
Sidebar.Item = Item;
export default Sidebar;
