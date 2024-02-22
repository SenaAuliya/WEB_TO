import NavbarComponent from "@/Components/NavbarComponents";
import Komptensi from "../ui/about/Kompetens";
import Kurikulum from "../ui/about/Kurikulum";
import StruktutGuru from "../ui/about/StrukturGuru";
import VisiMisi from "../ui/about/VisiMisi";
import { Metadata } from "next";
import React from 'react'
import FooterComponents from "@/Components/FooterComponents";


export const metadata: Metadata ={
    title: "Tentang",
    description: "Tentang Page dari Web jurusan To Smk N 1 Bangsri"
}

export default function Page(){
    return(
            <div>
                <NavbarComponent/>
            <VisiMisi/>
            <StruktutGuru/>
            <Komptensi/>
            <Kurikulum/>
            <FooterComponents/>
        </div>
    )
}