import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 shadow-lg py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-white">
                    🚴 BikeNow
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white transition">About us</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white transition">Catalog</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white transition">Profile</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
