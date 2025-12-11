import type { JSX } from "react";
import type { IHeading } from "./heading.types";


export const Heading = (props: IHeading): JSX.Element => {
  const { variant, level, textColor, children, headingSize, className } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`heading heading-${variant} heading-${textColor} font-size-${headingSize} ${className}`} >
      {children}
    </Tag>
  );
}