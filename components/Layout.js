import React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";



class Layout extends React.Component {
    render() {

        const { children } = this.props;

        return (
            <>
                <Header />
                <Body pageContent={children} />
                {/* {children} */}
                <Footer />
            </>
        );
    }
}

export default Layout;