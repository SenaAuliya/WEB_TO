import GalleriList from "../ui/galeri/GaleriList";
import React from 'react'

import { Metadata } from "next";
import NavbarComponent from "@/Components/NavbarComponents";
import FooterComponents from "@/Components/FooterComponents";

export const metadata: Metadata ={
    title: "Galeri",
    description: "Galeri Page dari Web jurusan To Smk N 1 Bangsri"
}
export default function Page(){
  return (
    <div>
      <NavbarComponent/>
      <GalleriList/>
      <FooterComponents/>
    </div>
  )
}