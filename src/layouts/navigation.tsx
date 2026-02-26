"use client";

import LogoImage from "$public/logo.webp"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useState } from "react";

interface MenuType {
    id: number;
    label: string;
    pathname: string;
    icon?: ReactNode;
}

const menu: MenuType[] = [
    {
        id: 1,
        label: "Главная",
        pathname: "/",
    },
    {
        id: 2,
        label: "Готовые подборки",
        pathname: "/ready-made-collections",
    },
    {
        id: 3,
        label: "Подбор объекта",
        pathname: "/object-selection",
    },
    {
        id: 4,
        label: "О компании",
        pathname: "/about",
    },
    {
        id: 5,
        label: "Каталог объектов",
        pathname: "/object-catalog"
    }
]

export const Navigation = () => {

    const [openSheet, setOpenSheet] = useState(false);

    return <nav className="max-w-navigation mx-auto p-5 bg-navigation text-white rounded-full flex justify-between">
        <div className="flex items-center gap-16.25">
            {/* Menu */}
            <Sheet open={openSheet} onOpenChange={setOpenSheet} >
                <SheetTrigger asChild>
                    <button
                        type="button"
                        className="inline-flex rounded-full p-5.5 text-white border border-gray-200 justify-center items-center"
                        onClick={() => {
                            setOpenSheet(true)
                        }}
                    >
                        <Menu />
                    </button>
                </SheetTrigger>

                <SheetContent side="left" className="sm:max-w-197.5 py-10 pl-52.5 bg-navigation">

                    <SheetHeader>
                        <SheetTitle />
                    </SheetHeader>

                    <button
                        type="button"
                        className="absolute top-10 left-52.5 inline-flex justify-center items-center p-5 rounded-full border border-white/40 text-white"
                        onClick={() => {
                            setOpenSheet(false)
                        }}
                    >
                        <X />
                    </button>

                    <ul className="space-y-7.5 pt-40.5">
                        {
                            menu.map(menu => <li key={menu.id}>
                                <Link href={menu.pathname} className="text-[31px] text-white font-thin leading-[120%] hover:font-medium hover:border-b hover:border-b-white ease-in-out duration-300 transition-all">
                                    {menu.label}
                                </Link>
                            </li>)
                        }
                    </ul>


                </SheetContent>
            </Sheet>

            <Link href={"/"} className="inline-block w-73.75 h-10">
                <Image src={LogoImage} alt="Invest Club logo" priority className="w-full block" />
            </Link>
        </div>

        <div className="flex items-center gap-30">
            <Link href={"#!"} className="text-white text-lg leading-[120%]">
                Вы собственник <br /> недвижимости?
            </Link>

            <div className="flex flex-col gap-0.75">
                <a href="tel:+74959999999" target="_blank" rel="noopener" className="text-white leading-[100%] text-[24px]">
                    +7 495 999 99 99
                </a>

                <p className="text-right text-white opacity-50 text-[14px] font-medium leading-[100%]">
                    Консультация специалиста
                </p>
            </div>
        </div>
    </nav>
}