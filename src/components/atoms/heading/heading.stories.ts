import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./heading";
import type { HeadingVariant, HeadingLevel } from "./heading.types";
import type { textColor } from "../../../core/types/color.type";

const variant: HeadingVariant[] = ['display', 'default'];
const level: HeadingLevel[] = [1, 2, 3, 4, 5, 6];
const textColor = [
  "text-neutral-100",
  "text-neutral-300",
  "text-neutral-500",
  "text-neutral-700",
  "text-neutral-900",
  "text-red-100",
  "text-red-300",
  "text-red-500",
  "text-red-700",
  "text-red-900",
  "text-redDark-100",
  "text-redDark-300",
  "text-redDark-500",
  "text-redDark-700",
  "text-redDark-900",
  "text-green-100",
  "text-green-300",
  "text-green-500",
  "text-green-700",
  "text-green-900",
  "text-blue-100",
  "text-blue-300",
  "text-blue-500",
  "text-blue-700",
  "text-blue-900",
  "text-violet-100",
  "text-violet-300",
  "text-violet-500",
  "text-violet-700",
  "text-violet-900",
  "text-glass-light",
  "text-glass-dark"
];


const meta: Meta<typeof Heading> = {
  title: 'Atoms/headings/heading',
  component: Heading,
  argTypes: {
    children: {
      control: {type: 'text'},
      options: [''],
      description: 'Texto del título'
    },

    variant: {
      control: {type: 'radio'},
      options: variant,
      description: 'Estilo visual de título'
    },

    level: {
      control: {type: 'select'},
      options: level,
      description: 'Nivel del título'
    },

    textColor: {
      control: {type: 'select'},
      options: textColor,
      description: 'Color del texto del título'
    },

    className: {
      control: {type: 'text'},
      options: [''],
      description: 'Extensión controlada para estilos'
    }
  }
} satisfies Meta<typeof Heading>

export default meta;
type story = StoryObj<typeof Heading>;

export const Default: story = {
  args: {
    children: 'Prueba Heading',
    variant: 'default',
    level: 1,
    textColor: 'text-glass-dark'
  }
}