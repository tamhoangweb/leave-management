import { NavLink, useMatch } from 'react-router-dom';
import Item from './Item';

const RouterItem = ({ to, ...props }) => {
    const match = useMatch(to);
    return <Item as={NavLink} to={to} active={!!match} {...props}></Item>;
};

export default RouterItem;
