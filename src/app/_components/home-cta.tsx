"use client";

import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import CTAImage from "$public/cta-image.webp"

export const HomeCTA = () => {
    return <section className="bg-[#F4F3F2] pt-21 pb-32.5 overflow-hidden">
        <Container>
            <div className="max-w-6xl w-full mx-auto flex gap-10 relative">
                <div className="w-146.5 relative z-2">
                    <h2 className="text-[46px] leading-[110.00000000000001%] tracking-[-2%] mb-12.5">
                        Поможем подобрать <br /> один или несколько <br /> объектов под ваш бюджет
                    </h2>

                    <form className="w-96 space-y-4" >
                        <Input type="number" placeholder="Укажите сумму" />

                        <Input type="tel" placeholder="Ваш номер телефона" />

                        <button
                            type="submit"
                            className="inline-block py-8.25 px-13.75 rounded-[6px] bg-linear-to-tr from-[#FAEBD7] via-[#D8B78F] to-[#FAEBD7] text-xl font-medium text-[#624A29] leading-[100%] w-full"
                        >
                            Получить предложение
                        </button>
                    </form>
                </div>

                <div className="ml-50">
                    <p className="text-2xl leading-[130%] tracking-[-3%] font-light">
                        Укажите предполагаемую сумму <br />
                        инвестиций, и мы сформируем <br />
                        для вас индивидуальное предложение, <br />
                        исходя из вашего бюджета
                    </p>
                </div>

                <div className="w-218.75 absolute -bottom-33.75 right-0 h-110">
                    <Image src={CTAImage} alt="cta image" className="w-full h-full" priority />
                </div>
            </div>
        </Container>
    </section>
}