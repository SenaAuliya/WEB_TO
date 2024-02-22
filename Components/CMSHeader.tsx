import Link from "next/link";

export default function HeaderCMS(){
    return(
        <div className="flex justify-between items-center py-1 px-5">
            <Link href={'/'}>
                <div className="text-3xl font-semibold">
                    Teknik
                    <span className=" text-red-700"> Otomotif</span>
                </div>
            </Link>
        </div>
    )
}