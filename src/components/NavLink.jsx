import { Link } from "react-router-dom";
const NavLink = ({ icon, text, herf }) => (
    <Link to={herf} className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition">
        {icon}
        <span>{text}</span>
    </Link>
);

export default NavLink;