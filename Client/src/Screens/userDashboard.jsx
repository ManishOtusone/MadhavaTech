// ./Screens/userDashboard.jsx
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navbar } from "../Components/Navbar";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const UserDashboard = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserQueries = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/api/user/queries`, {
                    credentials: "include", // important for cookie auth
                });

                const data = await res.json();

                if (res.ok) {
                    setQueries(data.data);
                } else {
                    toast.error(data.message || "Failed to load your queries");
                }
            } catch (err) {
                toast.error("Server error while loading queries");
            } finally {
                setLoading(false);
            }
        };

        fetchUserQueries();
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen px-6 pt-24 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Your Submitted Queries</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : queries.length === 0 ? (
                    <p>No queries found.</p>
                ) : (
                    <div className="space-y-4">
                        {queries.map((query) => (
                            <div key={query._id} className="p-4 border rounded bg-white shadow">
                                <p><strong>Subject:</strong> {query.subject}</p>
                                <p><strong>Message:</strong> {query.message}</p>
                                <p><strong>Status:</strong> <span className="capitalize">{query.status}</span></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default UserDashboard;
