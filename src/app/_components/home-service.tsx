import { Container } from "@/components/ui/container"

export const HomeService = () => {
    const items = [
        {
            id: 1,
            label: ">30",
            text: "актуальных объектов в нашем каталоге"
        },
        {
            id: 2,
            label: "0%",
            text: "комиссии для покупателя"
        },
        {
            id: 3,
            label: "13 млн",
            text: "стоимость минимального объекта"
        },
        {
            id: 4,
            label: "100%",
            text: "гарантия безопасности и надежности"
        },
    ]

    return <section className="pt-30 pb-26">
        <Container>
            <h2 className="text-center leading-[120%] text-[50px] tracking-[-2%] mb-7.5">
                <span className="uppercase">IZRAEV INVEST CLUB</span>  предлагает <br /> самый простой и удобный сервис
            </h2>

            <p className="text-center font-light leading-[130%] tracking-[-2%]">
                по покупке арендного бизнеса в Москве и Московской области
            </p>

            <ul className="pt-20 flex items-center justify-center gap-30">
                {
                    items.map(item => <li key={item.id} className="flex flex-col w-62.5 relative pl-9">
                        <big className="text-[64px] font-light ">{item.label}</big>

                        <p className="text-lg font-light leading-[130%] tracking-[-2%]">
                            {item.text}
                        </p>

                        <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#E0EAF4]">
                            <div className="w-1 rounded-t-full rounded-b-full h-15.5 bg-[#F0CA91]"></div>
                        </div>
                    </li>)
                }
            </ul>
        </Container>
    </section>
}