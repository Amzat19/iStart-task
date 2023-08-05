import { Route, Routes } from "react-router";
import LoginOrSignUp from "./pages/LoginOrSignup";
import Dashboard from "./pages/dashboard";
import { SigninLayout } from "./components/SigninLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SigninLayout />}>
                <Route index element={<LoginOrSignUp />} />
            </Route>
            <Route element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default App;