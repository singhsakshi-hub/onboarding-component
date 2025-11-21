import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { markComplete } from '../../redux/slices/onboardingSlice';

function Step4Success() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(markComplete());
  }, [dispatch]);

  const goToHome = () => {
    navigate('/home')
  }

  const goBack = () => {
    navigate('/onboarding/step3Payment')
  }

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h1>Onboarding Complete!</h1>
        <p>Your profile is fully set up and ready to use</p>
      </div>
      <div>
        <button
          onClick={goToHome}
          style={{ padding: "6px", width: "250px", marginTop: "4px" }}
        >
          Go to Home
        </button>
      </div>
      <div>
        <button
          onClick={goBack}
          style={{ padding: "6px", width: "250px", marginTop: "4px" }}
        >
          Go Back
        </button>
      </div>
    </div>

  )
}

export default Step4Success
