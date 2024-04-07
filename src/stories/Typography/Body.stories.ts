import type { StoryObj } from "@storybook/web-components"

import { Page } from "./Body"

const meta = {
  title: "Example/Typography/Body",
  render: () => Page(),
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {}
