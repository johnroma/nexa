import type { Meta, StoryObj } from "@storybook/web-components"

import { Page } from "./Hero"

const meta = {
  title: "Example/Hero",
  render: () => Page(),
} satisfies Meta<any>

export default meta
type Story = StoryObj<any>

export const Default: Story = {}
