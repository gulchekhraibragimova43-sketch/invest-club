import { Container } from "@/components/ui/container"
import Link from "next/link"
import Image from "next/image"
import Man from "$public/quote-man.webp"

export const HomeHero = () => {
    return <section className="bg-[url('/hero-bg.webp')] bg-bottom bg-cover bg-no-repeat pt-55.75 pb-76.25 relative">
        <Container className="relative">
            <div className="max-w-240">
                <h1 className="text-white mb-8.5 text-7xl font-medium">
                    Инвестируйте в готовый арендный бизнес в Москве
                </h1>

                <p className="text-white text-[28px] leading-[130%] mb-14">
                    и обеспечьте себе стабильный пассивный <br />
                    доход с рентабельностью до 15% годовых
                </p>

                <Link href={"#!"} className="inline-block py-8.25 px-13.75 rounded-[6px] bg-linear-to-tr from-[#FAEBD7] via-[#D8B78F] to-[#FAEBD7] text-xl font-medium text-[#624A29] leading-[100%]">
                    Получить каталог объектов
                </Link>

                <blockquote className="absolute -bottom-76.25 right-61.25 w-184.5 h-85.5 flex items-end">
                    <div className="pt-13.75 pb-11.5 bg-[#22160575] rounded-xl relative before:content-[''] before:block before:absolute before:-top-4 before:left-12.5 before:w-14 before:h-10 before:bg-[url('/quote.webp')] w-155 backdrop-blur-sm pl-12.5 text-white">
                        <span className="text-2xl leading-[120%] tracking-[-2%]"> Не тратьте время на поиски —</span> <br /> <span className="text-2xl font-bold leading-[120%] tracking-[-2%]">
                            мы собрали для вас 30 лучшихо <br /> бъектов Москвы и МО
                        </span>
                    </div>

                    <div className="shrink-0 absolute bottom-0 right-0 w-71.25 h-86.25">
                        <Image src={Man} alt="мужик" className="w-full h-full block object-cover" />
                        {/* TODO: закончить верску мужика */}
                    </div>
                </blockquote>

            </div>
        </Container>
    </section>
}