import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../utils/firebase";


const provider = new GoogleAuthProvider();

export const Signin = () => {

    const auth = getAuth(app);
    const [email, setEmail] = useState("");

    // on SignIn
    async function onSignin() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, function (user) {
            if(user) {
                console.log('This is the user: ', user);
            } else {
                console.log("There is no logged in user");
            }
        });
    }, [])

    return (

        <>
            <button onClick={onSignin}>
                SignUp
            </button>
        </>
    )
}