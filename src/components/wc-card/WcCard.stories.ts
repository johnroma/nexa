import type { Meta, StoryObj } from "@storybook/web-components"
import { fn } from "@storybook/test"
import type { CardProps } from "./types"
import { WcCard } from "./WcCard"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Card",
  tags: ["autodocs"],
  render: (args: CardProps) => {
    const element = new WcCard(args)

    // Set the innerHTML to include a child. This is a basic example.
    // If your component uses slots, you can construct the innerHTML accordingly.
    element.innerHTML = `<h2 slot="headline">Child Content Here</h2><p slot="body">Two Content Here</p><p slot="body">xTwo Content Here</p>`

    return element
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<CardProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
}
