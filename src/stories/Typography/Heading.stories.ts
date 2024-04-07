import type { StoryObj } from "@storybook/web-components"

import { Page } from "./Heading"

const meta = {
  title: "Example/Typography/Heading",
  render: () => Page(),
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {}
