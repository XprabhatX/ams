import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";

import { FaWifi } from "react-icons/fa";
import { MdOutlineStickyNote2, MdMenu } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

import { ACCOUNT_TYPE } from "../../libs/constants";
import {
    STUDENT_SESSION_URL,
    TEACHER_SESSION_URL,
    STUDENT_REPORT_URL,
    TEACHER_REPORT_URL,
} from "../../libs/constants/router-links";

export default function Navbar() {
    const { user } = useSelector((state) => state.auth);

    return (
        <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-black px-4 py-2 shadow-lg sm:px-6">
            <div className="flex items-center justify-around [&>*]:cursor-pointer">
                <NavLink
                    to={
                        user?.userType === ACCOUNT_TYPE.STUDENT
                            ? STUDENT_SESSION_URL
                            : TEACHER_SESSION_URL
                    }
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center gap-1 transition-colors text-[#6C6BC7]"
                            : "flex flex-col items-center gap-1 transition-colors"
                    }
                >
                    <FaWifi className="size-7 rotate-90" />
                    {/* <span className="text-xs font-medium">Home</span> */}
                </NavLink>
                <NavLink
                    to={
                        user?.userType === ACCOUNT_TYPE.STUDENT
                            ? STUDENT_REPORT_URL
                            : TEACHER_REPORT_URL
                    }
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center gap-1 transition-colors text-[#6C6BC7]"
                            : "flex flex-col items-center gap-1 transition-colors"
                    }
                >
                    <MdOutlineStickyNote2 className="size-7" />
                    {/* <span className="text-xs font-medium">Explore</span> */}
                </NavLink>
                <NavLink
                    to="profile"
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center gap-1 transition-colors text-[#6C6BC7]"
                            : "flex flex-col items-center gap-1 transition-colors"
                    }
                >
                    <IoPersonCircleOutline className="size-7" />
                    {/* <span className="text-xs font-medium">Profile</span> */}
                </NavLink>
                <NavLink
                    to="settings"
                    className={({ isActive }) =>
                        isActive
                            ? "flex flex-col items-center gap-1 transition-colors text-[#6C6BC7]"
                            : "flex flex-col items-center gap-1 transition-colors"
                    }
                >
                    <MdMenu className="size-7" />
                    {/* <span className="text-xs font-medium">Settings</span> */}
                </NavLink>
            </div>
        </nav>
    );
}
