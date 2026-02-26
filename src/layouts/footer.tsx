import Image from "next/image"
import Logo from "$public/logo.webp"
import Link from "next/link"

export const Footer = () => {
    return <footer className="bg-[#1B1F28] pt-12.5 px-57.5">
        <div className="flex gap-36.75">
            <div>
                <Image src={Logo} alt="logo" />
            </div>

            <div className="flex gap-5">
                <div className="pt-1.75">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#F0CA91]" />
                </div>
                <p className="text-white text-[16px] leading-[130%] tracking-[-2%] shrink-0">
                    г. Москва, Москва-сити, <br />
                    башня Федерация, офис 234
                </p>
            </div>

            <Link href={"#!"} className="text-[#646D82] leading-[120%] font-medium text-[18px] underline shrink-0">
                Политика конфиденциальности
            </Link>

            <div className="shrink-0">
                <h3 className="text-white text-[24px]">
                    +7 495 999 99 99
                </h3>
                <p className="text-[#646D82] text-[14px] font-medium text-right">
                    Консультация специалиста
                </p>
            </div>
        </div>

        <div className="pt-15 pb-10.5 text-[#646D82] text-[13px] tracking-[-2%] font-medium text-center">
            <p>Предложения, размещенные на данном сайте, не являются публичной офертой.</p>
            <div className="flex gap-10 justify-center">
                <p>ИНН 000000000000</p>
                <p>ОГРН 000000000000</p>
            </div>
        </div>
    </footer>
}