import React from "react";
import Slidebar from "../../components/shop/Slidebar";
import Topbar from "../../components/shop/Topbar";
import Content from "../../components/shop/Content";


class Page extends React.Component {
    render() {
        return (
            <div className="content" style={{ maxWidth: '1200px' }} >
                <title>Clothing Store Template</title>
                <Topbar />
                <Slidebar />
                <Content />
            </div>
        );
    }
}

export default Page;
