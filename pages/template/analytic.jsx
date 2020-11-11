import React from "react";
import Slidebar from "../../components/analytics/Slidebar";
import Topnav from "../../components/analytics/Topnar";
import Content from "../../components/analytics/Content";



class Page extends React.Component {
    render() {
        return (
            <>
                <title>Analytics</title>
                <Topnav />
                <Slidebar />
                <Content />
            </>
        );
    }
}

export default Page;
