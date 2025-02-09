import { HTMLProps } from "react";
import { clsx } from "clsx/lite";

export type TypographyVariant =
  | "display1"
  | "display2"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "sectionHeader"
  | "body"
  | "paragraph"
  | "bodySemiBold"
  | "paragraphSemiBold"
  | "bodyBold"
  | "paragraphBold"
  | "small"
  | "smallSemiBold"
  | "smallBold"
  | "xsmall"
  | "xsmallSemiBold"
  | "xsmallBold";

interface ITypography {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  style?: React.CSSProperties;
}

export default function Typography({
  variant = "body",
  children,
  className,
  style,
}: ITypography) {
  switch (variant) {
    case "display1":
      return (
        <h1
          className={clsx(
            "ml-0 mr-0 text-[2rem] leading-10 font-light mb-4 fontSizeBp:text-[clamp(2rem,_6.67vw,_5rem)] fontSizeBp:leading-[clamp(2.5rem,_6.67vw,_5rem)]",
            className
          )}
          style={style}
        >
          {children}
        </h1>
      );
    case "display2":
      return (
        <h2
          className={clsx(
            "ml-0 mr-0 text-[2rem] leading-10 font-light mb-4 fontSizeBp:text-[clamp(2rem,_5.335vw,_4rem)] fontSizeBp:leading-[clamp(2.5rem,_5.335vw,_4rem)]",
            className
          )}
          style={style}
        >
          {children}
        </h2>
      );
    case "h1":
      return (
        <h1
          className={clsx(
            "ml-0 mr-0 text-[26px] fontSizeBp:text-[clamp(2rem,_4vw,_3rem)] fontSizeBp:leading-[clamp(2.5rem,_4vw,_3rem)] font-light mb-4",

            className
          )}
          style={style}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={clsx(
            "ml-0 mr-0 text-[1.5rem] leading-8 font-light mb-4 fontSizeBp:text-[clamp(1.5rem,_2.667vw,_2rem)] fontSizeBp:leading-[clamp(2rem,_3.334vw,_2.5rem)]",
            className
          )}
          style={style}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={clsx(
            "ml-0 mr-0 text-[1.25rem] leading-7 font-light mb-4 min-[481px]:text-[clamp(1.25rem,_2.667vw,_1.5rem)] min-[481px]:leading-[clamp(1.75rem,_3.334vw,_2rem)]",
            className
          )}
          style={style}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={clsx(
            "ml-0 mr-0 text-[1.125rem] leading-relaxed font-normal mb-4 fontSizeBp:text-[clamp(1.125rem,_1.667vw,_1.25rem)] fontSizeBp:leading-[clamp(1.625rem,_2.334vw,_1.75rem)]",
            className
          )}
          style={style}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={clsx(
            "ml-0 mr-0 text-[1.125rem] leading-[1.625rem] font-bold mb-4",
            className
          )}
          style={style}
        >
          {children}
        </h5>
      );
    case "body":
      return (
        <p
          className={clsx("ml-0 mr-0 text-[1rem] leading-6 mb-4", className)}
          style={style}
        >
          {children}
        </p>
      );
    case "bodyBold":
      return (
        <p
          className={clsx(
            "ml-0 mr-0 text-[1rem] leading-6 font-bold mb-4",
            className
          )}
          style={style}
        >
          {children}
        </p>
      );
    case "small":
      return (
        <small
          className={clsx("ml-0 mr-0 text-[0.875rem] leading-5", className)}
          style={style}
        >
          {children}
        </small>
      );
    case "smallBold":
      return (
        <small
          className={clsx(
            "ml-0 mr-0 text-[0.875rem] leading-5 font-bold",
            className
          )}
          style={style}
        >
          {children}
        </small>
      );
    case "xsmall":
      return (
        <small
          className={clsx("ml-0 mr-0 text-[0.75rem] leading-4", className)}
          style={style}
        >
          {children}
        </small>
      );
  }
}
