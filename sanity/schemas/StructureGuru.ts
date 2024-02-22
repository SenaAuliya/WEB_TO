
export const StructureGuru = {
    name:"StructureGuru",
    title:"StrukturGuru",
    type: "document",

    fields:
    [
        {
            name:"name",
            title:"Nama",
            type:"string"
        },
        {
            name:"position",
            title:"Jabatan",
            type:"string"
        },
        {
            name:"images",
            title:"Gambar",
            type:"array",
            of:[{type:"image"}]
        }
    ]
}