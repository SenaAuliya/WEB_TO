import Image from "next/image";
import Hero from "../../public/Group 31.png";

export default function HeroComponent() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center w-full h-screen z-0 mt-[80px]" >
      <div className="inset-0 flex flex-col items-center justify-center p-3 text-center md:text-start z-10">
        <h1 className="text-black text-4xl md:text-8xl mb-4" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          Selamat Datang di <br /> Website Jurusan TO
        </h1>
        <h6 className="text-black text-lg md:text-xl mb-4" style={{ fontFamily: 'Inria-Serif, Poppins' }}>
          SMK NEGERI 1 BANGSRI
        </h6>
      </div>
      <div className="w-full md:w-[500px] h-[550px] flex-col flex z-0">
        <Image src={Hero} height={150} width={150} className="w-full h-full" alt="gambar 1" />
      </div>
    </div>
  );
}
