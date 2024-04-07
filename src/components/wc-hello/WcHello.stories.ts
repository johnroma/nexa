import type { Meta, StoryObj } from "@storybook/web-components"
import { fn } from "@storybook/test"
import type { ButtonProps } from "./types"
import { WcHello } from "./WcHello"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Hello",
  tags: ["autodocs"],
  render: (args: ButtonProps) => {
    const element = new WcHello(args)

    // Set the innerHTML to include a child. This is a basic example.
    // If your component uses slots, you can construct the innerHTML accordingly.
    element.innerHTML = `<span>Child Content Here</span>`

    return element
  },
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    backgroundColor: "#ff0",
  },
}
