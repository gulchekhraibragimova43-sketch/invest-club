"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/customs/checkbox";

export const HomeProjectsFilter = () => {
    return <div className="space-y-8.5">
        <Select>
            <SelectTrigger className="w-47.5 rounded-full py-4.75 px-6.75 bg-gray-01 text-gray-02 text-[13px] font-medium leading-[100%]">
                <SelectValue placeholder={"Выберите"} />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="popular" >
                    По популярности
                </SelectItem>

                <SelectItem value="sale" >
                    Акции
                </SelectItem>
            </SelectContent>
        </Select>

        <div className="space-y-5">
            <h4 className="text-gray-03 text-2xl leading-[100%] tracking-[-2%]">Арендатор</h4>

            <div className="grid gap-5 grid-cols-2">
                <Checkbox title="Супермаркет" id="supermarket" />
                <Checkbox title="Аптека" id="pharm" />
                <Checkbox title="Общепит" id="food" />
                <Checkbox title="Алко-маркет" id="alco" />
            </div>
        </div>

        <div className="space-y-5">
            <h4 className="text-gray-03 text-2xl leading-[100%] tracking-[-2%]">Формат</h4>

            <div className="grid gap-5 grid-cols-1">
                <Checkbox title="Стрит-ритейл" id="retail" />
                <Checkbox title="Торговый центр" id="center" />
                <Checkbox title="Здание / особняк" id="building" />
                <Checkbox title="Офис" id="ofis" />
            </div>
        </div>

        <div className="space-y-5">
            <h4 className="text-gray-03 text-2xl leading-[100%] tracking-[-2%]">Локация</h4>

            <div className="grid gap-5 grid-cols-1">
                <Checkbox title="Москва" id="moscow" />
                <Checkbox title="Подмосковье" id="moscow2" />
            </div>
        </div>

        <button
            type="button"
            className="inline-block py-8.25 px-13.75 rounded-[6px] bg-linear-to-tr from-[#FAEBD7] via-[#D8B78F] to-[#FAEBD7] text-xl font-medium text-[#624A29] leading-[100%]"
        >
            Показать объекты
        </button>
    </div>
}