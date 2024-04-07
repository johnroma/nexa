import { LitElement, html, unsafeCSS } from "lit"
import { customElement, property } from "lit/decorators.js"
import { ButtonProps } from "./types"
import { styleMap } from "lit/directives/style-map.js"
import { cssString } from "./style.ts"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("wc-hello")
export class WcHello extends LitElement {
  @property()
  docsHint = "Click on the Vite and Lit logos to learn morex"

  @property({ type: Number })
  count = 0

  @property({ type: String })
  mode = ""
  size = ""
  label = ""

  @property({ type: String })
  backgroundColor = ""

  @property({ type: Function })
  onClick = () => {}

  constructor({ primary, backgroundColor, size, label, onClick }: ButtonProps) {
    super()
    console.log("WcHello constructor", primary)

    this.backgroundColor = backgroundColor ?? ""
    this.size = size ?? "medium"
    this.label = label
    this.onClick = onClick
    this.mode = primary
      ? "storybook-button--primary"
      : "storybook-button--secondary"
  }

  render() {
    return html`
      <div style=${styleMap({ backgroundColor: this.backgroundColor })}>
        <slot></slot>
        <button
          type="button"
          class=${[
            "storybook-button",
            `storybook-button--${this.size || "medium"}`,
            this.mode,
          ].join(" ")}
          @click=${this._onClick}
        >
          ${this.label} count is ${this.count}
        </button>
      </div>
    `
  }

  private _onClick() {
    this.onClick()
    this.count++
  }

  static readonly styles = unsafeCSS(cssString)
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-hello": WcHello
  }
}
export { cssString }
