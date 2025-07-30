import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function CompleteProfile() {
    const { user } = useUser();
    const navigate=useNavigate()

    const [canCode, setCanCode] = useState(false);
    const [preferredFormat, setPreferredFormat] = useState("virtual");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            canCode,
            preferredFormat,
            city: preferredFormat !== "virtual" ? city : null,
            profileComplete: true,
        };

        // Send POST request to API endpoint (placeholder URL)
        await fetch("https://fmlcx5shx6.execute-api.us-east-1.amazonaws.com/updateuserdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user.id,
                metadata: profileData,
            }),
        });
        navigate('/mvp')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-black">
            <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-full max-w-md text-black">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Complete Your Profile
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="flex items-center space-x-3">
                        <span className="text-lg">Can you code?</span>
                        <input
                            type="checkbox"
                            checked={canCode}
                            onChange={(e) => setCanCode(e.target.checked)}
                            className="form-checkbox h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                    </label>

                    <label className="block">
                        <span className="text-lg">
                            Preferred internship format:
                        </span>
                        <select
                            value={preferredFormat}
                            onChange={(e) => setPreferredFormat(e.target.value)}
                            className="mt-2 block w-full rounded-md bg-white bg-opacity-20 border border-gray-300 py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="virtual">Virtual</option>
                            <option value="in-person">In-person</option>
                            <option value="either">Either</option>
                        </select>
                    </label>

                    {preferredFormat !== "virtual" && (
                        <label className="block">
                            <span className="text-lg">What city do you live in?</span>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="mt-2 block w-full rounded-md bg-white bg-opacity-20 border border-gray-300 py-2 px-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </label>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-md bg-purple-600 hover:bg-purple-700 font-semibold text-lg transition-colors"
                    >
                        Finish Profile
                    </button>
                </form>
            </div>
        </div>
    );
}
