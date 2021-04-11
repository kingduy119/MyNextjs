import React from "react";
import { connect } from "react-redux";
import { 
    InputUsernameValidate, InputPasswordValidate,
} from "./Inputs";
import { 
    ButtonGoogle, ButtonFacebook, ButtonTwitter
} from "./Buttons";

const LoginComponent = (props) => {
    let [uname, setUname] = React.useState('');
    let [pwd, setPwd] = React.useState('');



    return (
    <form>
        <div className="row" style={{padding: "30px"}}>
            <h2 className="text-center" style={{width: "100%"}}
            >Login with Social Media or Manually</h2>
            
            <div className="col-sm-6">
                <div className="form-group">
                    <ButtonFacebook />
                </div>
                <div className="form-group">
                    <ButtonTwitter />
                </div>
                <div className="form-group">
                    <ButtonGoogle />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="form-group">
                    <InputUsernameValidate 
                        isValid={uname.length >= 6}
                        onChange={e => setUname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <InputPasswordValidate 
                        isValid={pwd.length >= 6}
                        onChange={e => setPwd(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Login"
                        className="form-control btn btn-success"
                    />
                </div>
            </div>
        </div>
    </form>);
}
export const FormLogin = connect()(LoginComponent);








