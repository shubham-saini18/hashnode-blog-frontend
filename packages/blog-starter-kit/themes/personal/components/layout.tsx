// components/layout.tsx
import React from 'react';
import { useThemeContext } from './contexts/themeContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const { isDarkMode, toggleTheme } = useThemeContext();

    return (
        <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <header className="w-full py-4 px-8 bg-opacity-70 backdrop-blur-md shadow-md sticky top-0 z-10 flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Blog</h1>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-transform transform hover:scale-110"
                    aria-label="Toggle dark mode"
                >
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </header>
            <main className="flex-grow container mx-auto py-8 px-4">
                {children}
            </main>
            <footer className="w-full py-4 text-center text-sm border-t border-gray-200 dark:border-gray-700">
                © {new Date().getFullYear()} My Blog. All rights reserved.
            </footer>
        </div>
    );
};
