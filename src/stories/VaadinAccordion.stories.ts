import type { StoryObj } from "@storybook/web-components"
import "@vaadin/accordion"

const meta = {
  title: "Components/vaadin-accordion",
  tags: ["autodocs"],
  render: (args: { theme: string; content: string }) => {
    const element = document.createElement("vaadin-accordion")

    // Function to create a single panel
    const createPanel = (
      theme: string,
      summary: string,
      content: string,
      disabled = false
    ) => `
      <vaadin-accordion-panel theme="${theme}" ${disabled ? "disabled" : ""}>
        <vaadin-accordion-heading slot="summary">${summary}</vaadin-accordion-heading>
        <p>${content}</p>
      </vaadin-accordion-panel>
    `

    // Depending on the args.content, adjust the innerHTML
    switch (args.content) {
      case "disabled":
        element.innerHTML = createPanel(
          args.theme,
          "Disabled Panel",
          "This panel is disabled and cannot be opened.",
          true
        )
        break
      default:
        // Generate multiple panels as needed
        element.innerHTML = [
          createPanel(
            args.theme,
            "Accordion Panel one",
            "Content for panel one."
          ),
          createPanel(args.theme, "Accordion Panel 2", "Content for panel 2."),
        ].join("")
    }

    // Apply a global theme to the accordion if specified
    if (args.theme) {
      element.setAttribute("theme", args.theme)
    }

    return element
  },
  argTypes: {
    theme: {
      control: { type: "select" },
      options: ["filled", "small", "reverse"],
    },
    content: {
      control: { type: "select" },
      options: ["basic", "disabled"],
    },
  },
  args: {
    theme: "filled", // Default theme
    content: "basic", // Default content type
  },
}

export default meta

type Story = StoryObj<typeof meta.args>

export const Basic: Story = {}

export const FilledTheme: Story = {
  args: {
    theme: "filled",
    content: "basic",
  },
}

export const SmallTheme: Story = {
  args: {
    theme: "small",
    content: "basic",
  },
}

export const DisabledPanel: Story = {
  args: {
    theme: "filled",
    content: "disabled",
  },
}
