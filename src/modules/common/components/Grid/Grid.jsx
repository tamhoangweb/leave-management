import styled from 'styled-components';

const Item = styled.div`
    grid-column-start: ${({ start }) => start};
    grid-column-end: ${({ span }) => `span ${span}`};
    grid-auto-rows: minmax(min-content, max-content);
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1.5rem;
`;

Grid.Item = Item;
export default Grid;
