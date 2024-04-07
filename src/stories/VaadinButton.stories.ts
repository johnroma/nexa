import type { StoryObj } from "@storybook/web-components"

import "@vaadin/button"
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/vaadin-button",
  tags: ["autodocs"],
  render: (args: { theme: any }) => {
    const element = document.createElement("vaadin-button")

    element.innerHTML = `<span>Child Content Here</span>`
    if (args.theme) {
      element.setAttribute("theme", args.theme)
    }
    return element
  },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
  },
}

export default meta
type Story = StoryObj<any>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: "primary",
  },
}
