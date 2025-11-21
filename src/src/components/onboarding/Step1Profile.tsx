import React, { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../redux/store";
import { saveProfile } from '../../redux/slices/onboardingSlice';

function Step1Profile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const savedProfile = useSelector((state: RootState) => state.onboarding.profile);

    const [name, setName] = useState<string>(savedProfile?.name || "");
    const [age, setAge] = useState<string>(savedProfile?.age || "");
    const [email, setEmail] = useState<string>(savedProfile?.email || "");
    const [profilePic, setProfilePic] = useState<string>(savedProfile?.profilePic || "");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setProfilePic(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch(saveProfile({ name, age, email, profilePic }));
        navigate("/onboarding/step2Songs");
    };

    return (
        <div style={{ padding: "20px" }} >
            <h2 style={{ marginBottom: "16px" }} >Step 1: Personal Profile</h2>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>

                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>

                <div>
                    <label>Profile Picture: </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>

                {profilePic && (
                    <img
                        src={profilePic}
                        alt="Preview"
                        style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "16px"
                        }}
                    />
                )}

                <button
                    type="submit"
                    style={{ padding: "6px", width: "100px", marginTop: "4px" }}
                >Next</button>
            </form>
        </div>
    )
}

export default Step1Profile;
