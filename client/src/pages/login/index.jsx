import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaLock,
    FaUserGraduate,
    FaChalkboardTeacher,
} from "react-icons/fa";
import { FORGET_PASSWORD } from '../../libs/constants/router-links'

export default function Login() {
    const [userType, setUserType] = useState("student");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // add the backend login or authentication logic here -- (for now, don't do anything)

        console.log("Login attempt", { userType, username, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#5856A1]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md max-sm:mx-2">
                <h1 className="text-2xl font-bold text-center text-[#5856A1] mb-6">
                    Attendance Management System
                </h1>

                <div className="relative mb-6 bg-gray-200 rounded-md p-1">
                    <div
                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#5856A1] rounded transition-all duration-300 ease-in-out"
                        style={{
                            transform: `translateX(${userType === "teacher" ? "100%" : "0"})`,
                        }}
                    />
                    <div className="relative flex">
                        <button
                            className={`flex items-center justify-center w-1/2 py-2 rounded-md transition-colors duration-300 ${
                                userType === "student"
                                    ? "text-white"
                                    : "text-[#5856A1]"
                            }`}
                            onClick={() => setUserType("student")}
                        >
                            <FaUserGraduate className="mr-2" />
                            Student
                        </button>
                        <button
                            className={`flex items-center justify-center w-1/2 py-2 rounded-md transition-colors duration-300 ${
                                userType === "teacher"
                                    ? "text-white"
                                    : "text-[#5856A1]"
                            }`}
                            onClick={() => setUserType("teacher")}
                        >
                            <FaChalkboardTeacher className="mr-2" />
                            Teacher
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <FaUser className="absolute top-3 left-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5856A1]"
                            required
                        />
                    </div>
                    <div className="relative">
                        <FaLock className="absolute top-3 left-3 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5856A1]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#5856A1] text-white py-2 rounded-md hover:bg-opacity-90 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Forgot your password?{" "}

                    <Link to={FORGET_PASSWORD} className="text-[#5856A1] hover:underline">
                        Reset here
                    </Link>
                </p>
            </div>
        </div>
    );
}