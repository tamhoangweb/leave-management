import GlobalStyle from '../GlobalStyle';
import Header from './Header';

export default {
    title: 'Example/Header',
    component: Header,
    argTypes: {
        fixed: {
            options: [true, false],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => (
    <>
        <GlobalStyle />
        <Header className="abc" {...args} />
    </>
);

export const Default = Template.bind({});
