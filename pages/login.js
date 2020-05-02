import Head from "next/head";
import { withRouter } from "next/router";
import Button from "react-bootstrap/Button";

import withAuth from "../lib/withAuth";

function Login({ router }) {
    const redirectUrl = (router && router.query && router.query.redirectUrl) || '';
    console.log(redirectUrl);

    return (
        <div style={{ textAlign: 'center', margin: '0 20px' }}>
            <Head>
                <title>Log in to Builder Book</title>
                <meta name="description" content="Login page for builderbook.org" />
                <script src="https://apis.google.com/js/platform.js" async defer></script>
            </Head>
            <br />
            <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log in</p>
            <p>You’ll be logged in for 14 days unless you log out manually.</p>
            <br />
            <Button variant="primary" href={`/auth/google?redirecUrl=${redirectUrl}`}>
                <img
                    src="https://storage.googleapis.com/builderbook/G.svg"
                    alt="Log in with Google"
                    style={{ marginRight: '10px' }}
                />
      Log in with Google
    </Button>
        </div>
    );
}
export default withRouter(Login);
// export default withAuth(Login, { logoutRequired: true });
