import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from "../../redux/store";
import { useState } from 'react';
import { savePayment } from '../../redux/slices/onboardingSlice';
import { useNavigate } from 'react-router-dom';


function Step3Payment() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const storedPayment = useSelector((state: RootState) => state.onboarding.payment);

    const [cardNumber, setcardNumber] = useState<string>(storedPayment?.cardNumber || "");
    const [expiry, setExpiry] = useState<string>(storedPayment?.expiry || "");
    const [cvv, setCvv] = useState<string>(storedPayment?.cvv || "");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            savePayment({
                cardNumber,
                expiry,
                cvv
            })
        )
        navigate("/onboarding/step4Success");
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Payment Details</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Card Number: </label>
                    <input
                        type='text'
                        placeholder='enter card number'
                        value={cardNumber}
                        onChange={(e) => setcardNumber(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>
                <div>
                    <label>Expiry Date: </label>
                    <input
                        type='text'
                        placeholder='MM/YY'
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>
                <div>
                    <label>CVV: </label>
                    <input
                        type='text'
                        placeholder='enter CVV'
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        style={{ padding: "6px", width: "250px", marginTop: "4px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "6px", width: "100px", marginTop: "4px" }} >Next</button>

            </form>
        </div>
    )
}

export default Step3Payment
