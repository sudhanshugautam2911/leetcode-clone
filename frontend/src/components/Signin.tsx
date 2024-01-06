import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { app } from "../utils/firebase";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user";


const provider = new GoogleAuthProvider();

export const Signin = () => {

    const auth = getAuth(app);
    const setUser = useSetRecoilState(userAtom);

    // on SignIn
    async function onSignin() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential?.accessToken;
                // const user = result.user;
            }).catch((error: unknown) => {
                console.log("Error in login: ", error)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, function (user) {
            if (user && user.email && user.displayName) {
                setUser({
                    loading: false,
                    user: {
                        email: user.email,
                        name: user.displayName,
                    }
                })
                console.log('This is the user: ', user);
            } else {
                setUser({
                    loading: false,
                })
                console.log("There is no logged in user");
            }
        });
    }, [])

    return (

        <>
            <button onClick={onSignin} className="bg-black rounded-full font-medium hover:bg-white hover:text-black border border-black transition duration-300 text-sm text-white p-2 px-4">
                Sign In
            </button>
        </>
    )
}