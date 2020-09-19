import Head from "next/head";
import { withRouter } from "next/router";
import Button from "react-bootstrap/Button";


function Login() {
    return (
        <div style={{ textAlign: 'center', margin: '0 20px' }}>
            <Head>
                <title>Login to Builder Book</title>
                <meta name="description" content="Login page for builderbook.org" />
                <script src="https://apis.google.com/js/platform.js" async defer></script>
            </Head>
            <br />
            <p style={{ margin: '45px auto', fontSize: '44px', fontWeight: '400' }}>Log in</p>
            <p>You’ll be logged in for 14 days unless you log out manually.</p>
            <br />
            <Button variant="primary" href={`http://localhost:8000/v1/google`}>
                <img
                    src="https://storage.googleapis.com/builderbook/G.svg"
                    alt="Log in with Google"
                />
            Log in with Google
            </Button>
        </div>
    );
}

export default Login;
