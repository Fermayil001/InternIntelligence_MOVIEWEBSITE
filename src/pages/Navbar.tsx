import { useGetAllCategoriesQuery } from '../services/categoriesApi';
import { MdFavorite } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import SelectList from '../components/ui/SelectList';
import { useState } from 'react';
import UnderlineEffect from '../components/ui/UnderlineEffect';
import { useAppDispatch } from '../redux/hooks/hooks';
import { setCategory } from '../redux/slices/categorySlice';

const Navbar = () => {
    const dispatch = useAppDispatch()
    const [selectedCategory, setSelectedCategory] = useState<string>('')


    const { data: categories } = useGetAllCategoriesQuery();
    if (!categories) return null;

    const displayCategories = categories.genres.slice(0, 4)
    const otherCategories = categories.genres.slice(4, categories.genres.length)

    const handleCategoryChange = (categoryId : string) => {
        setSelectedCategory(categoryId);
        dispatch(setCategory(categoryId));
    };


    return (
        <nav className='flex justify-between px-7 pt-1 pb-2 items-center bg-gray-700'>
            <span className="font-bold text-blue-300 text-2xl">MovieLand</span>
            <ul className='flex items-center gap-3 text-amber-50 text-sm'>
                {
                    displayCategories.map(category => (
                        <li
                            className="relative group cursor-pointer"
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id.toString())}
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
                <li className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110'>
                    <MdFavorite size='1.5rem' />
                </li>
                <li className='cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110'>
                    <IoHome size='1.5rem' />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar