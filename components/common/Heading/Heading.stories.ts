import { Meta, StoryObj } from '@storybook/react'
import Heading from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Common/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    text: 'This is a Heading',
    level: 1,
    className: '',
  },
}

export const H1: Story = {
  args: {
    text: 'Heading Level 1',
    level: 1,
  },
}

export const H2: Story = {
  args: {
    text: 'Heading Level 2',
    level: 2,
  },
}

export const H3: Story = {
  args: {
    text: 'Heading Level 3',
    level: 3,
  },
}

export const CustomStyle: Story = {
  args: {
    text: 'Custom Styled Heading',
    level: 2,
    className: 'text-red-500',
  },
}
