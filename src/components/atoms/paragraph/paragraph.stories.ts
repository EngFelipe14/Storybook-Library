import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'atoms/paragraphs/Paragraph',
  component: Paragraph,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    children: 'This is a paragraph.',
    color: 'primary',
    size: 'md',
  },
}
