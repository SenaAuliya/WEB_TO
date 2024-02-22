import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata ={
  title: "Blog",
  description: "Halaman Blog dari Web jurusan To Smk N 1 Bangsri"
}
import BlogList from '../ui/blog/BlogList';
import NavbarComponent from '@/Components/NavbarComponents';
import FooterComponents from '@/Components/FooterComponents';
const Home = () => {
  return (
    <div>
      <NavbarComponent/>
      <BlogList />
      <FooterComponents/>
    </div>
  );
  }

export default Home;
