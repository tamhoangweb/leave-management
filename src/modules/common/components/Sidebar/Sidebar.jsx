import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/styles';
import Item from './Item';

const StyledSidebar = styled.nav`
    min-height: calc(100vh - 3.5rem);
    width: 13.75rem;
    background-color: ${colors.tealDark};
`;
const Sidebar = (props) => <StyledSidebar {...props} />;
Sidebar.Item = Item;
export default Sidebar;
