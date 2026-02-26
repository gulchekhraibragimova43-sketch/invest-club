"use client";

import { cn } from "@/lib/util";
import { cva, type VariantProps, } from "class-variance-authority";
import type { ComponentProps } from "react";

export const inputVariants = cva("inline-block rounded-[6px] w-full placeholder:text-[#81899B] text-black text-xl leading-[100%]", {
    variants: {
        backgroundColor: {
            default: "bg-white",
            gray: "bg-[#F0F2F3]"
        },
        inputType: {
            file: "border border-gray-300",
            default: "",
        },
        inputSize: {
            default: "py-[33px] px-[38px]",
            sm: "py-[20px] px-[26px]"
        }
    },
    defaultVariants: {
        backgroundColor: "default",
        inputSize: "default",
        inputType: "default"
    }
})

export const Input = ({
    className,
    type = "text",
    backgroundColor,
    inputSize,
    inputType,
    ...props
}: ComponentProps<"input"> & VariantProps<typeof inputVariants>) => {
    return <input
        type={type}
        className={
            cn(inputVariants({ backgroundColor, inputSize, inputType }), className)
        }
        {...props}
    />
}