import { Route, Routes } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import Nav from "./components/Nav";
import Nav_sm from "./components/Nav_sm";
import { Signup } from "./Pages/Signup";
import Services from "./Pages/Services";
import DiseasePrediction from "./Pages/DiseasePrediction";
import Profile from "./Pages/Profile";
import Chatbot from "./components/chatbot/Chatbot";
import DoctorRecommed from "./Pages/DoctorRecommed";

function App() {
  return (
    <div className="bg-background dark:bg-gray-900 overflow-hidden scrollbar-hide">
      <Nav />
      {/*<Chattbot />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/predict" element={<DiseasePrediction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bot" element={<Chatbot />} />
        <Route path="/recommend" element={<DoctorRecommed />} />
      </Routes>
      <Nav_sm />
    </div>
  );
}

export default App;
