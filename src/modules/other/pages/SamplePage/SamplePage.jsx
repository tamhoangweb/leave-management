import { useLocation } from 'react-router-dom';

import Page from 'modules/common/components/Page';

const SamplePage = () => {
    const location = useLocation();
    return <Page.Content>{location.pathname.toUpperCase().substring(1)} PAGE</Page.Content>;
};

export default SamplePage;
