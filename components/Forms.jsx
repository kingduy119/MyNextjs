import { connect } from "react-redux";
import { 
    InputUsername, InputPassword,
    InputUsernameValidate, InputPasswordValidate 
} from "./Inputs";
import {} from "./Buttons";

const LoginComponent = (props) => {

    const facebook = <a
        href="#"
        className="facebook btn"
    >
        <i className="fab fa-facebook-f"></i> Login with Facebook
    </a>;
    const twitter = <a
        href="#"
        className="twitter btn"
    >
        <i className="fab fa-twitter"></i> Login with Twitter
    </a>;
    const google = <a
        href="#"
        className="google btn"
    >
        <i className="fab fa-google"></i> Login with Google
    </a>;

    const username = <InputUsername />;
    const passsword = <InputPassword />;

    const login = <div>...</div>

    return (
    <form>
        <div className="row">
            <h2>Login with Social Media or Manually</h2>
            
            <div className="col-sm">
                {facebook}
                {twitter}
                {google}
            </div>
            <div className="col-sm">
                {username}
                {passsword}
            </div>
        </div>
    </form>);
}
export const FormLogin = connect()(LoginComponent);








