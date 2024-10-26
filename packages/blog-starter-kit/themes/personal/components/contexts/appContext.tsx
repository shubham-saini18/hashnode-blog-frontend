import React, { createContext, useContext } from 'react';
import { PostFullFragment, PublicationFragment } from '../../generated/graphql';

type AppContext = { publication: PublicationFragment; post: PostFullFragment | null };

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	post,
}: {
	children: React.ReactNode;
	publication: PublicationFragment;
	post?: PostFullFragment | null;
}) => {
	// Extend publication with social media URLs
	const extendedPublication = {
		...publication,
		githubUrl: 'https://github.com/shubham-saini18',       // Your GitHub URL
		linkedinUrl: 'https://www.linkedin.com/in/shubham-saini-437984145', // Your LinkedIn URL
		instagramUrl: 'https://www.instagram.com/iam_s_saini', // Your Instagram URL
	};

	return (
		<AppContext.Provider
			value={{
				publication: extendedPublication,
				post: post ?? null,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within a <AppProvider />');
	}

	return context;
};

export { AppProvider, useAppContext };
