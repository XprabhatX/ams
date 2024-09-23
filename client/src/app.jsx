import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layout/dashboard-layout";

import Login from "./pages/login";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import StudentReport from "./pages/student/report";
import StudentSession from "./pages/student/session";
import TeacherSession from "./pages/teacher/session";
import TeacherReport from "./pages/teacher/report";

import { ACCOUNT_TYPE } from "./libs/constants";

export default function App() {
    const { user } = useSelector((state) => state.auth);

    console.log(user);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />

                {/* Protected Routes */}
                <Route path="dashboard" element={<DashboardLayout />}>
                    <Route path="profile" element={<Profile />} />

                    {/* Student Routes */}
                    {user?.userType === ACCOUNT_TYPE.STUDENT && (
                        <Route path="student">
                            <Route path="session" element={<StudentSession />} />
                            <Route path="report" element={<StudentReport />} />
                        </Route>
                    )}
                    {/* Teacher Routes */}
                    {user?.userType === ACCOUNT_TYPE.TEACHER && (
                        <Route path="teacher">
                            <Route path="session" element={<TeacherSession />} />
                            <Route path="report" element={<TeacherReport />} />
                        </Route>
                    )}

                    <Route path="*" element={<Navigate to="/dashboard/profile" />} />
                </Route>

                {/* Redirect to login for unmatched routes */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
}
