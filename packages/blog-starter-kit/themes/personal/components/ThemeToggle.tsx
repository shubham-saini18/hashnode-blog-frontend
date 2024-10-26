// components/ThemeToggle.tsx
import React from 'react';
import { useThemeContext } from './contexts/themeContext';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition duration-300 ease-in-out flex items-center justify-center"
            title="Toggle theme"
        >
            {isDarkMode ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="50"
                    height="50"
                >
                    <path d="M12 3a9 9 0 00-8.937 10.276C4.083 13.038 4 12.544 4 12a8 8 0 1110.058 7.513A9 9 0 0012 3z" />
                </svg>
            ) : (
                <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/fluency-systems-regular/50/light.png"
                    alt="Light Mode"
                />
            )}
        </button>
    );
};
