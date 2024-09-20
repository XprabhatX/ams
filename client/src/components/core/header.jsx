import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { FaRegBell } from "react-icons/fa";

import { PROFILE_URL } from "../../libs/constants/router-links";

export default function Header() {
    const [notifications, setNotifications] = useState(0);
    const { user } = useSelector((state) => state.auth);

    return (
        <header className="flex justify-between items-center p-4">
            <div className="relative">
                <FaRegBell className="size-8" />
                <span className="absolute top-0 right-0 flex items-center justify-center size-5 font-semibold pb-0.5 text-xs text-white bg-red-500 rounded-full">
                    {notifications}
                </span>
            </div>
            
            <h1 className="text-black font-semibold text-xl">
                {user?.name}
            </h1>

            <Link to={PROFILE_URL}>
                <img src={user?.imageUrl} alt={user?.name} className="size-11 rounded-full" />
            </Link>
        </header>
    );
}
