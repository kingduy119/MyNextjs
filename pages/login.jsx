import React from "react";
import { LoginFormComponent, SignupFormComponent, ForgotFormComponent } from "../components/SocialForm";

function SocialAuthenticateComponent(props) {
    let [showSignup, setShowSignup] = React.useState(false);
    let [showForgot, setShowForgot] = React.useState(false);
    let onSigupShowOrClose = () => setShowSignup(!showSignup);
    let onForgotShowOrClose = () => setShowForgot(!showForgot);

    if (showSignup && !showForgot) return <SignupFormComponent onCancel={onSigupShowOrClose} />;
    if (!showSignup && showForgot) return <ForgotFormComponent onCancel={onForgotShowOrClose} />;

    return (
        <LoginFormComponent
            onShowSignupForm={onSigupShowOrClose}
            onShowForgotForm={onForgotShowOrClose}
        />
    )
}


export default SocialAuthenticateComponent;


