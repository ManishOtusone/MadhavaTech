import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        accountType: "User",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/api/signUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Signup successful! Please login.");
                navigate("/login");
            } else {
                toast.error(data.message || "Signup failed");
            }
        } catch (err) {
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div className="flex gap-3">
                        <input
                            name="firstName"
                            placeholder="First Name"
                            className="w-1/2 px-4 py-2 border rounded"
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            className="w-1/2 px-4 py-2 border rounded"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="accountType"
                        className="w-full px-4 py-2 border rounded"
                        onChange={handleChange}
                        value={form.accountType}
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
