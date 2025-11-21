import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../redux/store";
import { logout } from '../../redux/slices/userSlice';

function Home() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profile = useSelector((state: RootState) => state.onboarding.profile)

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome {profile?.name ?? "User"} </h1>
            <p>
                You have successfully completed onboarding.
            </p>
            <button
                onClick={handleLogout}
                style={{ padding: "6px", width: "250px", marginTop: "4px" }}
            >Logout</button>
        </div>
    )
}

export default Home
