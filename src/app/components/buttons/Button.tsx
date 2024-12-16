"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button as MUIButton, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";
import styles from "./button.module.css";

// Define custom button variants with class-variance-authority
const buttonVariants = cva(styles.base, {
    variants: {
        variant: {
            default: styles.default,
            destructive: styles.destructive,
            outline: styles.outline,
            secondary: styles.secondary,
            ghost: styles.ghost,
            link: styles.link,
        },
        size: {
            default: styles.defaultSize,
            sm: styles.smallSize,
            lg: styles.largeSize,
            xl: styles.extraLargeSize,
            icon: styles.iconSize,
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

// Define ButtonProps with a mapping for MUI's built-in props
export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    asLink?: boolean;
    href?: string;
    onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size,
            asChild = false,
            children,
            isLoading,
            asLink,
            href,
            onClick,
            ...props
        },
        ref
    ) => {
        const router = useRouter();

        // Mapping custom variants and sizes to Material UI equivalents
        const muiVariant = variant === "default" ? "contained" : variant;
        const muiSize = size === "default" ? "medium" : size === "lg" ? "large" : size === "sm" ? "small" : "medium"; // Handle default case for unrecognized sizes

        const handleClick = () => {
            if (asLink && href) {
                router.push(href);
            } else if (onClick) {
                onClick();
            }
        };

        return (
            <MUIButton
                variant={muiVariant as any}
                size={muiSize as any}
                onClick={handleClick}
                ref={ref}
                disabled={isLoading}
                className={buttonVariants({ variant, size, className })}
                {...props as any}
            >
                {isLoading && (
                    <div className={styles.loader}>
                        <CircularProgress size="1.5em" />
                    </div>
                )}
                <span style={{ opacity: isLoading ? 0 : 1 }}>{children}</span>
            </MUIButton>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
