import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from "../../redux/store";
import { Field, FieldArray, Form, Formik } from 'formik';
import { saveSongsToOnboarding } from '../../redux/slices/onboardingSlice';
import { useNavigate } from 'react-router-dom';

function Step2Songs() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const savedSongs = useSelector((state: RootState) => state.onboarding.songs);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Step 2: Favorite Songs</h2>
            <Formik
                initialValues={{ songs: savedSongs.length ? savedSongs : [""] }}
                onSubmit={(values) => {
                    dispatch(saveSongsToOnboarding(values.songs));
                    navigate("/onboarding/step3Payment");
                }}
            >
                {({ values }) => (
                    <Form>
                        <FieldArray name="songs">
                            {({ push, remove }) => (

                                <div style={{ marginBottom: "20px" }}>
                                    {values.songs.map((_song, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                marginBottom: "10px",
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "center"
                                            }}
                                        >
                                            <Field
                                                name={`songs[${index}]`}
                                                placeholder="Enter favorite song"
                                                style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                                            />

                                            {values.songs.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => push("")}
                                        style={{ padding: "6px", width: "150px", marginTop: "4px" }}
                                    >
                                        + Add Song
                                    </button>

                                </div>
                            )}
                        </FieldArray>
                        <button
                            type="submit"
                            style={{ padding: "6px", width: "100px", marginTop: "4px" }}
                        >
                            Next
                        </button>
                    </Form>

                )}


            </Formik>

        </div >
    )
}

export default Step2Songs
