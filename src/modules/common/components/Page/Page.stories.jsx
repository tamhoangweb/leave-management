import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import Page from './Page';
import { Home, HomeFilled, Books, BooksFilled, Clipboard, ClipboardFilled, Cog, CogFilled } from '../Icons';
import Sidebar from '../Sidebar';
const menus = [
    {
        path: '#',
        activeIcon: HomeFilled,
        icon: Home,
        title: 'Home',
    },
    {
        path: '#',
        activeIcon: ClipboardFilled,
        icon: Clipboard,
        title: 'Leave Management',
    },
    {
        path: '#',
        activeIcon: BooksFilled,
        icon: Books,
        title: 'Document',
    },
    {
        path: '#',
        activeIcon: CogFilled,
        icon: Cog,
        title: 'Settings',
    },
];
export default {
    title: 'Example/Page',
    component: Page,
};

const Template = () => (
    <>
        <GlobalStyle />
        <Header fixed={true} />
        <Page>
            <Sidebar fixed={true}>
                {menus.map(({ path, activeIcon, icon, title }, index) => {
                    return (
                        <Sidebar.Item
                            href={path}
                            ActiveIcon={activeIcon}
                            Icon={icon}
                            active={index === 1}
                            key={index}
                            title={title}
                        />
                    );
                })}
            </Sidebar>

            <Page.Content>Page Content</Page.Content>
        </Page>
    </>
);
export const Default = Template.bind({});
