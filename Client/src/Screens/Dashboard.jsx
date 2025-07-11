import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navbar } from "../Components/Navbar";

const AdminDashboard = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchQueries = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/admin/queries", {
                credentials: "include",
            });
            const data = await res.json();
            if (res.ok) {
                setQueries(data.data);
            } else {
                toast.error(data.message || "Failed to load queries");
            }
        } catch (error) {
            toast.error("Error fetching queries");
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (id, status) => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/admin/queries/${id}/status`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({ status }),
                }
            );

            const data = await res.json();
            if (res.ok) {
                toast.success("Status updated!");
                fetchQueries(); // Refresh list
            } else {
                toast.error(data.message || "Failed to update status");
            }
        } catch (err) {
            toast.error("Something went wrong while updating status");
        }
    };

    useEffect(() => {
        fetchQueries();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
                    Admin Dashboard
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center mt-16">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                    </div>
                ) : queries.length === 0 ? (
                    <p className="text-center text-gray-500 mt-8">No queries found.</p>
                ) : (
                    <div className="overflow-auto rounded-lg shadow border bg-white">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700 font-semibold">
                                <tr>
                                    <th className="px-4 py-3 text-left">Name</th>
                                    <th className="px-4 py-3 text-left">Email</th>
                                    <th className="px-4 py-3 text-left">Subject</th>
                                    <th className="px-4 py-3 text-left">Message</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Update</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {queries.map((query, index) => (
                                    <tr
                                        key={query._id}
                                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                    >
                                        <td className="px-4 py-3">{query.name}</td>
                                        <td className="px-4 py-3">{query.email}</td>
                                        <td className="px-4 py-3">{query.subject}</td>
                                        <td className="px-4 py-3 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                            {query.message}
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${query.status === "pending"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : query.status === "in-progress"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "bg-green-100 text-green-700"
                                                    }`}
                                            >
                                                {query.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <select
                                                value={query.status}
                                                onChange={(e) =>
                                                    handleStatusChange(query._id, e.target.value)
                                                }
                                                className="border border-gray-300 rounded px-2 py-1 text-sm"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="in-progress">In Progress</option>
                                                <option value="resolved">Resolved</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
