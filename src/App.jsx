import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Signin } from "./pages/Signin";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" replace />} />
                <Route path="/signin" element={!isAuthenticated ? <Signin /> : <Navigate to="/dashboard" replace />} />

                {/* Private Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    {/* Redirect any other path to the dashboard */}
                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Route>

                {/* Fallback Route */}
                <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/signin"} replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
