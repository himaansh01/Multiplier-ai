import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bottom } from "../components/Bottom";

export const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <h1 className="text-2xl font-bold mb-4 pt-4">Sign in</h1>
                    <p className="text-sm text-gray-600 mb-6">Enter your credentials to access your account</p>
                    <InputBox onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="john@gmail.com" />
                    <InputBox onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="12345678" type="password" />
                    <div className="pt-4">
                        <Button
                            onClick={async () => {
                                const response = await axios.post("http://localhost:3000/signin", { email, password });
                                localStorage.setItem("token", response.data.token);
                                navigate("/dashboard",{replace : true});;
                            }}
                            label="Sign in"
                        />
                    </div>
                    <Bottom label="Don't have an account?" buttonText="Sign up" to="/signup" />
                </div>
            </div>
        </div>
    );
};
