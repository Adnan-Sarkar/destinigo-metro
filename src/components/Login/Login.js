import { useContext, useState } from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
    handleGoogleSignIn,
    initializeLoginFramework,
    handleFbSignIn,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "./LoginManager";

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: "",
        error: "",
        success: false,
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        setNewUser(!newUser);
    };

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const fbSignIn = () => {
        handleFbSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 3;
            const isPasswordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && isPasswordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(
                user.name,
                user.email,
                user.password
            ).then((res) => {
                console.log(res);
                handleResponse(res, true);
            });
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password).then(
                (res) => {
                    handleResponse(res, true);
                }
            );
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <br />
            {user.isSignedIn && (
                <div>
                    <h1>Welcome, {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            )}
            <br />
            <div className="container">
                <form onSubmit={handleSubmit} className="my-form">
                    {newUser ? <h2>Create an Account</h2> : <h2>Login</h2>}
                    {newUser && (
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onBlur={handleBlur}
                            placeholder="Enter Your Name"
                            required
                        />
                    )}
                    <br />
                    <input
                        className="form-control"
                        type="text"
                        name="email"
                        onBlur={handleBlur}
                        placeholder="Enter Your Email"
                        required
                    />
                    <br />
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        onBlur={handleBlur}
                        placeholder="Enter Your Password"
                        required
                    />
                    <br />
                    <input
                        className="btn btn-success"
                        type="submit"
                        value={newUser ? "Create an Account" : "Login"}
                    />
                    <p>
                        Already have an account?{" "}
                        <span onClick={handleLogin}>
                            {newUser ? "Login" : "Create an Account"}
                        </span>
                    </p>
                </form>
                <p className="divider">Or</p>
                <br />
                <button
                    className="google-fb-button google"
                    onClick={googleSignIn}
                >
                    <FontAwesomeIcon className="social-icon" icon={faGoogle} />
                    Sign In With Google
                </button>
                <br />
                <button
                    className="google-fb-button facebook"
                    onClick={fbSignIn}
                >
                    <FontAwesomeIcon
                        className="social-icon"
                        icon={faFacebookF}
                    />{" "}
                    Sign In With Facebook
                </button>
                <br />
            </div>
            <h2 style={{ color: "red" }}>{user.error}</h2>
        </div>
    );
}
export default Login;
