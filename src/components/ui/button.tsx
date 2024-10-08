import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "py-2 inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#7ABF21] text-white hover:bg-[#7ABF21] shadow-md shadow-[#7ABF21]/40 hover:shadow-[0_2px_8px] hover:shadow-[#7ABF21]/40",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive",
        outline:
          "border-2 border-input bg-transparent hover:bg-[#7ABF21] hover:border-transparent hover:text-[#7ABF21]-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary",
        ghost: "hover:bg-[#7ABF21] hover:text-[#7ABF21]-foreground",
        link: "text-[#7ABF21] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        none: "p-0",
        sm: "h-9 px-3 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
