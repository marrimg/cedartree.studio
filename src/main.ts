import "./style.css";
import typescriptLogo from "./assets/cts-logo";
import bulb from "./assets/bulb";
import webDesign from "./assets/web-design";
import support from "./assets/support";
import webDev from "./assets/web-dev";
import basicBrowser from "./assets/basic-browser";
import advancedBrowser from "./assets/advanced-browser";
import server from "./assets/server";
import hourly from "./assets/hourly";
import consultation from "./assets/consultation";
const html = String.raw;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`<div
  class="relative"
>
  <header class="font-medium h-[75px] top-0 left-0 right-0 z-50">
    <nav
      class="grow shrink-0 basis-auto flex flex-col justify-self-stretch bg-accent-secondary  text-accent-dark"
    >
      <div
        class="flex items-center justify-between gap-16 text-sm w-full h-[75px] px-8 uppercase"
      >
        <div class="grow-0 shrink-0 basis-auto w-40 ">${typescriptLogo}</div>
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
            <a href="#contact">Get in touch</a>
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
        class="hidden lg:hidden absolute top-0 bottom-0 left-0 right-0 items-center text-xl justify-center flex-1 z-30 bg-accent-secondary py-8 w-full"
      >
        <div
          id="close-btn"
          class="absolute top-8 right-8 text-2xl cursor-pointer"
        >
          ✕
        </div>
        <div
          class="flex flex-col items-center justify-center gap-16 pt-16 uppercase"
        >
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
          <a class="menu-item hover:text-accent-hover" href="#contact"
            >Get in touch</a
          >
        </div>
      </div>
    </nav>
  </header>
  <main class="mx-auto w-full flex flex-col">
    <section
      class="lg:h-[calc(100dvh-110px)] relative grid lg:grid-cols-2 bg-accent-dark/65"
    >
      <div
        class="flex items-center content-center  justify-center relative  col-span-1"
      >
        <div
          class="absolute inset-0 mix-blend-multiply bg-cover bg-center bg-no-repeat lg:bg-[url('./assets/watercolor-paper.webp')] bg-[url('./assets/v-lese.jpg')]"
        ></div>
        <div class="flex flex-col gap-16 z-10 max-w-[900px] p-20">
          <h1
            class="font-heading text-7xl font-header text-center text-accent-secondary"
          >
            Human-centered web design
          </h1>
          <p class="font-callout text-2xl text-center text-accent-secondary">
            lorem ipsum dolor sit amet consectetur adipiscing elit facere do
            nihil voluptatum assumenda dolorem deleniti id excepturi laboris
            duis commodo rerum ullamco amet distinctio mollit tempor in in
            deserunt aute
          </p>
          <div class="flex items-center justify-center">
            <a
              href="#contact"
              class="border-2 border-white text-accent-secondary px-4 py-2 text-base font-medium hover:border-light hover:text-light"
              >Get in touch</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-cover bg-center relative bg-no-repeat bg-[url('./assets/v-lese.jpg')] col-span-1 hidden lg:block"
      >
        <div class="absolute inset-0 bg-accent-hover/40"></div>
      </div>
    </section>
    <section
      class="bg-accent-secondary text-accent py-20 flex justify-start lg:justify-center"
    >
      <div class="lg:max-w-[1000px] flex gap-16">
        <div class="lg:col-span-6 lg:col-start-1 flex-1">
          <div
            class="bg-cover  w-full h-full p-8 relative bg-no-repeat bg-[url('./assets/me2.jpg')]"
          ></div>
        </div>
        <div class="flex flex-col gap-4 flex-1">
          <div>
            <h2 class="text-2xl font-bold font-callout pb-2" id="about">
              Who I am
            </h2>
            <p>
              I'm a web developer and designer with over 14 years of experience.
              I believe that good design comes from good communication, a strong
              sense of empathy, creative problem-solving, and well-defined
              goals.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold font-callout pb-2">What I do</h2>
            <p>
              I cover the full path from designing your website to ensuring its
              success. I can take care of branding, web development on
              Squarespace or WordPress, SEO, and hosting. Choose the services
              you need!
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold font-callout pb-2">
              Who I work with best
            </h2>
            <p>
              I specialize in working with small businesses and nonprofits who
              are looking to improve their web presence.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="text-accent-bg pt-16 pb-24 flex justify-start lg:justify-center bg-accent-dark/30 relative"
    >
      <div
        class="absolute inset-0 mix-blend-multiply bg-cover bg-center bg-no-repeat lg:bg-[url('./assets/watercolor-paper.webp')] opacity-35"
      ></div>
      <div class="lg:max-w-[1000px]">
        <h2 class="text-2xl font-bold font-callout  pb-8" id="services">
          Services
        </h2>
        <div class="grid gap-8 lg:grid-cols-12">
          <div
            class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-1 border-accent-bg"
          >
            <div class="flex gap-4 items-center pb-4">
              <div class="stroke-accent-bg">${bulb}</div>
              <h2 class="text-lg">Branding</h2>
            </div>
            <p>
              Are you starting a new business and don't have an established
              brand? Does your current brand feel outdated or unfocused? Add a
              mini-brand package to your web project and let me help!
            </p>
          </div>
          <div
            class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-1 border-accent-bg"
          >
            <div class="flex gap-4 items-center pb-4">
              <div class="stroke-accent-bg">${webDesign}</div>
              <h2 class="text-lg">Web design</h2>
            </div>
            <p>
              You don't want a site that looks like everyone else's. You're not
              looking for overused templates or AI slop. You want a website that
              tells your unique story and enables your customers to easily find
              what they want. I can do that! We'll walk through what you want to
              accomplish with your site and create a design that helps guide
              your customers to that goal.
            </p>
          </div>
          <div
            class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-1 border-accent-bg"
          >
            <div class="flex gap-4 items-center pb-4">
              <div class="stroke-accent-bg">${webDev}</div>
              <h2 class="text-lg">Web development</h2>
            </div>
            <p>
              We will work together to figure out your needs, and we will choose
              the platform that is right for you. I currently work with
              Wordpress and Squarespace.
            </p>
          </div>
          <div
            class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-1 border-accent-bg"
          >
            <div class="flex gap-4 items-center pb-4">
              <div class="stroke-accent-bg">${support}</div>
              <h2>Support</h2>
            </div>
            <p>
              I can take care the hosting for Wordpress projects so you don't
              have to! I'll handle all your security updates, plugin updates,
              and backups. Or, if you want to host your site elsewhere, you can
              book me for a call to answer any of your questions!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-accent-secondary text-accent grid grid-cols-2 ">
      <div class="p-16">
        <h2 class="text-2xl font-bold font-callout pb-8" id="process">
          Our Process
        </h2>

        <ol class="grid  grid-cols-1 gap-8 ">
          <li class=" flex flex-col gap-4">
            <div>
              <h3 class="text-lg pb-2">① Discovery</h3>
              <p>
                If you have a project in mind, contact me and we'll book a
                complimentary discovery call! If we seem like a good fit, you'll
                pay a 1/3 deposit and I'll get you on my calendar!
              </p>
            </div>
          </li>
          <li class="">
            <h3 class="text-lg pb-2">② Strategy</h3>
            <p>
              After booking, we'll get on a call and really dive into what you
              want to accomplish with your website. We'll choose a primary and
              secondary goal and talk through how to design the website to
              accomplish those goals. We'll map out your website's pages and
              discuss branding, content and images. We'll discuss which platfrom
              works best for you and go over long-term support options.
            </p>
          </li>
          <li class="">
            <h3 class="text-lg pb-2">③ Preparation</h3>
            <p>
              After getting our plan in place, we'll kick off some time for
              preparation. This will give us time to work on anything that needs
              to be done before development starts. If you're supplying the
              copy, photos, and other brand assets for your website, this will
              give you time to send me these things. If you added on a
              mini-brand package, I will spend this time working on your brand.
              Towards the end of the prep period, we'll schedule some time for
              feedback (if needed) before development starts.
            </p>
          </li>
          <li class="">
            <h3 class="text-lg pb-2">④ Development</h3>
            <p>
              Once all the branding and assets are good to go, I'll start
              developing your website. If you're not supplying brand assets and
              choose not to go forward with the mini brand package, I will use
              my default tasteful font selection and color pallette. We'll check
              in at the halfway point and near the end of this period for
              questions, feedback, and revisions.
            </p>
          </li>
          <li class="">
            <h3 class="text-lg pb-2">⑤ Launch</h3>
            <p>
              I wrap up any final tweaks, you'll make your final payment, and
              we'll launch your new website!
            </p>
          </li>
          <li class="">
            <h3 class="text-lg pb-2">⑥ Support</h3>
            <p>All clients get two weeks of free email support after launch.</p>
            <p>
              If you purchase Wordpress hosting through me, we'll start a new
              contract for a monthly subscription. This service includes
              hosting, software updates, email support, and two free support
              calls a month.
            </p>
            <p>
              If you self-host your Wordpress site or host on Squarespace, you
              can always book me for an hour-long support call!
            </p>
          </li>
        </ol>
      </div>
      <div
        class="bg-cover bg-center relative bg-no-repeat min-h-35 bg-[url('./assets/brook-in-the-forest.jpg')] col-span-1 hidden lg:block"
      >
        <div class="absolute inset-0 bg-accent-hover/40"></div>
      </div>
    </section>

    <section
      class="text-accent py-16 flex justify-start lg:justify-center bg-accent-dark/25 relative"
    >
      <div class="lg:max-w-[1000px]">
        <h2
          class="text-2xl font-bold font-callout text-accent pb-8"
          id="pricing"
        >
          Pricing
        </h2>
        <div class="grid lg:grid-cols-2 gap-8">
          <div
            class="px-4 pb-6 pt-4 border-1 border-accent flex flex-col gap-4"
          >
            <div class="flex gap-4 items-center">
              ${basicBrowser}
              <h3 class="text-lg">Web development: Basic site</h3>
            </div>
            <p class="">
              A blazing-fast, SEO optimized static website. Perfect for a small
              business on a budget.
            </p>
            <p class="">$1,000</p>
            <a
              href="#contact"
              class="bg-accent text-on-dark-bg px-4 py-2 text-base font-medium hover:border-light hover:text-light text-center"
              >Get started</a
            >
            <h4 class="font-bold">Features</h4>
            <ul class="pl-6 relative  space-y-4">
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Up to 5 pages. For example: home, about us, products, contact.
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Responsive design
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Tested for accessibility
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Two rounds of revisions
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Simple contact form
              </li>
            </ul>
          </div>
          <div
            class="px-4 pb-6 pt-4 border-1 border-accent flex flex-col gap-4"
          >
            <div class="flex items-center gap-4">
              ${advancedBrowser}
              <h3 class="text-lg">Web development: Advanced site</h3>
            </div>
            <p class="">
              Increase sales, appointments, or donations with my advanced site
              package.
            </p>
            <p class="">$2,500</p>
            <a
              href="#contact"
              class="bg-accent text-on-dark-bg px-4 py-2 text-base font-medium hover:border-light hover:text-light text-center"
              >Get started</a
            >
            <h4 class=" font-bold">Features</h4>
            <ul class="pl-6 relative  space-y-4">
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Up to 7 pages
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Responsive design
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Tested for accessibility
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Two rounds of revisions
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Blog
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Advanced forms
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Sell products
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Take donations
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Calendar
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Map
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Schedule appointments
              </li>
            </ul>
          </div>
          <div
            class="px-4 pb-6 pt-4 border-1 border-accent flex flex-col gap-4"
          >
            <div class="flex gap-4 items-center ">
              ${server}
              <h3 class="text-lg">Site Hosting</h3>
            </div>
            <p class="">$150/month</p>
            <h4 class=" font-bold">Features</h4>
            <ul class=" relative  space-y-4 pl-6 ">
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Hosting
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Advanced SEO
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Free email support
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Two free support calls per month
              </li>
            </ul>
          </div>
          <div
            class="px-4 pb-6 pt-4 border-1 border-accent flex flex-col gap-4"
          >
            <div class="flex gap-4 items-center">
              <div class="stroke-accent">${bulb}</div>
              <h3 class="text-lg">Custom Mini-brand</h3>
            </div>
            <p class="">Available as an add-on to your web design project!</p>
            <p class="">$500</p>
            <h4 class=" font-bold">Features</h4>
            <ul class="relative  space-y-4 pl-6 ">
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Wordmark logo with SVG files that can be used in print or
                digital formats.
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Custom typeface choices
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Custom color palette
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Mini style guide that displays all of these elements in an
                easy-to-reference format.
              </li>
            </ul>
          </div>
          <div
            class="px-4 pb-6 pt-4 border-1 border-accent flex flex-col gap-4"
          >
            <div class="flex gap-4 items-center">
              ${hourly}
              <h3 class="text-lg">Hourly rate</h3>
            </div>
            <p>
              If you've worked with me on a project and you don't have a hosting
              plan, we can schedule a call!
            </p>
            <p class="">$100/hr</p>
            <h4 class=" font-bold">We can talk about:</h4>
            <ul class="pl-6 relative  space-y-4">
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Style updates
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Technical questions
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Small tweaks
              </li>
              <li
                class="relative before:content-[url(./assets/check.svg)] before:absolute before:-left-6 before:top-0.25"
              >
                Upgrade to hosting plan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-accent-secondary text-accent py-24 flex justify-start lg:justify-center"
    >
      <div class="lg:max-w-[1000px] flex-grow">
        <h2
          class="text-2xl font-bold font-callout text-accent pb-8"
          id="contact"
        >
          Let's talk!
        </h2>
        <form
          action="https://formspree.io"
          method="POST"
          class="flex flex-col gap-4"
        >
          <div class="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
              class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-accent-dark hover:border-light w-full"
            />
          </div>

          <div class="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-accent-dark hover:border-light w-full"
            />
          </div>

          <div class="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can I help you?"
              required
              class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-accent-dark hover:border-light w-full"
            ></textarea>
          </div>

          <button
            type="submit"
            class="border-2 border-text text-accent-secondary px-4 py-2 text-base font-medium hover:border-light hover:text-light cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </main>
  <footer
    class="bg-accent-three text-accent-secondary h-42 px-12 py-12 flex justify-around items-center"
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
