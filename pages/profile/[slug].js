import React from "react";
import { useRouter } from "next/router";

function Profile(props) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <h2>Page {slug}</h2>
            <span onClick={() => router.push('/profile/info')}>Click</span>
        </>
    );
}


export default Profile;