"use client";

import { cn } from "@/lib/util";
import { Check } from "lucide-react";
import { ComponentProps } from "react";

export const Checkbox = ({ checked, onChange, id, title, ...props }: ComponentProps<"span"> & {
    onChange?(checked: boolean): void;
    checked?: boolean;
    title?: string;
}) => {
    return <label htmlFor={id} className="inline-flex relative gap-2.5 items-center">
        <input
            type="checkbox"
            className="opacity-0 absolute top-0 left-0 -z-10 origin-checkbox"
            checked={checked}
            onChange={e => onChange?.(e.currentTarget.checked)}
            id={id}
        />

        <span className={cn("inline-flex w-6 h-6 rounded border-2 border-gray-03 custom-checkbox justify-center items-center", props.className)} {...props}>
            <Check className="size-4.5 check-icon shrink-0" />
        </span>

        {
            title && <span data-slot={"title"} className="text-xl leading-[100%] text-[#1B1F28]">
                {title}
            </span>
        }
    </label>
}