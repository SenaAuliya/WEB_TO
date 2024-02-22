import { Galeri } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == "galeri"] {
    "imageUrl": images[0].asset->url,
  title
  }
  `;
  const data = await client.fetch(query);
  return data;
}
export default async function GalleriList() {
  const data: Galeri[] = await getData();

  return (
    <div className="flex flex-col items-center gap-10 p-5">
      <h1 className="text-2xl text-primary font-bold border-primary border-2 p-3 px-7 rounded-full lg:text-3xl">
        Galeri Jurusan TBSM
      </h1>
      <div className="flex flex-row flex-wrap gap-10 mt-4">
        {" "}
        {data.map((post) => (
          <div key={post._id} className="p-4 mb-4">
            <div className="w-72 h-52">
              <Image
                height={150}
                width={150}
                src={post.imageUrl}
                alt={post.title}
                className="mt-2 w-full h-full object-cover mb-2"
              />
            </div>
            <h2 className="text-xl text-secondary text-center p-2 mt-2 font-semibold bg-primary">
              {post.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
