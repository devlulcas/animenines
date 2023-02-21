import clsx from "clsx";
import { createElement } from "react";

type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({
  children,
  as = "h2",
  className,
  ...rest
}: HeadingProps) {
  return createElement(
    as,
    {
      className: clsx("p-4 text-2xl font-bold text-white", className),
      ...rest,
    },
    children
  );
}
