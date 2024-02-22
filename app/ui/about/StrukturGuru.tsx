import { Guru } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getData(){
  const query = `
  *[_type == "StructureGuru"] | order(_createdAt asc) {
    name,
    position,
    "imageUrl": images[0].asset->url,
    _createdAt
  }
  `
  const data = await client.fetch(query)
  return data
}

export default async function StrukturGuru() {
  const data : Guru[] = await getData()
  return (
    <div className="flex flex-col bg-primary py-5">
      <h1 className="text-2xl lg:text-4xl text-center font-semibold pb-4 border-b-2 p-3">
        Struktur Organisasi Guru TO
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4">
        {data?.length > 0 && data.map((guru:Guru) => (
          <div key={guru._id} className="flex flex-col gap-3 justify-center items-center p-5 sm:p-10">
            <div className='w-52 h-52'>
              <Image
              height={150}
              width={150}
                src={guru.imageUrl} 
                alt="gambar" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col w-full bg-secondary text-primary px-5">
              <h1 className="text-center font-medium text-lg border-b-2 border-b-primary">
                {guru.name}
              </h1>
              <p className='text-center'>{guru.position}</p>
            </div>
          </div>
        ))}
      </div>
     </div>
  );
}
