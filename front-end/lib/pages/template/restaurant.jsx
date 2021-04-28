import React from "react";
import Head from "next/head"
import MenuMain from "../../components/template/restaurant/MenuMain";
import MenuModal from "../../components/template/restaurant/MenuModal";
import ContactModal from "../../components/template/restaurant/ContactModal";

class Page extends React.Component {
    render() {
        return (<>
            <Head>
                <title>Restaurant Index Template</title>
            </Head>
            <MenuMain />
            <MenuModal />
            <ContactModal />
        </>);
    }
}


export default Page;
