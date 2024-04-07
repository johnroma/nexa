import { html } from "lit"
import "./typography.css"

export const Typography = () => html`
  <article>
    <h1 class="font-display-large">Heading 1</h1>
    <section>
      <h2 class="font-heading-small">Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>

      <p>
        Get a guided tutorial on component-driven development at
        <a
          href="https://storybook.js.org/tutorials/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook tutorials
        </a>
        . Read more in the
        <a
          href="https://storybook.js.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>
        .
      </p>
    </section>

    <section>
      <h2 class="font-heading-large">Heading large</h2>
      <p class="font-body-base">
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app
      </p>
      <h3 class="font-heading-small">Pages in Storybook</h3>
      <p class="font-body-base">
        We recommend building UIs with a
        <a
          href="https://componentdriven.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p class="font-body-base">
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>
    </section>
    <section>
      <h2 class="font-heading-medium">Heading medium</h2>
      <p class="font-body-base">
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app
      </p>
    </section>
  </article>
`
