import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import GlobalStyle from './modules/common/components/GlobalStyle';
import Header from './modules/common/components/Header';
import Sidebar from './modules/common/components/Sidebar';
import Page from './modules/common/components/Page';

import { mainRoutes } from './routes';

console.log(mainRoutes);
function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Header fixed={true} />
                <Page>
                    <Sidebar fixed={true}>
                        {mainRoutes.map(({ path, activeIcon, icon, title }, index) => {
                            return (
                                <Sidebar.RouterItem
                                    as={NavLink}
                                    to={path}
                                    ActiveIcon={activeIcon}
                                    Icon={icon}
                                    key={index}
                                    title={title}
                                />
                            );
                        })}
                    </Sidebar>
                    <Routes>
                        {mainRoutes.map(({ path, ContentComponent }, index) => (
                            <Route key={index} path={path} element={<ContentComponent />} />
                        ))}

                        <Route path="*" element={<Page.Content>404 Not Found</Page.Content>} />
                    </Routes>
                </Page>
            </BrowserRouter>
        </>
    );
}

export default App;
