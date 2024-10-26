// components/footer.tsx
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './icons'; // Ensure correct path
import { useAppContext } from './contexts/appContext';
import { useThemeContext } from './contexts/themeContext'; // Import theme context

export const Footer = () => {
    const { publication } = useAppContext();
    const { isDarkMode } = useThemeContext(); // Get the theme context

    return (
        <footer className={`border-t pt-10 text-sm text-neutral-500 ${isDarkMode ? 'dark:border-neutral-800 dark:text-neutral-400' : 'border-gray-300 text-gray-700'}`}>
            <div className="flex justify-center space-x-4 mb-4">
                <a href={publication.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <GitHubIcon className="w-6 h-6" />
                </a>
                <a href={publication.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <LinkedInIcon className="w-6 h-6" />
                </a>
                <a href={publication.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    <InstagramIcon className="w-6 h-6" />
                </a>
            </div>
            <p className="text-center">
                © {new Date().getFullYear()} {publication.name}. All rights reserved.
            </p>
        </footer>
    );
};
