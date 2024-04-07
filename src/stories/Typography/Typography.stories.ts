import type { StoryObj } from "@storybook/web-components"

import { Typography } from "./Typography"

const meta = {
  title: "Example/Typography",
  render: () => Typography(),
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {}
