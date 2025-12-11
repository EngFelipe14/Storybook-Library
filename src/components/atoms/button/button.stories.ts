import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from "./button";
import { buttonSize } from "../../../core/tokens";
import type { buttonVariant } from './button.types';
import { blur } from '../../../core/tokens';

const variant: buttonVariant[] = ['primary', 'glass', 'ghost']  
const size = Object.keys(buttonSize) as Array<keyof typeof buttonSize>
const backgroundColor = [
  "bg-neutral-100",
  "bg-neutral-300",
  "bg-neutral-500",
  "bg-neutral-700",
  "bg-neutral-900",
  "bg-red-100",
  "bg-red-300",
  "bg-red-500",
  "bg-red-700",
  "bg-red-900",
  "bg-redDark-100",
  "bg-redDark-300",
  "bg-redDark-500",
  "bg-redDark-700",
  "bg-redDark-900",
  "bg-green-100",
  "bg-green-300",
  "bg-green-500",
  "bg-green-700",
  "bg-green-900",
  "bg-blue-100",
  "bg-blue-300",
  "bg-blue-500",
  "bg-blue-700",
  "bg-blue-900",
  "bg-violet-100",
  "bg-violet-300",
  "bg-violet-500",
  "bg-violet-700",
  "bg-violet-900",
  "bg-glass-light",
  "bg-glass-dark"
];
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
const blurAmount = Object.keys(blur) as Array<keyof typeof blur>;

const meta: Meta<typeof Button> = {
	title: 'Atoms/buttons/Button',
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },

		variant: {
			control: { type: "radio" },
			options: variant,
			description: "Estilo visual del botón"
		},

		size: {
			control: { type: "select" },
			options: size,
			description: "Tamaño del botón"
		},

		backgroundColor: {
			control: { type: "select" },
			options: backgroundColor,
			description: "Color de fondo del botón"
		},

		textColor: {
			control: { type: "select" },
			options: textColor,
			description: "Color del texto del botón"
		},

		disabled: {
			control: { type: "boolean" },
			description: "Deshabilita el botón"
		},

		blurAmount: {
			control: { type: "select" },
			options: blurAmount,
			description: "Nivel de blur aplicado en botones glass"
		}
	}
} satisfies Meta<typeof Button>;


export default meta;
type story = StoryObj<typeof Button>;

export const Primary: story = {
	args: {
		label: 'Button primary',
		variant: 'primary',
		size: 'sm',
		backgroundColor: 'bg-blue-500',
		textColor: 'text-neutral-100',
		blurAmount: 'sm',
		disabled: false
	}
}

