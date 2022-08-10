import Button from 'modules/common/components/Button';
import Flexbox from 'modules/common/components/Flexbox';
import UserBadge from 'modules/common/components/UserBadge';
import { colors, typography } from 'modules/common/utils/styles';
import styled from 'styled-components';

const StyledReason = styled.p`
    ${typography.size.small}
    color: ${colors.gray1};
    margin: 1rem 0 0 0;
`;
console.log('LeaveRequest');
const LeaveRequest = ({ user, reason }) => {
    return (
        <>
            <Flexbox alignItems="center" justifyContent="space-between">
                <UserBadge user={user} />
                <Button
                    // onClick={() => {
                    //     showSuccess(`You have acknowledged the request!`);
                    // }}
                    label="Acknowledge"
                    size="medium"
                />
            </Flexbox>
            <StyledReason>{reason}</StyledReason>
        </>
    );
};

export default LeaveRequest;
