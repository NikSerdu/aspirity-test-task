import cn from "clsx";
import { ButtonHTMLAttributes, FC } from "react";
type TypeProps = {
  color: string;
  label: string;
  info: string;
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const LegendItem: FC<TypeProps> = ({
  color,
  label,
  info,
  isActive,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-between border border-border-primary px-[10px] py-[11px] rounded-2xl leading-6",
        {
          "border-white": isActive,
        }
      )}
      {...rest}
    >
      <div className="flex gap-2 items-center">
        <div
          className={cn("w-[6px] h-[6px] rounded-full")}
          style={{
            backgroundColor: color,
          }}
        ></div>
        <p>{label}</p>
      </div>
      <div className="">
        <p>{info}</p>
      </div>
    </button>
  );
};

export default LegendItem;
