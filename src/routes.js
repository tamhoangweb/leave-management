import SamplePage from './modules/other/pages/SamplePage';
import LeaveManagementDashboard from './modules/leave-management/pages/Dashboard';

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

export const mainRoutes = [
    {
        path: '/',
        activeIcon: HomeFilled,
        icon: Home,
        title: 'Home',
        ContentComponent: SamplePage,
    },
    {
        path: '/leave-management',
        activeIcon: ClipboardFilled,
        icon: Clipboard,
        title: 'Leave Management',
        ContentComponent: LeaveManagementDashboard,
    },
    {
        path: '/documents',
        activeIcon: BooksFilled,
        icon: Books,
        title: 'Documents',
        ContentComponent: SamplePage,
    },
    {
        path: '/settings',
        activeIcon: CogFilled,
        icon: Cog,
        title: 'Settings',
        ContentComponent: SamplePage,
    },
];
