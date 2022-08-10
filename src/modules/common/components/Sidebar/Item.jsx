import styled from 'styled-components';
import { typography, colors } from '../../utils/styles';
import PropTypes from 'prop-types';

const StyledItem = styled.a`
    width: 100%;
    color: ${colors.white};
    ${typography.size.small}
    text-decoration: none;

    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;

    :hover {
        cursor: pointer;
        background-color: ${colors.black};

        :after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: ${colors.primary};
        }
    }

    svg {
        margin-right: 1rem;
    }

    position: relative;
    ${({ $active }) =>
        $active
            ? `
    background-color: ${colors.black};

    :after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: ${colors.primary};
    }
  `
            : `
  background-color: ${colors.tealDark};
  `}
`;

const Item = ({ title, ActiveIcon, Icon, active, ...props }) => {
    return (
        <StyledItem $active={active} {...props}>
            {!!active ? <ActiveIcon color={colors.primary} /> : <Icon color={colors.white} />}
            {title}
        </StyledItem>
    );
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    ActiveIcon: PropTypes.func.isRequired,
    Icon: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
};
export default Item;
