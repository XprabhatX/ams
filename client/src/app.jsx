import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>;
}
