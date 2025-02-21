import React from 'react';
import { Genres } from '../../types/types';

interface DropdownProps {
    options: Genres[];
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

const SelectList: React.FC<DropdownProps> = ({ options, selectedValue, setSelectedValue }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className="relative inline-block w-full">
            <select
                value={selectedValue}
                onChange={handleChange}
                className=
                "text-sm bg-gray-700 cursor-pointer appearance-none  rounded-md pl-5 py-2 border-none hover:bg-gray-600 transition-all duration-200 ease-in-out focus:ring-0 focus:outline-none"
            >
                <option value="" disabled hidden>Others</option>
                {options.map((option, index) => (
                    <option key={index} value={option.name.toLowerCase()}>
                        {option.name}
                    </option>
                ))}
            </select>
            <div className="absolute top-0 left-0 px-0 py-3 text-white pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </div>

    );
};

export default SelectList;
