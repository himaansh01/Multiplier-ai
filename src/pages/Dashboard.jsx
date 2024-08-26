import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Simulate an async operation like fetching user data
                const token = localStorage.getItem("token");
                if (!token) {
                    // If no token, redirect to sign-in
                    navigate("/signin", { replace: true });
                }
                // Simulate an async operation
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } catch (err) {
                // Handle any errors
                setError(err.message);
                navigate("/signin", { replace: true });
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-4">Loading...</h1>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-2xl font-bold mb-4">Error: {error}</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/signin", { replace: true });
                    }}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                    Log out
                </button>
            </div>
        </div>
    );
};
