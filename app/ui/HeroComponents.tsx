import Image from "next/image";
import Hero from "../../public/Group 31.png"
export default function HeroComponent() {
  
  return (
    <div className="flex flex-row justify-center items-center w-full h-screen"> 
      <div className="inset-0 flex flex-col items-center justify-center p-3">
        <h1 className="text-black text-4xl text-start mb-4 md:text-8xl" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          Selamat Datang di <br/> Website Jurusan TO
        </h1>
        <h6 className="text-black text-lg text-start mb-4 md:text-xl" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          SMK NEGERI 1 BANGSRI
        </h6>
      </div>
      <div className="w-[500px] h-[550px] flex-col flex">
        <Image src={Hero} height={150} width={150} className="w-full h-full" alt="gambar 1"/>
      </div>
    </div>
  );
}
