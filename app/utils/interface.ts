export interface Post{
    _id:string
    title:string;
    slug:{current: string};
    publishedAt: string;
    excerpt: string;
    body:string;
    imageUrl:any
}

export interface Guru{
    _id:string
    name:string
    position:string
    imageUrl:string
}

export interface Galeri{
_id:string
title:string
imageUrl:string
}