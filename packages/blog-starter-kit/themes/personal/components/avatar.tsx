import { resizeImage } from '@starter-kit/utils/image';

const DEFAULT_AVATAR =
  'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png';

type Props = {
  username: string;
  name: string;
  picture?: string; // Make picture optional
  size?: number; // Make size optional
};

export const Avatar = ({ username, name, picture, size = 32 }: Props) => { // Default size set to 32
  // Resize image or fallback to default avatar
  const imageSrc = resizeImage(picture || DEFAULT_AVATAR, { w: 160, h: 160, c: 'face' }, DEFAULT_AVATAR);

  return (
    <div className="flex items-center gap-2">
      <a href={`https://hashnode.com/@${username}`} target="_blank" rel="noopener noreferrer">
        <img
          src={imageSrc}
          className={`h-${size} w-${size} rounded-full`} // Dynamically set size with template literals
          alt={name || 'User Avatar'} // Fallback alt text
        />
      </a>
      <div className="text-base font-bold text-slate-600 dark:text-neutral-300">
        <a href={`https://hashnode.com/@${username}`} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>
    </div>
  );
};
