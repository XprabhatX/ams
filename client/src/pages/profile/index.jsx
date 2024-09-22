import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUser, FaEnvelope, FaEdit, FaSave } from "react-icons/fa";

export default function Profile() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated profile to your backend
        console.log("Updated profile:", user);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile((prev) => ({
                    ...prev,
                    profileImage: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#5856A1] p-4 text-white text-center">
                    <h1 className="text-2xl font-bold">User Profile</h1>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32 mb-4">
                            <img
                                src={profile.imageUrl}
                                alt="Profile"
                                className="w-full h-full rounded-full object-cover"
                            />
                            {isEditing && (
                                <label
                                    htmlFor="profileImage"
                                    className="absolute bottom-0 right-0 bg-[#5856A1] text-white p-2 rounded-full cursor-pointer"
                                >
                                    <FaEdit />
                                    <input
                                        type="file"
                                        id="profileImage"
                                        name="profileImage"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaUser className="text-gray-400 mr-2" />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="username"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                            ) : (
                                <span className="flex-1">
                                    {profile.name}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center">
                            <FaUser className="text-gray-400 mr-2" />
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="username"
                                    value={profile.username}
                                    onChange={handleInputChange}
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                            ) : (
                                <span className="flex-1">
                                    {profile.username}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-gray-400 mr-2" />
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={profile.email}
                                    onChange={handleInputChange}
                                    className="flex-1 p-2 border rounded"
                                    required
                                />
                            ) : (
                                <span className="flex-1">{profile.email}</span>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        {isEditing ? (
                            <button
                                type="submit"
                                className="bg-[#5856A1] text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 flex items-center"
                            >
                                <FaSave className="mr-2" /> Save
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="bg-[#5856A1] text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300 flex items-center"
                            >
                                <FaEdit className="mr-2" /> Edit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </main>
    );
}
