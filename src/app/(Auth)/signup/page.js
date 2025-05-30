"use client";
import { apiUrl } from "@/app/lib/connection";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupPage() {
    const router = useRouter();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Form submitted:", form);

        fetch(`${apiUrl}signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                password: form.password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert("Signup successful!");
                    setForm({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                    router.push("/login"); // Redirect to login page after successful signup
                } else {
                    alert(data.message || "Signup failed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred during signup");
            });

        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                    >
                        Create Account
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
}