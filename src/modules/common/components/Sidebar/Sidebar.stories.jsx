import GlobalStyle from '../GlobalStyle';
import Sidebar from './Sidebar';
import { Home, HomeFilled, Books, BooksFilled, Clipboard, ClipboardFilled, Cog, CogFilled } from '../Icons';
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
    title: 'Example/Sidebar',
    component: Sidebar,
};

const Template = () => (
    <>
        <GlobalStyle />
        <Sidebar>
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
    </>
);

export const Default = Template.bind({});
