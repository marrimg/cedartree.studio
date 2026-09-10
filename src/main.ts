import "./style.css";
import typescriptLogo from "./assets/cts-logo.svg";
const html = String.raw;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`<div
  class="relative"
>
  <header class="font-medium h-[95px] top-0 left-0 right-0 z-50">
    <nav class="grow shrink-0 basis-auto flex flex-col justify-self-stretch">
      <div
        class="flex items-center justify-between gap-16 w-full h-[95px] px-8"
      >
        <div class="grow-0 shrink-0 basis-auto">
          <img
            src="${typescriptLogo}"
            class="w-[225px] h-auto"
            alt="CTS Logo"
          />
        </div>
        <div class="hidden lg:flex items-center justify-between gap-16 w-full">
          <div class="flex items-center justify-center gap-16 flex-1">
            <a href="#about" class="menu-item hover:text-accent-hover">About</a>
            <a href="#services" class="menu-item hover:text-accent-hover"
              >Services</a
            >
            <a href="#process" class="menu-item hover:text-accent-hover"
              >Our Process</a
            >
            <a href="#pricing" class="menu-item hover:text-accent-hover"
              >Pricing</a
            >
          </div>
          <div class="grow-0 shrink-0 basis-auto hover:text-accent-hover px-12">
            <a href="mailto:hello@cedartree.studio">Get in touch</a>
          </div>
        </div>
        <div class="lg:hidden flex items-center justify-center">
          <button
            id="menu-btn"
            class="focus:outline-none text-4xl cursor-pointer z-20"
          >
            ☰
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        class="hidden lg:hidden absolute top-0 bottom-0 left-0 right-0 items-center text-xl justify-center flex-1 z-30 bg-white py-8 w-full"
      >
        <div
          id="close-btn"
          class="absolute top-8 right-8 text-2xl cursor-pointer"
        >
          ✕
        </div>
        <div class="flex flex-col items-center justify-center gap-16 pt-16">
          <a href="#about" class="menu-item  hover:text-accent-hover">About</a>
          <a href="#services" class="menu-item hover:text-accent-hover"
            >Services</a
          >
          <a href="#process" class="menu-item  hover:text-accent-hover"
            >Our Process</a
          >
          <a href="#pricing" class="menu-item  hover:text-accent-hover"
            >Pricing</a
          >
          <a
            class="menu-item hover:text-accent-hover"
            href="mailto:hello@cedartree.studio"
            >Get in touch</a
          >
        </div>
      </div>
    </nav>
  </header>
  <main class="mx-auto pb-22 w-full flex flex-col">
    <section
      class="flex items-center content-center justify-center h-[calc(100dvh-110px)] bg-cover bg-center bg-no-repeat bg-[url('./assets/v-lese.jpg')] relative"
    >
      <div class="absolute inset-0 bg-accent-light/60"></div>
      <div class="flex flex-col gap-16 z-10 max-w-[900px] p-20">
        <h1
          class="font-heading text-7xl font-header text-on-dark-bg text-center"
        >
          Human-centered web design
        </h1>
        <p class="font-callout text-on-dark-bg text-2xl text-center">
          lorem ipsum dolor sit amet consectetur adipiscing elit facere do nihil
          voluptatum assumenda dolorem deleniti id excepturi laboris duis
          commodo rerum ullamco amet distinctio mollit tempor in in deserunt
          aute
        </p>
        <div class="flex items-center justify-center">
          <a
            href="mailto:hello@cedartree.studio"
            class="border-2 border-white text-white px-4 py-2 text-base font-medium hover:bg-accent-hover"
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

const menuBtn = document.getElementById("menu-btn");
const menuItems = document.querySelectorAll(".menu-item");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

mobileMenu?.addEventListener("click", () => {
  mobileMenu?.classList.add("hidden");
});
menuItems?.forEach((menuItem) => {
  menuItem?.addEventListener("click", () => {
    mobileMenu?.classList.add("hidden");
  });
});
