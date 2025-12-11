import type { HTMLAttributes } from "react";
import { buttonSize } from "../../../core/tokens";
import { blur } from "../../../core/tokens";
import type { backgroundColor, textColor } from "../../../core/types/color.type";

export type buttonVariant = "primary" | "glass" | "ghost";

interface BaseButton extends HTMLAttributes<HTMLButtonElement> {
  label?: string,
  variant: buttonVariant,
  size: keyof typeof buttonSize,
  backgroundColor?: backgroundColor,
  textColor?: textColor,
  blurAmount?: keyof typeof blur,
  disabled?: boolean,
  className?: string;
}

interface PrimaryButton extends BaseButton {
  variant: "primary"
}

interface GlassButton extends BaseButton {
  variant: "glass"
}

interface GhostButton extends BaseButton {
  variant: "ghost"
}

export type IButton = PrimaryButton | GlassButton | GhostButton;
