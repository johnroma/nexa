import { html } from "lit"
import "./hero.css"
import "@vaadin/button"
import { WcCard } from "../../components/wc-card/wc-card"

const hello1 = (() => {
  const element = new WcCard({
    primary: true,
    label: "Button",
    onClick: () => console.log("Hello"),
  } as any)

  element.innerHTML = `<h2 class="font-heading-medium" slot="headline">Child Content Here</h2><p class="font-body-medium" slot="body">Isländsk ambient, danskt vemod, walesisk falsettsång & varm japansk indiefolk, allt detta och mycket mer möts i dagens chillmix, där vi också får svaret på hur låter det när en biolog och en narkosläkare slår sina musikpåsar samman.</p><p class="font-body-medium" slot="body">Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.</p>`

  return element
})()

const hello2 = (() => {
  const element = new WcCard({
    primary: false,
    label: "Button",
    onClick: () => console.log("Hello2"),
  } as any)

  element.innerHTML = `<h2 class="font-heading-large" slot="headline">This is another component</h2><p class="font-body-medium" slot="body">Isländsk ambient, danskt vemod, walesisk falsettsång & varm japansk indiefolk, allt detta och mycket mer möts i dagens chillmix, där vi också får svaret på hur låter det när en biolog och en narkosläkare slår sina musikpåsar samman.</p><p class="font-body-medium" slot="body">Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically.</p>`

  return element
})()

export const Page = () => html`${hello1}${hello2}`
