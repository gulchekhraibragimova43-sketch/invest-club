import type { ComponentProps } from "react";
import { cn } from "@/lib/util";

export const Container = ({className, children, ...props}:ComponentProps<"div">) => {
    return <div className={cn("w-container mx-auto px-container", className)} {...props}>
        {children}
    </div>
}
