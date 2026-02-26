import type { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { Info } from "lucide-react";

export const HomeCard = ({ id, name, image }: Props) => {
    return <Link href={`/projects/${id}`} className="relative inline-block overflow-hidden h-81.75 rounded-4xl group w-full">
        <Image src={image} alt={name} width={1120} height={680} className="absolute top-0 left-0 right-0 bottom-0 group-hover:scale-110 duration-300 ease-in-out transition-all" priority />

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-t from-[#1B1F28] to-[#1B1F28]/0 flex flex-col justify-end text-white px-12.5 pb-10 gap-2.5">
            <h4 className="text-[28px] font-bold leading-[100%]">{name}</h4>

            <div className="flex gap-2 items-center">
                <Info />

                <span className="font-medium text-xl leading-[100%] pb-2 border-b border-b-white/40">
                    Получить подборку
                </span>
            </div>
        </div>
    </Link>
}

interface Props {
    id: string;
    name: string;
    image: string | StaticImageData
}