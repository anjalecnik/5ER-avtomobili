import { FC } from "react";
import { clsx } from "clsx/lite";
import { eButtonTypes } from "~/types/enums/eButtonTypes";

export enum ColoredButtonColors {
  DARK = "bg-component-primary-btn-bg hover:bg-semantic-gray-bg-hover active:bg-semantic-gray-bg-hover",
  GRAY = "bg-semantic-gray-bg hover:bg-semantic-gray-bg-hover active:bg-semantic-gray-bg-hover border-[1px] !border-solid border-white",
  GREEN = "bg-button-primary-btn-bg hover:bg-button-primary-btn-bg-hover active:bg-button-primary-btn-bg-hover",
  MINT = "bg-component-primary-btn-bg hover:bg-component-primary-btn-bg-hover active:bg-component-primary-btn-bg-hover",
  RED = "bg-button-secondary-btn-bg hover:bg-button-secondary-btn-bg-hover active:bg-button-secondary-btn-bg-hover",
  TRANSPARENT = "bg-transparent hover:bg-transparent active:bg-transparent",
  TRANSPARENT_HOVER_GRAY = "bg-transparent hover:bg-semantic-gray-bg-hover active:bg-semantic-gray-bg-hover mr-2",
  WHITE = "text-semantic-gray-bg-weak bg-semantic-gray-bg-strong hover:bg-semantic-background-top active:bg-semantic-background-top",
}

interface IColoredButtonProps {
  name?: string;
  value?: string;
  type?: eButtonTypes;
  disabled?: boolean;
  color?: ColoredButtonColors;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ColoredButton: FC<IColoredButtonProps> = ({
  name = "",
  value = "",
  type,
  disabled,
  color = ColoredButtonColors.MINT,
  className = "",
  children,
  onClick,
}) => {
  return (
    <button
      name={name}
      value={value}
      type={type}
      className={clsx(
        "inline-flex items-center flex-wrap text-center font-semibold border-none rounded-lg text-base py-4 px-6",
        color,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ColoredButton;
