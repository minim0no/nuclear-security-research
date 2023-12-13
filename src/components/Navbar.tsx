import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-[#800000] text-white px-12 py-[1.3rem] ">
            <h1 className="text-[1.8rem] font-extrabold">NUEN 451</h1>
            <ul className="flex text-[1.2rem] m-0 p-0">
                <li>
                    <NavLink
                        to="/"
                        className="border-2 border-white px-4 py-2 hover:bg-white hover:text-[#800000] rounded-lg"
                    >
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
