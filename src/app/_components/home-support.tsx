import { Container } from "@/components/ui/container"
import Image from "next/image"
import CardImage from "$public/support/support-card.webp"
import LeftImage from "$public/support/support-left.webp"
import RightImage from "$public/support/support-right.webp"

export const HomeSupport = async () => {
    return <section className="pt-30">
        <Container>
            <div className="overflow-hidden bg-[#F4F3F2] rounded-4xl relative bg-[url('/support/support-bg.webp')] bg-cover">
                <div data-slog="right" className="absolute top-0 right-0">
                    <Image src={RightImage} alt="image" className="w-full h-full" />
                </div>

                <div data-slog="left" className="absolute top-0 left-0">
                    <Image src={LeftImage} alt="image" className="w-full h-full" />
                </div>

                <div className="flex items-center">

                    <div className="w-220 h-138">
                        <Image
                            src={CardImage}
                            alt="card"
                            className="object-contain object-bottom-left w-full h-full"
                            priority
                        />
                    </div>

                    <div className="w-160 relative z-10">
                        <h2 className="text-[46px] tracking-[-2%] leading-[110%] mb-10">
                            Конcьерж-сервис и полное бесплатное сопровождение сделки для каждого клиента
                        </h2>

                        <ul className="grid grid-cols-2 gap-x-13.5 gap-y-7.5">
                            <li className="flex gap-5">
                                <div className="pt-1.75">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                                </div>

                                <p className="font-light text-lg leading-[130%] tracking-[-2%]">
                                    Юридические <br />
                                    и налоговые консультации
                                </p>
                            </li>

                            <li className="flex gap-5">
                                <div className="pt-1.75">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                                </div>

                                <p className="font-light text-lg leading-[130%] tracking-[-2%]">
                                    Юридические <br />
                                    и налоговые консультации
                                </p>
                            </li>

                            <li className="flex gap-5">
                                <div className="pt-1.75">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                                </div>

                                <p className="font-light text-lg leading-[130%] tracking-[-2%]">
                                    Юридические <br />
                                    и налоговые консультации
                                </p>
                            </li>

                            <li className="flex gap-5">
                                <div className="pt-1.75">
                                    <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                                </div>

                                <p className="font-light text-lg leading-[130%] tracking-[-2%]">
                                    Юридические <br />
                                    и налоговые консультации
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}