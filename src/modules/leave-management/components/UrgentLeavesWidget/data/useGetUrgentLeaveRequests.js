import useGetData from 'modules/common/utils/useGetData';

import mocks from './mocks';

const useGetUrgentLeaveRequests = () => useGetData(mocks);

export default useGetUrgentLeaveRequests;
