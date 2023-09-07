import type { Meta, StoryObj } from '@storybook/react'
import App from './App'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Modal',
  component: App,
  parameters: {
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: [],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomBackgroundColor: Story = {
  args: {
    backgroundColor: '#ffc0cb5e',
    zIndex: 1
  }
}

export const CustomZIndex: Story = {
  args: {
    zIndex: 0
  }
}
