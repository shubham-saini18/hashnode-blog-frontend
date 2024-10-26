import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
  aspectRatio?: number; // Optional aspect ratio for flexibility
};

export const CoverImage = ({
  title,
  src,
  slug,
  priority = false,
  aspectRatio = 52.5, // Default aspect ratio percentage
}: Props) => {
  const postURL = `/${slug}`;

  const image = (
    <div className={`relative pt-[${aspectRatio}%]`}>
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="w-full rounded-md border object-cover hover:opacity-90 dark:border-neutral-800"
        fill
        unoptimized
        priority={priority}
        loading={priority ? 'eager' : 'lazy'} // Set loading based on priority
      />
    </div>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={postURL} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
