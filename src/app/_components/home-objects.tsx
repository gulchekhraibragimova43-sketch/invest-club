import { Container } from "@/components/ui/container";

import Pic1 from "$public/projects/pr1.webp"
import Pic2 from "$public/projects/pr2.webp"
import Pic3 from "$public/projects/pr3.webp"
import Pic4 from "$public/projects/pr4.webp"
import Pic5 from "$public/projects/pr5.webp"
import Pic6 from "$public/projects/pr6.webp"
import { HomeCard } from "./home-card";

export const HomeObjects = () => {
    return <section className="px-15.25">
        <div className="bg-[#F6F8FB] rounded-2xl pt-32.5 pb-22.5">
            <Container>
                <p className="text-xl font-light leading-[130%] text-center mb-8.75">
                    Больше не нужно тратить время на изучение и анализ множества предложений и вариантов
                </p>

                <h2 className="text-5xl leading-[120%] tracking-[-2%] text-center">
                    Получите готовые подборки объектов <br />
                    по интересующим параметрам
                </h2>

                <ul className="space-y-7.5 pt-20">
                    <li className="flex gap-11.5">
                        <div className="w-145.5">
                            <HomeCard id="1" image={Pic1} name="Супермаркеты" />
                        </div>

                        <div className="flex-1">
                            <HomeCard id="2" image={Pic2} name="Объекты до 35 млн" />
                        </div>
                    </li>

                    <li className="flex gap-11.5 flex-row-reverse">
                        <div className="w-145.5">
                            <HomeCard id="3" image={Pic3} name="Супермаркеты" />
                        </div>

                        <div className="flex-1">
                            <HomeCard id="4" image={Pic4} name="Объекты до 35 млн" />
                        </div>
                    </li>

                    <li className="flex gap-11.5">
                        <div className="w-145.5">
                            <HomeCard id="5" image={Pic5} name="Супермаркеты" />
                        </div>

                        <div className="flex-1">
                            <HomeCard id="6" image={Pic6} name="Объекты до 35 млн" />
                        </div>
                    </li>
                </ul>
            </Container>
        </div>
    </section>
}