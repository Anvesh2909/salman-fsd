import {useState} from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here, e.g., fetch user data, set authentication token, etc.
        setIsLoggedIn(true);
    };
    const handleLoginOut = () => {
        // Implement your login logic here, e.g., fetch user data, set authentication token, etc.
        setIsLoggedIn(false);
    };
    return (
        <nav className="bg-white m-5">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <img src="public/assets/images/logo.svg" alt="Logo" className="h-8" />
                <ul className={`flex gap-20 ${isLoggedIn ? 'block' : 'hidden'}`}>
                    <li><a href="#" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600">Create Event</a></li>
                    <li><a href="#" className="hover:text-blue-600">My Profile</a></li>
                </ul>
                {isLoggedIn ? (
                    <a href="#" className="text-white bg-[#725EF6] hover:bg-violet-700 py-3 px-9 rounded-full" onClick={handleLoginOut}>Logout</a>
                ) : (
                    <a href="#" className="text-white bg-[#725EF6] hover:bg-violet-700 py-3 px-9 rounded-full" onClick={handleLogin}>Login</a>
                )}
            </div>
        </nav>
    );
};

export default Navbar;