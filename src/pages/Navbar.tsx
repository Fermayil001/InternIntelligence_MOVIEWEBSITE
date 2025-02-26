import { useGetAllCategoriesQuery } from '../services/categoriesApi';
import { MdFavorite } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import SelectList from '../components/ui/SelectList';
import { useState } from 'react';
import UnderlineEffect from '../components/ui/UnderlineEffect';
import { useLocation, useNavigate } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useAppSelector } from '../redux/hooks/hooks';

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const pathId = queryParams.get("id");
    const [selectedCategory, setSelectedCategory] = useState<string>('')
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
        <nav className='flex justify-between px-7 pt-1 pb-2 items-center bg-gray-700'>
            <span className="font-bold text-blue-300 text-2xl">MovieLand</span>
            <ul className='flex items-center gap-3 text-amber-50 text-sm'>
                {
                    displayCategories.map(category => (
                        <li
                            className={`relative group cursor-pointer ${pathId === category.id.toString() ? 'selected' : ''}`}
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id.toString(), category.name.toLowerCase())}
                        >
                            {category.name}
                            <UnderlineEffect />
                        </li>
                    ))
                }
                <li>
                    <SelectList
                        options={otherCategories}
                        selectedValue={selectedCategory}
                        setSelectedValue={setSelectedCategory}
                    />
                </li>
                <li
                    onClick={() => navigate('/favorites')}
                    className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110'
                >
                    <Badge badgeContent={count} color="warning">
                        <MdFavorite size='1.5rem' />
                    </Badge>
                </li>
                <li className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105'>
                    <IoHome size='1.5rem' onClick={() => { navigate('/') }} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar