import { LitElement, html, unsafeCSS } from "lit"
import { customElement, property } from "lit/decorators.js"
import { CardProps } from "./types"
import { cssString } from "./style.ts"
import { getGlobalStyleSheets } from "../../utils/global-styles.js"

import "@vaadin/button"
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("wc-card")
export class WcCard extends LitElement {
  @property({ type: Number })
  count = 0

  @property({ type: String })
  label = ""

  @property({ type: String })
  backgroundColor = ""

  @property({ type: Function })
  onClick = () => {}

  constructor({ label, onClick }: CardProps) {
    super()

    this.label = label
    this.onClick = onClick
  }

  render() {
    return html`
      <section class="wrapper card">
        <slot name="headline"></slot>
        <slot name="body"></slot>
        <vaadin-button
          class="button-1"
          theme="primary"
          @click=${this._onClick}
          >${this.label} count is ${this.count}</vaadin-button
        >
      </section>
    `
  }

  private _onClick() {
    this.onClick && this.onClick()
    this.count++
  }

  static styles = [getGlobalStyleSheets(), unsafeCSS(cssString)]
}

declare global {
  interface HTMLElementTagNameMap {
    "wc-card": WcCard
  }
}
