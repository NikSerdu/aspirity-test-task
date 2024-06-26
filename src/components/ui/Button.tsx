import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
type TypeProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TypeProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "bg-accent px-4 py-[10px] rounded text-[#E1E3E6] hover:bg-accent/95 transition-all",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
