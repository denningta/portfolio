import { urlFor } from '@/lib/sanity-client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Avatar from './Avatar';

export interface AuthorProps {
  author: Sanity.Default.Schema.Author
  publishedAt: string
  estimatedReadingTime: number
}

function AuthorComponent({ author, publishedAt, estimatedReadingTime }: AuthorProps) {
  return (
    <>
      {author &&
        <div className="flex items-center mt-6 text-sm">
          <Avatar image={author.image as SanityImageSource} width={80} height={80} />
          <div className="flex flex-col h-full justify-center ml-4">
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
      }
    </>
  );
}

export default AuthorComponent;
