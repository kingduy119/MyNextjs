import { connect } from "react-redux";
import { 
    InputUsername, InputPassword,
    InputUsernameValidate, InputPasswordValidate 
} from "./Inputs";
import { 
    ButtonSubmit,ButtonLogin,
    ButtonGoogle, ButtonFacebook, ButtonTwitter
} from "./Buttons";

const LoginComponent = (props) => {

    const btnFacebook = <ButtonFacebook />
    const btnTwitter = <ButtonTwitter />
    const btnGoogle = <ButtonGoogle />

    const inUsername = <InputUsername />;
    const inPassword = <InputPassword />;
    const btnLogin = <ButtonLogin />;

    return (
    <form>
        <div className="row" style={{padding: "30px"}}>
            <h2 className="my_text-center" style={{width: "100%"}}
            >Login with Social Media or Manually</h2>
            
            <div className="col-sm-6">
                <div className="form-group">
                    {btnFacebook}
                </div>
                <div className="form-group">
                    {btnTwitter}
                </div>
                <div className="form-group">
                    {btnGoogle} 
                </div>
            </div>
            <div className="col-sm-6">
                <div className="form-group">
                    {inUsername}
                </div>
                <div className="form-group">
                    {inPassword}
                </div>
                <div className="form-group">
                    {btnLogin}
                </div>
            </div>
        </div>
    </form>);
}
export const FormLogin = connect()(LoginComponent);








