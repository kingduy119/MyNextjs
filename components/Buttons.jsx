// #Button
export const ButtonSubmit = (props) => (
    <button
        type="submit"
        className="btn btn-primary"
    >Submit</button>);

export const ButtonClose = (props) => (
    <button
        type="button"
        className="close"
        data-dismiss="modal"
    >&times;</button>);

export const ButtonCloseModal = (props) => (
    <button
        type="button"
        className="btn btn-danger"
        data-dismiss="modal"
    >Close</button>);

export const ButtonGoogle = (props) => (
    <a href="#" className={`
        form-control
        my_google
        my_text-left
    `}>
        <i className="fab fa-google" 
        /> Login with Google
    </a>);

export const ButtonFacebook = (props) => (
    <a href="#" className={`
        form-control
        my_facebook
        my_text-left
    `}>
        <i className="fab fa-facebook" 
        /> Login with Facebook
    </a>);

export const ButtonTwitter = (props) => (
    <a href="#" className={`
        form-control
        my_twitter 
        my_text-left
    `}>
        <i className="fab fa-twitter" 
        /> Login with Twitter
    </a>);

export const ButtonLogin = (props) => (
    <input
        type="submit"
        value="Login"
        className="form-control my_white my_bg-green"
    />);
