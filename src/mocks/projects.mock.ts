import { StaticImageData } from "next/image";

export const projectsMock: Project[] = [
    {
        id: "pr-1",
        address: "м. Парк культуры",
        images: ["/projects/pr1.webp", "/projects/pr2.webp"],
        label: `Помещение с арендатором аптека "Горздрав"`,
        options: [
            {
                name: "Площадь",
                value: "210 м",
            },
            {
                name: "Окупаемость",
                value: "11,5 лет"
            }
        ],
        price: 1.2,
        totalPrice: 132,
        time: 5,
    }
] as const;

export interface Project {
    images: (string | StaticImageData)[];
    label: string;
    address: string;
    time: number;
    options: {
        name: string;
        value: string;
    }[];
    totalPrice: number;
    price: number;
    id: string;
}