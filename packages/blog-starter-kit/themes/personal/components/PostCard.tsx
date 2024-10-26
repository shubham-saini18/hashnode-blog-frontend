import Link from 'next/link';
import { Post } from '../generated/graphql';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          <div className="mt-4 text-blue-500 dark:text-blue-300 font-semibold">Read more →</div>
        </div>
      </a>
    </Link>
  );
}
