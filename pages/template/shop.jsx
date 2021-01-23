import React from "react";
import Slidebar from "../../components/template/shop/Slidebar";
import Topbar from "../../components/template/shop/Topbar";
import Content from "../../components/template/shop/Content";


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
