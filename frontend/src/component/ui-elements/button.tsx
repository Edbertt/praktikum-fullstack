import { cva, VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 text-center font-medium transition hover:bg-opacity-90 focus:outline-none",
  {
    variants: {
      variant: {
        primary: "bg-indigo-600 text-white",
        green: "bg-green-600 text-white",
        dark: "bg-gray-900 text-white",
        outlinePrimary: "border border-indigo-600 text-indigo-600 hover:bg-indigo-100",
        outlineGreen: "border border-green-600 text-green-600 hover:bg-green-100",
        outlineDark: "border border-gray-900 text-gray-900 hover:bg-gray-100",
      },
      shape: {
        default: "rounded-md",
        rounded: "rounded",
        full: "rounded-full",
      },
      size: {
        default: "px-6 py-3",
        small: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      shape: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    icon?: React.ReactNode;
  };

export function Button({
  label,
  icon,
  variant,
  shape,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button" className={buttonVariants({ variant, shape, size, className })}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
