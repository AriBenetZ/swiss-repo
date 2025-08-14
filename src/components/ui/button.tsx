import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-accent to-accent-hover text-text-primary border border-accent shadow-[0_2px_8px_rgba(139,92,246,0.15),0_1px_4px_rgba(139,92,246,0.1)] hover:shadow-[0_4px_16px_rgba(139,92,246,0.25),0_2px_12px_rgba(139,92,246,0.15)] transition-shadow duration-300",
        premium: "bg-gradient-to-r from-accent-primary to-accent-secondary text-text-primary border border-accent-primary shadow-[0_4px_16px_rgba(212,175,55,0.2),0_0_0_1px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.3),0_0_0_1px_rgba(212,175,55,0.2),0_0_32px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-300",
        "gold-elegant": "bg-gradient-to-r from-accent-primary to-accent-secondary text-text-primary border border-accent-primary shadow-[0_4px_16px_rgba(212,175,55,0.25),0_0_0_1px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.35),0_0_0_1px_rgba(212,175,55,0.2),0_0_32px_rgba(212,175,55,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-1 transition-all duration-300",
        secondary: "bg-transparent text-text-primary border border-border-primary backdrop-blur-sm hover:bg-bg-secondary hover:border-border-secondary hover:shadow-md transition-all duration-200",
        destructive: "bg-error text-text-primary border border-error hover:bg-error-hover hover:shadow-lg transition-all duration-200",
        outline: "border border-border-primary bg-transparent hover:bg-bg-secondary hover:border-border-secondary hover:text-text-primary transition-all duration-200",
        ghost: "bg-transparent text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-200",
        link: "text-accent-secondary underline-offset-4 hover:underline hover:text-accent transition-colors duration-200",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
