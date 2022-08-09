import GlobalStyle from './modules/common/components/GlobalStyle';
import Header from './modules/common/components/Header';
import Sidebar from './modules/common/components/Sidebar';
import Page from './modules/common/components/Page';

import {
    Home,
    HomeFilled,
    Books,
    BooksFilled,
    Clipboard,
    ClipboardFilled,
    Cog,
    CogFilled,
} from './modules/common/components/Icons';
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
function App() {
    return (
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
}

export default App;
