import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <ul className="flex justify-end p-2 px-5 font-serif bg-gray-800 text-white gap-3 text-[12px] items-baseline">
                <li>
                    <Link to=''>About</Link>
                </li>
                <li>
                    <Link to=''>Contact</Link>
                </li>
                <li>
                    <Link to=''>Privacy</Link>
                </li>
                <li>
                    <Link to=''>Disclaimer</Link>
                </li>
                <li>
                    <Link to=''>DMCA</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header