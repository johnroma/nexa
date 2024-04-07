import type { StoryObj } from "@storybook/web-components"

import { Page } from "./Display"

const meta = {
  title: "Example/Typography/Display",
  render: () => Page(),
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {}
