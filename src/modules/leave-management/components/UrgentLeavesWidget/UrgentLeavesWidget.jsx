import React from 'react';
import styled from 'styled-components';

import Box from 'modules/common/components/Box';
import { colors, typography } from 'modules/common/utils/styles';
import mocks from './data/mocks';
import Slider from 'modules/common/components/Slider';
import LeaveRequest from './LeaveRequest';
import useGetUrgentLeaveRequests from './data/useGetUrgentLeaveRequests';

const WidgetHeader = styled.span`
    display: block;
    color: ${colors.gray1};
    ${typography.weight.semibold};
    ${typography.size.large};
    margin-bottom: 1.5rem;
`;
const UrgentLeavesWidget = () => {
    const { loading, data: urgentLeaveRequests } = useGetUrgentLeaveRequests();

    if (loading) {
        return <Box>Loading....</Box>;
    }
    return (
        <Box>
            <WidgetHeader>Urgent leave requests ({urgentLeaveRequests.length})</WidgetHeader>
            <Slider>
                {urgentLeaveRequests.map((leaveRequest) => (
                    <LeaveRequest key={leaveRequest.id} user={leaveRequest.user} reason={leaveRequest.reason} />
                ))}
            </Slider>
        </Box>
    );
};

export default UrgentLeavesWidget;
