import React from "react";
import { connect } from "react-redux";
import { 
    InputUsername, InputPassword
} from "./Inputs";
import { 
    ButtonLogin,
    ButtonGoogle, ButtonFacebook, ButtonTwitter
} from "./Buttons";

// class LoginComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             unname: '',
//             pwd: '',
//         }
//     }
//     render() { return (<> </>); }
// }

const LoginComponent = (props) => {

    let [uname, setUname] = React.useState('');
    let [pwd, setPwd] = React.useState('');
    let [error, setError] = React.useState('');

    const onLogin = (uname, pwd, setError) => e => {
        // err = sendRequest({uname, pwd});
        // if(err) setError(message) return e.prevent();
        alert(`${uname} - ${pwd}`);
    }

    const btnFacebook = <ButtonFacebook />
    const btnTwitter = <ButtonTwitter />
    const btnGoogle = <ButtonGoogle />

    const inUsername = <InputUsername onChange={e => setUname(e.target.value)} />;
    const inPassword = <InputPassword onChange={e => setPwd(e.target.value)} />;
    const btnLogin = <input
        type="submit"
        value="Login"
        className="form-control my-white my-bg-green"
    />

    return (
    <form onSubmit={() => onLogin(uname, pwd, setError)}>
        <div className="row" style={{padding: "30px"}}>
            <h2 className="text-center" style={{width: "100%"}}
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








