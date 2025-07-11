import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../Components/Auth";

const Login = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
        accountType: "User",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/logIn", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Logged in successfully!");
                setIsLoggedIn(true);

                // Optional: Redirect based on role
                form.accountType === "Admin"
                    ? navigate("/admin")
                    : navigate("/dashboard");
            } else {
                toast.error(data.message || "Login failed");
            }
        } catch (err) {
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <select
                        name="accountType"
                        value={form.accountType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
