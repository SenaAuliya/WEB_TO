import { client } from '@/sanity/lib/client';
import { Inria_Serif } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/app/utils/interface';

  async function getPost() {
    const query = `
    *[_type == "post"]{
      title,
      slug,
      publishedAt,
      excerpt,
      "imageUrl": images[0].asset->url,
    }
    `
    const data = await client.fetch(query);
    return data;
  }

const inriaSerif = Inria_Serif(
  {
    subsets: ["latin-ext"],
    display: "auto",
    weight: "700",
  }
);

export default async function BlogList() {
  const post: Post[] = await getPost()

  return (
        <div className="flex flex-col bg-secondary items-center border-b-white border-b-[3px] p-4 sm:p-7">
          {post?.length > 0 && post?.map((post: Post) => (
            <div key={post._id} className="flex flex-col sm:flex-row w-full justify-between items-center m-4 sm:m-7 p-3 sm:p-5">
                <Image
                width={150}
                height={150}
                  src={post?.imageUrl}
                  alt={`Image for ${post.title}`}
                  className="w-full sm:w-52 h-auto mb-3 sm:mr-5"
                />
              <div className="flex flex-col sm:w-2/3">
                <h3 className={`${inriaSerif.className} text-2xl sm:text-3xl font-bold underline mb-2 sm:mb-3`}>{post.title}</h3>
                <h3 className={`${inriaSerif.className} text-lg sm:text-2xl font-bold mb-2 sm:mb-3`}>{post?.excerpt}</h3>
                  <p className="text-sm sm:text-base">
                    {new Date (post?.publishedAt).toDateString()}
                  </p>
                <Link href={`/blog/${post.slug?.current}`} className="text-primary underline mt-2 sm:mt-3">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
  );
};