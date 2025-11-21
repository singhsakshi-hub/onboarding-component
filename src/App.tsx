
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Step1Profile from "./components/onboarding/Step1Profile";
import Step2Songs from "./components/onboarding/Step2Songs";
import Step3Payment from "./components/onboarding/Step3Payment";
import Step4Success from "./components/onboarding/Step4Success";
import Home from "./components/Home/Home";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding/step1Profile" element={<Step1Profile />} />
        <Route path="/onboarding/step2Songs" element={<Step2Songs />} />
        <Route path="/onboarding/step3Payment" element={<Step3Payment />} />
        <Route path="/onboarding/step4Success" element={<Step4Success />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  )
}

export default App
