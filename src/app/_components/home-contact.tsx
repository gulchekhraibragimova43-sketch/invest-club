import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { PhoneCall } from "lucide-react"

export const HomeContact = () => {
    return <section>
        <Container>
            <div className="pt-30">
                <div className="bg-[url('/mock-up.webp')] bg-top-right bg-no-repeat relative min-h-133.75 bg-size-[1200px]">
                    <div className="pl-50">
                        <h2 className="text-[42px] leading-[120p%] tracking-[-2%]">
                            <strong>
                                Скачайте полный каталог
                            </strong> <br />
                            объектов готового <br />
                            арендного бизнеса
                        </h2>
                        <div className="flex gap-5 pt-8.75">
                            <div className="pt-1.75">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                            </div>

                            <p className="font-light text-lg leading-[130%] tracking-[-2%]">
                                и получите консультацию эксперта <br />
                                в коммерческой недвижимости <br />
                                по подбору и деталям покупки
                            </p>
                        </div>

                        <div className="bg-white rounded-4xl flex mt-10 p-5 gap-5 w-fit">
                            <Input type="tel" placeholder="Ваш номер телефона" className="bg-[#F0F2F3] rounded-[6px] flex items-center min-w-95" />

                            <button type="button" className="bg-[#E5BA78] rounded-[6px] py-8.25 text-[20px] text-[#624A29] px-18.5 font-medium min-w-95 cursor-pointer">
                                Получить предложение
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}