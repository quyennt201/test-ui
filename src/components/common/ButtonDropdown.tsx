import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    align?: "left" | "right";
    className?: string;
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export default function ButtonDropdown({
    trigger,
    children,
    align = "left",
    className,
    isOpen,
    onOpenChange,
}: DropdownProps) {
    const [open, setOpen] = useState(isOpen ?? false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: PointerEvent) => {
            if (e.target instanceof HTMLElement && !ref.current?.contains(e.target)) {
                setOpen(false);
                if (onOpenChange) {
                    onOpenChange(false);
                }
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isOpen !== undefined) {
            setOpen(isOpen)
        }
    }, [isOpen]);

    return (
        <div className="relative" ref={ref}>
            <div onClick={() => {
                setOpen((prev) => !prev)
                if (onOpenChange) {
                    onOpenChange(!open)
                }
            }} className="cursor-pointer">
                {trigger}
            </div>

            <div
                className={clsx(
                    "absolute z-10 top-[120%] w-60 bg-gray-dark backdrop-blur-2xl border border-white/10 rounded-3xl py-2 px-4 transition-opacity duration-200",
                    align === "right" ? "right-0" : "left-0",
                    open ? "opacity-100" : "opacity-0 pointer-events-none",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}