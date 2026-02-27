import { Link } from "react-router-dom";

export const NotFound = () => {
    return(
        <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-gray-300">
        <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">🤦🏻‍♂️</h1>
            <p className="text-xl mb-8">Sorry, That page doesn't exist</p>
            <Link to="/" className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Go Home
            </Link>
        </div>
    </div>
    )
}