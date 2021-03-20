import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            // The signed-in user info.
            const { photoURL, displayName, email } = result.user;
            const signInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            return signInUser;
        })
        .catch((err) => {
            console.log(err);
            console.log(err.message);
        });
};

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            const { photoURL, displayName } = result.user;
            const signInUser = {
                isSignedIn: true,
                name: displayName,
                photo: photoURL,
                success: true
            };
            return signInUser;
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

export const handleSignOut = () => {
    return firebase
        .auth()
        .signOut()
        .then(() => {
            const signOutUser = {
                isSignedIn: false,
                name: "",
                email: "",
                photo: "",
                error: "",
                success: false
            };
            return signOutUser;
        })
        .catch((error) => {
            // An error happened.
        });
};


const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
    })
        .then(function () {
            // Update successful.
            console.log("update successfully");
            return name;
        })
        .catch(function (error) {
            // An error happened.
            console.log(error);
        });
};

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
            updateUserName(name);
            const newUserInfo = res.user;
            const { photoURL, displayName, email } = newUserInfo;
            const createNewUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            newUserInfo.error = "";
            newUserInfo.success = true;
            return createNewUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return newUserInfo;
        });
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((res) => {
            const newUserInfo = res.user;
            const { photoURL, displayName, email } = newUserInfo;
            const signInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true
            };
            newUserInfo.error = "";
            newUserInfo.success = true;
            return signInUser;
        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return newUserInfo
        });
};

