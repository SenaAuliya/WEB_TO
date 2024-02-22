import { Inria_Serif } from "next/font/google";
import { Jomolhari } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Post } from "@/app/utils/interface";

const inriaSerif = Inria_Serif({
  subsets: ["latin-ext"],
  weight: "700",
  display: "auto",
});

const jomolhari = Jomolhari({
  subsets: ["latin"],
  display: "auto",
  weight: "400",
});

async function getData(slug: string) {
  try {
    const query = `
      *[_type == "post" && slug.current == "${slug}"][0]{
        title,
        publishedAt,
        body,
        "imageUrl": images[0].asset->url,
      }
    `;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


export default async function Page({ params, }: { params: { slug: string } }) {
  const data:Post = await getData(params.slug)
  console.log(data)
  return (
    <div className="flex flex-col items-center w-full p-6 md:p-10 lg:p-16">
      <Link href="/blog" className="text-secondary self-start mb-4 bg-primary p-2 rounded-md">
         Kembali
      </Link>
              <Image src={data.imageUrl} height={150} width={150} className="w-full md:w-[700px] mb-8 md:mb-10" alt={`image for ${data.title}`} />
              <h1
                className={`${inriaSerif.className} text-2xl md:text-3xl lg:text-4xl underline text-center mb-8 md:mb-10`}
              >
                {data.title}
              </h1>
              <p
                className={`${jomolhari.className} text-lg md:text-xl lg:text-2xl text-justify tracking-wide leading-[1.8em]`}
                dangerouslySetInnerHTML={{ __html: data.body }}
              />
    </div>
  );
} 