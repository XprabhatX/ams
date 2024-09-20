import { useState } from "react";
import { Link } from 'react-router-dom';
import {
    FaUser,
    FaLock,
    FaUserGraduate,
    FaChalkboardTeacher,
} from "react-icons/fa";
import { LOGIN_URL } from "../../libs/constants/router-links";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("student");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign-up attempt", { username, password, userType });
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white">
            <div className="md:w-1/2 bg-[#5856A1] flex items-center justify-center p-8">
                <div className="text-white max-w-md">
                    <h1 className="text-4xl font-bold mb-4">Welcome to AMS</h1>
                    <p className="text-xl mb-8">
                        Join our Attendance Management System and streamline
                        your educational experience.
                    </p>
                    <div className="w-full h-64 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">
                            Illustration Placeholder
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold text-[#5856A1] mb-8 text-center">
                        Create Your Account
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Username
                            </label>
                            <div className="relative">
                                <FaUser className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    id="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5856A1]"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <FaLock className="absolute top-3 left-3 text-gray-400" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5856A1]"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                I am a
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => setUserType("student")}
                                    className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center ${
                                        userType === "student"
                                            ? "bg-[#5856A1] text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    } transition-colors duration-300`}
                                >
                                    <FaUserGraduate className="mr-2" />
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setUserType("teacher")}
                                    className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center ${
                                        userType === "teacher"
                                            ? "bg-[#5856A1] text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    } transition-colors duration-300`}
                                >
                                    <FaChalkboardTeacher className="mr-2" />
                                    Teacher
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#5856A1] text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300 font-medium"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to={LOGIN_URL}
                            className="text-[#5856A1] hover:underline font-medium"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
