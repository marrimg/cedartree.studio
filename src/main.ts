import "./style.css";
import typescriptLogo from "./assets/cts-logo.svg";
import { setupCounter } from "./counter.ts";
const html = String.raw;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`<div>
  <header class="flex items-center justify-center gap-4 px-12 py-4 font-medium">
    <div class="grow-0 shrink-0 basis-auto">
      <img src="${typescriptLogo}" class="w-[225px] h-auto" alt="CTS Logo" />
    </div>
    <nav
      class="grow shrink-0 basis-auto flex items-center justify-center gap-16 justify-self-stretch "
    >
      <a>About</a>
      <a>Services</a>
      <a>Pricing</a>
    </nav>
    <div class="grow-0 shrink-0 basis-auto">
      <a>Get in touch</a>
    </div>
  </header>
  <main
    class="max-w-[800px] mx-auto px-12 pt-4 pb-22 h-full flex gap-12 flex-col justify-center items-center"
  >
    <div class=" flex flex-col gap-20 py-12 align-items-center ">
      <h1 class="font-heading text-7xl font-bold font-callout text-accent">
        Human-centered web design
      </h1>
      <p class="font-callout text-accent text-2xl">
        lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
        voluptatum assumenda dolorem deleniti id excepturi laboris duis commodo
        rerum ullamco amet distinctio mollit tempor in in deserunt aute
      </p>
      <div class="flex items-center justify-center">
        <a
          class="bg-accent text-white px-4 py-2 text-base font-medium hover:bg-blue-600"
          >Get in touch</a
        >
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-bold font-callout text-accent">About</h2>
      <p class="text-accent">
        lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
        voluptatum assumenda dolorem deleniti id excepturi laboris duis commodo
        rerum ullamco amet distinctio mollit tempor in in deserunt aute
      </p>
    </div>

    <div>
      <h2 class="text-2xl font-bold font-callout text-accent">Services</h2>
      <p class="text-accent">
        lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
        voluptatum assumenda dolorem deleniti id excepturi laboris duis commodo
        rerum ullamco amet distinctio mollit tempor in in deserunt aute
      </p>
    </div>

    <div>
      <h2 class="text-2xl font-bold font-callout text-accent">Pricing</h2>
      <p class="text-accent">
        lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
        voluptatum assumenda dolorem deleniti id excepturi laboris duis commodo
        rerum ullamco amet distinctio mollit tempor in in deserunt aute
      </p>
    </div>
  </main>
  <footer
    class="bg-accent text-white h-42 px-12 py-12 flex justify-around items-center"
  >
    <div>@2026 Cedar Tree Studio</div>
    <div>hello@cedartree.studio</div>
  </footer>
</div> `;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
