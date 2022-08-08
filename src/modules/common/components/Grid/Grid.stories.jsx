import React from 'react';

import GlobalStyle from '../GlobalStyle';
import Box from '../Box';
import Grid from './Grid';

export default {
    title: 'Example/Grid',
    component: Grid,
};

const Template = (args) => (
    <>
        <GlobalStyle />
        <Grid>
            <Grid.Item span={3} as={Box}>
                3
            </Grid.Item>
            <Grid.Item span={7} as={Box}>
                7
            </Grid.Item>
            <Grid.Item span={2} as={Box}>
                2
            </Grid.Item>
            <Grid.Item span={6} as={Box}>
                6
            </Grid.Item>
            <Grid.Item span={6} as={Box}>
                6
            </Grid.Item>
        </Grid>
    </>
);

export const Default = Template.bind({});
