import React from "react";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";



class Layout extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body pageContent={Page} />
                <Footer />
            </>
        );
    }
}

export default Layout;