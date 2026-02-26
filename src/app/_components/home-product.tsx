"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/util";
import { ArrowLeft, ArrowRight, CircleSmall, Footprints } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/mocks/projects.mock";

export const HomeProject = ({ address, id, images, label, options, price, time, totalPrice }: Project) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleLeft = () => {
        if (imageIndex < images.length) {
            setImageIndex(images.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }

    const handleRight = () => {
        if (imageIndex >= (images.length - 1)) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    const formatTime = new Date(time * 60 * 1000);

    const hour = formatTime.getUTCHours();

    const minutes = formatTime.getUTCMinutes();

    const fullTime = hour > 0 ? `${hour} час ${minutes} мин.` : `${minutes} мин.`;

    return <div className="rounded-2xl overflow-hidden relative bg-[#F6F8FB]">
        {/* Slider */}
        <div className="rounded-2xl relative h-72.5">
            {
                images.map((item, index) => <Image
                    key={index.toString()}
                    src={item} alt="Картинка"
                    className={cn("w-full h-full object-cover duration-300 ease-in-out transition-all absolute top-0 left-0 bottom-0 right-0", imageIndex === index ? "opacity-100" : "opacity-0")}
                    width={460}
                    height={290}
                />)
            }

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 space-x-2.5">
                {
                    images.map((_, index) => <button
                        type="button"
                        key={index.toString()}
                        className={cn(
                            "inline-block rounded-full w-1.75 h-1.75",
                            index === imageIndex ? "bg-white" : "bg-white/30"
                        )}
                        onClick={() => {
                            setImageIndex(index)
                        }}
                    />
                    )
                }
            </div>

            <button type="button" className="absolute top-1/2 -translate-y-1/2 border-[3px] border-white rounded-full inline-flex items-center justify-center left-5" data-slot="left" onClick={handleLeft}>
                <ArrowLeft />
            </button>

            <button type="button" className="absolute top-1/2 -translate-y-1/2 border-[3px] border-white rounded-full inline-flex items-center justify-center right-5" data-slot="right" onClick={handleRight}>
                <ArrowRight />
            </button>
        </div>

        <div className="px-10 pt-7.5 pb-8.5">
            <h4 className="text-[24px] leading-[100%] tracking-[-2%] mb-5">{label}</h4>

            <div className="flex gap-5 items-center mb-5">
                <div className="flex gap-3 items-center">
                    <CircleSmall className="size-4 text-red-500" />

                    <p className="text-lg leading-[100%] tracking-[-2%]">{address}</p>
                </div>

                <span className="inline-block rounded-full w-1 h-1 bg-[#76859A]" />

                <div className="flex gap-5 items-center text-[#76859A]">
                    <Footprints className="size-4" />

                    <time className="text-lg leading-[100%] tracking-[-2%]" dateTime={fullTime}>{fullTime}</time>
                </div>
            </div>

            <ul className="space-y-3.5 mb-5">
                {
                    options.map(item => <li className="flex justify-between items-end gap-2.5" key={item.name}>
                        <p className="text-lg text-[#76859A] leading-[100%] tracking-[-2%]">{item.name}</p>

                        <div className="flex-1 border-b border-b-[#76859A] border-dashed" />

                        <span className="text-black text-lg leading-[100%] tracking-[-2%]">{item.value}</span>
                    </li>)
                }
            </ul>

            <div className="flex gap-5 items-center mb-8.5">
                <strong className="font-medium text-black text-[28px] leading-[100%] tracking-[-2%]">{totalPrice} млн</strong>

                <span className="inline-block rounded-full w-1 h-1 bg-[#76859A]" />

                <p className="text-[#76859A] text-[28px] leading-[100%] tracking-[-2%]">
                    {price} млн/м<sup>2</sup>
                </p>
            </div>

            <div>
                <Link href={`/projects/${id}`} className="inline-block pb-1.5 border-b-2 border-b-[#DBD5CE] text-[#A68F71] text-xl leading-[100%] tracking-[-2%]">
                    Подробнее об объекте
                </Link>
            </div>
        </div>
    </div>
}
