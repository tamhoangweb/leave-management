import React from 'react';
import GlobalStyle from '../GlobalStyle';
import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <>
        <GlobalStyle />
        <Button {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    label: 'Button label',
};
