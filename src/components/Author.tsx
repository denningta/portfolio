import { urlFor } from '@/lib/sanity-client';
import Image from 'next/image';

export interface Author {
  name: string
  image: string
}

export interface AuthorProps {
  author: Author
  publishedAt: string
  estimatedReadingTime: number
}

function AuthorComponent({ author, publishedAt, estimatedReadingTime }: AuthorProps) {
  return (
    <div className="flex items-center mt-6 text-sm">
      <div className="w-[60px] h-[60px]  mr-4">
        {author.image && (
          <Image
            className="rounded-full overflow-clip"
            width={540}
            height={540}
            alt={`Cover Image for ${author.name}`}
            src={urlFor(author.image).width(540).height(540).url()}
          />
        )}
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex items-center grow">{author.name}</div>
        <div className="flex items-center grow opacity-60">
          <span className="mr-2">
            {publishedAt &&
              new Intl.DateTimeFormat('en-US', {
                month: 'short',
                year: 'numeric',
                day: 'numeric',
              }).format(new Date(publishedAt))}
          </span>
          <span className="mr-2">-</span>
          <span>{estimatedReadingTime} min read</span>
        </div>
      </div>
    </div>
  );
}

export default AuthorComponent;
