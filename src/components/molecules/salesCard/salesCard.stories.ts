import type { Meta, StoryObj } from "@storybook/react-vite";
import { SalesCard } from "./salesCard";

const meta: Meta<typeof SalesCard> = {
  title: 'molecules/cards/SalesCard',
  component: SalesCard,
  argTypes: {

  }
} satisfies Meta<typeof SalesCard>

export default meta;
type story = StoryObj<typeof SalesCard>;

export const Default: story = {
  args: {
    heading: 'Corporate',
    variant: 'default',
    description: 'Grow steadily and pizza.',
    price: '$200',
    period: '/mo',
    ctaText: 'Get started',
    
  }
}