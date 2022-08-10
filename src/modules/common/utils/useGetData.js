import { useState, useEffect } from 'react';

const useGetData = (data) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    });

    return { loading, data: loading ? undefined : data };
};

export default useGetData;
