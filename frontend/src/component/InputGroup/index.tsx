import { cn } from "@/lib/utils";
import { type HTMLInputTypeAttribute, useId } from "react";

type InputGroupProps = {
  className?: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  fileStyleVariant?: "style1" | "style2";
  required?: boolean;
  disabled?: boolean;
  active?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  height?: "sm" | "default";
  defaultValue?: string;
};

const InputGroup: React.FC<InputGroupProps> = ({
  className,
  label,
  type,
  placeholder,
  required,
  disabled,
  active,
  handleChange,
  icon,
  ...props
}) => {
  const id = useId();

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-900"
      >
        {label}
        {required && <span className="ml-1 select-none text-red-500">*</span>}
      </label>

      <div
        className={cn(
          "relative mt-3 [&_svg]:absolute [&_svg]:top-1/2 [&_svg]:-translate-y-1/2",
          props.iconPosition === "left"
            ? "[&_svg]:left-4"
            : "[&_svg]:right-4"
        )}
      >
        <input
          id={id}
          type={type}
          name={props.name}
          placeholder={placeholder}
          onChange={handleChange}
          value={props.value}
          defaultValue={props.defaultValue}
          className={cn(
            "w-full rounded-lg border-[1.5px] border-gray-200 bg-transparent outline-none transition focus:border-indigo-600 disabled:cursor-default disabled:bg-gray-100 data-[active=true]:border-indigo-600",
            type === "file"
              ? getFileStyles(props.fileStyleVariant!)
              : "px-5 py-3 text-gray-900 placeholder:text-gray-400",
            props.iconPosition === "left" && "pl-12",
            props.height === "sm" && "py-2.5"
          )}
          required={required}
          disabled={disabled}
          data-active={active}
        />

        {icon}
      </div>
    </div>
  );
};

export default InputGroup;

function getFileStyles(variant: "style1" | "style2") {
  switch (variant) {
    case "style1":
      return [
        "file:mr-5",
        "file:border-collapse",
        "file:cursor-pointer",
        "file:border-0",
        "file:border-r",
        "file:border-solid",
        "file:border-gray-200",
        "file:bg-gray-200",
        "file:px-6",
        "file:py-3",
        "file:text-sm",
        "file:font-medium",
        "file:text-gray-500",
        "file:hover:bg-indigo-100",
        "file:hover:bg-opacity-50",
      ].join(" ");
    default:
      return [
        "file:mr-4",
        "file:rounded",
        "file:border",
        "file:border-[0.5px]",
        "file:border-gray-200",
        "file:bg-gray-200",
        "file:px-2",
        "file:py-1",
        "file:text-xs",
        "file:font-medium",
        "file:text-gray-500",
        "file:focus:border-indigo-600",
        "px-3",
        "py-[9px]",
      ].join(" ");
  }
}
