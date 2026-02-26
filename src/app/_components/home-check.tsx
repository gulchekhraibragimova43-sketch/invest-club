import { Container } from "@/components/ui/container"

export const HomeCheck = () => {
    return <section>
        <Container>
            <div className="pt-30">
                <h1 className="text-center text-[50px] tracking-[-2%] leading-[120%] mb-20">
                    Каждый объект проходит <br />
                    5 обязательных этапов проверки
                </h1>

                <div className="flex gap-10 justify-center">
                    <div className="bg-[#F5F8FB] pt-15.75 pl-10.25 pr-10.25 pb-21.25 rounded-2xl relative w-90">
                        <p className="text-gray-400 absolute top-7 right-7">
                            01
                        </p>
                        <h3 className="tracking-[-2%] text-[26px] mb-4">
                            Юридическая <br />
                            чистота
                        </h3>
                        <p className="font-light text-[16px] tracking-[-2%] leading-[140%]">
                            Все объекты проверяются
                            юридическим департаментом
                            на наличие обременений,
                            нахождение в залоге и любых
                            обязательств, связанных с объектом.
                        </p>
                    </div>

                    <div className="bg-[#F5F8FB] pt-15.75 pl-10.25 pr-10.25 pb-21.25 rounded-2xl relative w-90">
                        <p className="text-gray-400 absolute top-7 right-7">
                            02
                        </p>
                        <h3 className="tracking-[-2%] text-[26px] mb-4">
                            Справедливая <br />
                            стоимость
                        </h3>
                        <p className="font-light text-[16px] tracking-[-2%] leading-[140%]">
                            На рынке большинство объектов
                            продаются по завышенной цене.
                            Мы занимаемся недвижимостью
                            8 лет и понимаем рыночную
                            стоимость каждого объекта.
                            Не предлагаем то, что не окупится.
                        </p>
                    </div>

                    <div className="bg-[#F5F8FB] pt-15.75 pl-10.25 pr-10.25 pb-21.25 rounded-2xl relative w-90">
                        <p className="text-gray-400 absolute top-7 right-7">
                            03
                        </p>
                        <h3 className="tracking-[-2%] text-[26px] mb-4">
                            Строительная <br />
                            экспертиза
                        </h3>
                        <p className="font-light text-[16px] tracking-[-2%] leading-[140%]">
                            Вы можете быть уверены в том,
                            что вашему объекту после покупки
                            не понадобится ремонт, устранение
                            недочетов и другие финансовые
                            вложения. Все объекты в отличном
                            состоянии.
                        </p>
                    </div>
                </div>

                <div className="flex gap-10 justify-center mt-10">
                    <div className="bg-[#F5F8FB] pt-15.75 pl-10.25 pr-10.25 pb-15.75 rounded-2xl relative w-140">
                        <p className="text-gray-400 absolute top-7 right-7">
                            04
                        </p>
                        <h3 className="tracking-[-2%] text-[26px] mb-4">
                            Надежные договора <br />
                            с арендаторами
                        </h3>
                        <p className="font-light text-[16px] tracking-[-2%] leading-[140%]">
                            Покупая помещение с арендатором, есть риски того, что
                            действующий договор аренды не выгоден для собственника
                            и накладывает множество обязательств. Мы  анализируем
                            каждый договор и исключаем подобные объекты.
                        </p>
                    </div>

                    <div className="bg-[#F5F8FB] pt-15.75 pl-10.25 pr-10.25 pb-15.75 rounded-2xl relative w-140">
                        <p className="text-gray-400 absolute top-7 right-7">
                            05
                        </p>
                        <h3 className="tracking-[-2%] text-[26px] mb-4">
                            Высокая ликвидность <br />
                            и рост капитализации
                        </h3>
                        <p className="font-light text-[16px] tracking-[-2%] leading-[140%]">
                            Мало кто задумывается о том, сколько будет стоить объект
                            через 5-10-20 лет и сможет ли собственник его быстро продать
                            в случае необходимости. Мы предусматриваем даже такие
                            тонкости и отбираем проекты с растущей капитализацией.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}