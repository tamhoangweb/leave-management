import React from 'react';
import Page from 'modules/common/components/Page';
import Grid from 'modules/common/components/Grid';
import UrgentLeavesWidget from '../components/UrgentLeavesWidget';
import LeavePlanChartWidget from '../components/LeavePlanChartWidget';

const Dashboard = () => {
    return (
        <Page.Content>
            Dashboard Page
            <Grid>
                <Grid.Item span={6}>
                    <UrgentLeavesWidget />
                </Grid.Item>
                <Grid.Item span={6}>
                    <LeavePlanChartWidget />
                </Grid.Item>
            </Grid>
        </Page.Content>
    );
};

export default Dashboard;
