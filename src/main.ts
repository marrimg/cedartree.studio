import "./style.css";
import typescriptLogo from "./assets/cts-logo.svg";
import { setupCounter } from "./counter.ts";
const html = String.raw;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`<div
  class="relative"
>
  <header
    class="flex items-center justify-center gap-4 px-12 font-medium h-[95px] absolute top-0 left-0 right-0 z-50"
  >
    <div class="grow-0 shrink-0 basis-auto">
      <img src="${typescriptLogo}" class="w-[225px] h-auto" alt="CTS Logo" />
    </div>
    <nav
      class="grow shrink-0 basis-auto flex items-center justify-center gap-16 justify-self-stretch "
    >
      <a href="#about" class="hover:text-accent-hover">About</a>
      <a href="#services" class="hover:text-accent-hover">Services</a>
      <a href="#process" class="hover:text-accent-hover">Our Process</a>
      <a href="#pricing" class="hover:text-accent-hover">Pricing</a>
    </nav>
    <div class="grow-0 shrink-0 basis-auto hover:text-accent-hover">
      <a href="mailto:hello@cedartree.studio">Get in touch</a>
    </div>
  </header>
  <main class="mx-auto pb-22 w-full flex flex-col pt-[95px]">
    <section class="grid grid-rows-12 grid-cols-12 h-[calc(100dvh-110px)]">
      <div
        class="row-span-9 row-start-3 col-span-6 col-start-4 flex flex-col gap-16"
      >
        <h1 class="font-heading text-7xl font-header text-accent text-center">
          Human-centered web design
        </h1>
        <p class="font-callout text-accent text-2xl text-center">
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
        <div class="flex items-center justify-center">
          <a
            href="mailto:hello@cedartree.studio"
            class="bg-accent text-white px-4 py-2 text-base font-medium bg-accent hover:bg-accent-hover"
            >Get in touch</a
          >
        </div>
      </div>
    </section>
    <section class="bg-accent text-white p-8 grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2 class="text-2xl font-bold font-callout" id="about">About</h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
      </div>
    </section>

    <section class="p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2 class="text-2xl font-bold font-callout text-accent" id="services">
          Services
        </h2>
        <p class="text-accent">
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
      </div>
    </section>

    <section class="bg-accent text-white p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2 class="text-2xl font-bold font-callout" id="process">
          Our Process
        </h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
      </div>
    </section>

    <section class="p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2 class="text-2xl font-bold font-callout text-accent" id="pricing">
          Pricing
        </h2>
        <p class="text-accent">
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
      </div>
    </section>
  </main>
  <footer
    class="bg-accent text-white h-42 px-12 py-12 flex justify-around items-center"
  >
    <div>@2026 Cedar Tree Studio</div>
    <div>hello@cedartree.studio</div>
  </footer>
</div> `;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
