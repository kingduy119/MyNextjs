import React from 'react';
import DashBoard from '~/layouts/DashboardLayout';

const IndexPage = ({pathname}) => {
    const name = pathname;
    return(
        <DashBoard />
    )
}

export default IndexPage;
