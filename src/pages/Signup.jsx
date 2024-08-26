import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import axios from "axios";
import { Bottom } from "../components/Bottom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-6 shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Sign up</h1>
                    <p className="text-sm text-gray-600 mb-6">Enter your information to create an account</p>
                    <InputBox onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="john@gmail.com" />
                    <InputBox onChange={(e) => setUsername(e.target.value)} label="Username" placeholder="John" />
                    <InputBox onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="12345678" type="password" />
                    <div className="pt-4">
                        <Button
                            onClick={async () => {
                                const response = await axios.post("http://localhost:3000/signup", { email, username, password });
                                localStorage.setItem("token", response.data.token);
                                navigate("/dashboard");
                            }}
                            label="Sign up"
                        />
                    </div>
                    <Bottom label="Already have an account?" buttonText="Sign in" to="/signin" />
                </div>
            </div>
        </div>
    );
};
