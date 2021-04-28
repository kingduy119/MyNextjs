import React from 'react';
import DashBoard from '~/components/layout/Dashboard';

const IndexPage = ({pathname}) => {
    const name = pathname;
    return(
        <DashBoard />
    )
}



export default IndexPage;
