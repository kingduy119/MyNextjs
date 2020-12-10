import React from "react";
import Slidebar from "../../components/template/analytics/Slidebar";
import Topnav from "../../components/template/analytics/Topnav";
import Content from "../../components/template/analytics/Content";



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
