import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atoms/user";
import { Signin } from "./Signin";
import { getAuth, signOut } from "firebase/auth";

export const Topbar = () => {
    const user = useRecoilValue(userAtom);
    const auth = getAuth();

    const tobarItems = [
        {
            title: 'Problems',
            route: '/problems'
        },
        {
            title: 'Activity',
            route: '/activity'
        },
        {
            title: 'Leaderboard',
            route: '/leaderboard'
        },
        {
            title: 'About',
            route: '/about'
        }
    ]

    function onSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("sign out done");

        }).catch((error: unknown) => {
            console.log("Error in sign out: ", error)
        });
    }




    return (
        <div className="bg-zinc-800 p-1 flex justify-center items-center">
            <div className="max-w-screen-lg w-full space-x-3 flex items-center justify-between p-2">
                <div className="flex items-center space-x-10">
                    <img src="/logo2.png" className="w-12 rounded-md" alt="logo"/>
                    {tobarItems.map((item) => (
                        <p className="cursor-pointer text-zinc-400 text-sm hover:text-white font-medium">{item.title}</p>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    {!user?.user?.email ? (
                        <Signin />
                    ) : (
                        <p className="text-sm">{user?.user?.name}</p>
                    )}
                    {user?.user?.email && (
                        <button onClick={onSignOut} className="border border-black text-sm p-2 px-4 font-medium rounded-full hover:bg-black hover:text-white">Sign out</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}