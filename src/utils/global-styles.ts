let globalSheets: CSSStyleSheet[] | null = null

export function getGlobalStyleSheets(): CSSStyleSheet[] {
  if (globalSheets === null) {
    globalSheets = Array.from(document.styleSheets)
      .filter(
        (sheet) =>
          sheet.href === null || !sheet.href.includes("fonts.googleapis.com")
      ) // Exclude Google Fonts
      .map((sheet) => {
        try {
          console.log(sheet.cssRules) // Logs CSSRuleList
          const newSheet = new CSSStyleSheet()
          const cssTexts = Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join(" ")
          newSheet.replaceSync(cssTexts)
          return newSheet
        } catch (e) {
          console.warn(
            `Failed to read cssRules from stylesheet. Stylesheet href: ${sheet.href}`,
            e
          )
          return null // Return null to filter out later
        }
      })
      .filter((sheet): sheet is CSSStyleSheet => sheet !== null) // Filter out nulls after map
  }
  return globalSheets
}
