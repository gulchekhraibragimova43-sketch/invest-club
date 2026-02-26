import { Container } from "@/components/ui/container"
import Image from "next/image"
import Image1 from "$public/quote-image.webp"
import LogoQuote from "$public/logo-quote.webp"
import IPhone from "$public/iPhone-1.webp"
import Podcast from "$public/podcast.webp"
import PlayButton from "$public/play-button.webp"
import QuoteSymbol from "$public/quote-symbol.webp"

export const HomeQuote = () => {
    return <section>
        <Container>
            <div className="bg-linear-br from-[#F5F4F2] via-[#D9D9D9] to-[#f2f1ef] rounded-b-[40px] relative pb-15">
                <div className="w-7xl mx-auto relative flex">
                    <div className="w-187.5 relative">
                        <Image src={Image1} alt="человек" className="w-full h-full object-cover" priority />
                        <div className="absolute top-113.75 left-28.75 w-full">
                            <h3 className="font-medium text-[32px] leading-[130%] text-white mb-2">Михаил Израев</h3>

                            <div className="flex items-center gap-4 max-w-84.5">
                                <Image src={LogoQuote} alt="лого" />
                                <p className="text-white leading-[130%]">
                                    Основатель и генеральный директор <br />
                                    компании IZRAEV INVEST CLUB
                                </p>
                            </div>

                            <div className="pt-22.25 flex gap-10">
                                <div className="rounded-2xl bg-white w-65 pt-7.25 pl-3.75 pb-3.75 pr-3.75">
                                    <h3 className="text-[16px] text-center mb-3.75 tracking-[-2%]   ">
                                        Открыт к общению <br />
                                        в соц.сетях
                                    </h3>
                                    <Image src={IPhone} alt="айфон" className="bg-gray-300 rounded-2xl" />
                                </div>

                                <div className="rounded-2xl bg-white w-65 pt-7.25 pl-3.75 pb-3.75 pr-3.75">
                                    <h3 className="text-[16px] text-center mb-3.75 tracking-[-2%]">
                                        Веду свой подкаст о жизни <br />
                                        и бизнесе «Есть разговор»
                                    </h3>
                                    <div className="relative">
                                        <Image src={Podcast} alt="подкаст" className="bg-gray-300 rounded-2xl" />
                                        <Image src={PlayButton} alt="кнопка" className="absolute top-1/2 left-1/2 -translate-1/2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-32.5 max-w-150.5 -ml-17.5">
                        <h2 className="text-[42px] tracking-[-2%] leading-[110%]">
                            Выстраиваем долгосрочные отношения с нашими клиентами и предлагаем только то, что купили бы сами
                        </h2>
                        <div className="pt-8.5 space-y-8 text-[20px] tracking-[-2%] leading-[140%] font-light mb-15.5">
                            <p>
                                Мы предлагаем далеко не все, что есть на рынке — до наших <br />
                                покупателей доходит лишь 3-5% от всего объема предложений.
                            </p>
                            <p>
                                Каждый объект проходит несколько этапов проверок,
                                чтобы наш клиент был уверен в том, что покупает надежный
                                и ликвидный актив без рисков.
                            </p>
                        </div>

                        <blockquote className="ml-17.5 relative shadow-md">
                            <Image src={QuoteSymbol} alt="символ" className="absolute top-0 left-11.75 -translate-y-1/2" />
                            <div className="pt-9 pb-9 pr-11.75 pl-11.75 bg-white rounded-[10px] w-154.75">
                                <span className="leading-[150%] tracking-[-3%]">
                                    Нередко нашими клиентами становятся звезды спорта, <br />
                                    шоу-бизнеса и политики. Мы дорожим своей репутацией <br />
                                    и всегда открыты к продуктивному взаимодействию.
                                </span>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}