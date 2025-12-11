import type { HTMLAttributes, ReactNode} from "react";
import type { textColor } from "../../../core/types/color.type";
import { fontSize } from "../../../core/tokens";

export type HeadingVariant = "display" | "default";
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface BaseHeading extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel,
  variant: HeadingVariant,
  textColor?: textColor,
  headingSize?: keyof typeof fontSize,
  children: ReactNode,
  className?: string
}

interface DisplayHeading extends BaseHeading {
  variant: 'display'
}

interface DefaultHeading extends BaseHeading {
  variant: 'default'

}

export type IHeading = DisplayHeading | DefaultHeading;