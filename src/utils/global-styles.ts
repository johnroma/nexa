let globalSheets: CSSStyleSheet[] | null = null

export function getGlobalStyleSheets(): CSSStyleSheet[] {
  if (globalSheets === null) {
    globalSheets = Array.from(document.styleSheets)
      .map((sheet) => {
        // Create a new CSSStyleSheet instance.
        const newSheet = new CSSStyleSheet()

        // Attempt to access cssRules of the current sheet. This may fail due to CORS policies.
        try {
          const css = Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join(" ")
          newSheet.replaceSync(css)
        } catch (e) {
          console.warn(
            "Failed to access cssRules; possibly due to CORS policy.",
            e
          )
        }

        return newSheet
      })
      .filter((sheet): sheet is CSSStyleSheet => sheet !== undefined)
  }

  return globalSheets
}

export function addGlobalStylesToShadowRoot(shadowRoot: ShadowRoot): void {
  shadowRoot.adoptedStyleSheets = [
    ...shadowRoot.adoptedStyleSheets,
    ...getGlobalStyleSheets(),
  ]
}
