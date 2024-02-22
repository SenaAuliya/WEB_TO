import { Metadata } from 'next'
import Artikel from './ui/Artikel' 
import HeroComponent from './ui/HeroComponents'
import KoneksiIndustri from './ui/KoneksiIndustri'
import Pengertian from './ui/Pengertian'
import PilihanKarir from './ui/PilihanKarir'
import Prestasi from './ui/Prestasi'
import React from 'react'
import NavbarComponent from '@/Components/NavbarComponents'
import FooterComponents from '@/Components/FooterComponents'

export const metadata: Metadata ={
  title: "Beranda",
  description: "Beranda dari Web jurusan To Smk N 1 Bangsri"
}

export default function Home() {
  return (
     <div className='bg-white overflow-x-hidden'>
      <NavbarComponent/>
      <HeroComponent/>
      <Pengertian/>
      <Artikel/>
      <Prestasi/>
      <PilihanKarir/>
      <KoneksiIndustri/>
      <FooterComponents/>
    </div>
  )
}
