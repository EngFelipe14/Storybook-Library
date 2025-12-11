import { spacing, fontSize } from "./index";

export const buttonSize = {
  sm: {
    padding: `${spacing[2]} ${spacing[3]}`,
    font: fontSize.sm,
    height: "32px",
  },
  md: {
    padding: `${spacing[3]} ${spacing[4]}`,
    font: fontSize.md,
    height: "40px",
  },
  lg: {
    padding: `${spacing[4]} ${spacing[5]}`,
    font: fontSize.lg,
    height: "48px",
  },
};