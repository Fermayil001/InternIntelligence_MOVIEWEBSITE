import { useGetAllCategoriesQuery } from '../services/categoriesApi';
import { MdFavorite } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import SelectList from '../components/ui/SelectList';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from "react-icons/md";
import UnderlineEffect from '../components/ui/UnderlineEffect';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useAppSelector } from '../redux/hooks/hooks';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const pathId = queryParams.get("id");
    const [selectedCategory, setSelectedCategory] = useState<string>('')
    const [menuOpen, setMenuOpen] = useState(false);
    const count = useAppSelector(state => state.favCount.count)

    const { data: categories } = useGetAllCategoriesQuery();
    if (!categories) return null;

    const displayCategories = categories.genres.slice(0, 4)
    const otherCategories = categories.genres.slice(4, categories.genres.length)

    const handleCategoryChange = (categoryId: string, categoryName: string) => {
        setSelectedCategory(categoryId);
        navigate(`/movies?category=${categoryName}&id=${categoryId}`);
    };

    return (
        <nav className="flex justify-between px-7 pt-1 pb-2 items-center bg-gray-700 relative">
            <Link to="/" className="font-bold text-blue-300 text-2xl">MovieLand</Link>
            {/* Hamburger menu for mobile */}
            <div className='md:hidden flex items-center gap-4'>
                <span
                    onClick={() => {
                        navigate('/favorites');
                    }}
                    className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110'
                >
                    <Badge badgeContent={count} color="warning">
                        <MdFavorite size='1.5rem' color='white' />
                    </Badge>
                </span>
                <button
                    className=" text-amber-50 text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <GiHamburgerMenu />
                </button>

            </div>

            {/* Menu */}
            {/* Overlay for mobile menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-transparent bg-opacity-40 z-10 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <ul
                className={`flex-col md:flex-row md:flex items-center gap-3 text-amber-50 text-sm
                fixed md:static top-0 right-0 h-full w-64 md:w-auto bg-gray-700 md:bg-transparent z-20 transition-transform duration-300
                ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0
                ${menuOpen ? 'flex' : 'hidden'} md:flex`}
                style={{ boxShadow: menuOpen ? '0 0 10px rgba(0,0,0,0.2)' : undefined }}
            >
                <button
                    className="self-end m-4 md:hidden text-2xl"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <MdClose />
                </button>
                {displayCategories.map(category => (
                    <li
                        className={`relative group cursor-pointer ${pathId === category.id.toString() ? 'selected' : ''}`}
                        key={category.id}
                        onClick={() => {
                            handleCategoryChange(category.id.toString(), category.name.toLowerCase());
                            setMenuOpen(false);
                        }}
                    >
                        {category.name}
                        <UnderlineEffect />
                    </li>
                ))}
                <li>
                    <SelectList
                        options={otherCategories}
                        selectedValue={selectedCategory}
                        setSelectedValue={setSelectedCategory}
                    />
                </li>
                {
                    !menuOpen && (
                        <li
                            onClick={() => {
                                navigate('/favorites');
                                setMenuOpen(false);
                            }}
                            className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110'
                        >
                            <Badge badgeContent={count} color="warning">
                                <MdFavorite size='1.5rem' />
                            </Badge>
                        </li>
                    )
                }
                {
                    !menuOpen && (
                        <li className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105'>
                            <IoHome size='1.5rem' onClick={() => { navigate('/'); setMenuOpen(false); }} />
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar