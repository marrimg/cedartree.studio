import "./style.css";
import typescriptLogo from "./assets/cts-logo";
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
  <main class="mx-auto pb-22 w-full flex flex-col">
    <section
      class="h-[calc(100dvh-110px)] relative grid grid-cols-1 lg:grid-cols-2"
    >
      <div
        class="flex items-center content-center justify-center relative bg-cover bg-center bg-no-repeat bg-[url('./assets/watercolor-paper.jpg')]"
      >
        <div class="absolute inset-0 bg-accent-dark/65"></div>
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
              class="border-2 border-white text-accent-secondary px-4 py-2 text-base font-medium hover:bg-accent-hover"
              >Get in touch</a
            >
          </div>
        </div>
      </div>
      <div
        class="bg-cover bg-center relative bg-no-repeat bg-[url('./assets/v-lese.jpg')]"
      >
        <div class="absolute inset-0 bg-accent-hover/40"></div>
      </div>
    </section>
    <section class="bg-accent-secondary text-accent p-8 flex justify-center">
      <div class="lg:max-w-[1200px] grid grid-cols-2 gap-8">
        <div></div>
        <div class="flex flex-col gap-8">
          <div>
            <h2 class="text-2xl font-bold font-callout" id="about">Who I am</h2>
            <p>
              I'm a web developer and designer with over 14 years of experience.
              I believe that good design comes from good communication, and I
              work closely with each client to tell their unique story, set
              goals, and track their success!
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold font-callout">What I do</h2>
            <p>
              I cover the full path from designing your website to ensuring its
              success. I can take care of branding, web development on
              Squarespace or WordPress, SEO, and hosting. Choose only the
              services you need!
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-bold font-callout">
              Who I work with best
            </h2>
            <p>
              I specialize in working with small businesses and nonprofits who
              are ready to get their story out there.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2
          class="text-2xl font-bold font-callout text-accent pb-8"
          id="services"
        >
          Services
        </h2>
        <div class="grid gap-8 grid-cols-12">
          <div class="col-span-6">
            <h2>Branding</h2>
            <p class="text-accent">
              Are you starting a new business and don't have an established
              brand? Does your current brand feel outdated or unfocused? Add a
              mini-brand package to your web project and let me help!
            </p>
          </div>
          <div class="col-span-6">
            <h2>Web design</h2>
            <p class="text-accent">
              You don't want a site that looks like everyone else's. You're not
              looking for overused templates or AI slop. You want a website that
              tells your unique story and enables your customers to easily find
              what they want. I can do that! We'll walk through what you want to
              accomplish with your site and create a design that helps guide
              your customers to that goal.
            </p>
          </div>
          <div class="col-span-6">
            <h2>Web development</h2>
            <p class="text-accent">
              We will work together to figure out your needs, and we will choose
              the platform that is right for you. I currently work with
              Wordpress and Squarespace.
            </p>
          </div>
          <div class="col-span-6">
            <h2>Support</h2>
            <p class="text-accent">
              I can take care the hosting for Wordpress projects so you don't
              have to! I'll handle all your security updates, plugin updates,
              and backups. Or, if your site is hosted elsewhere, you can book me
              for a call to answer any of your questions!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-accent-secondary text-accent p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2 class="text-2xl font-bold font-callout pb-8" id="process">
          Our Process
        </h2>
        <ol class="list-decimal space-y-4">
          <li>
            <h3>Discovery</h3>
            <p>
              If you're interested in hiring me, contact me and we'll book a
              complimentary discovery call! If we seem like a good fit to work
              together, you'll pay a 1/3 deposit and I'll get you on my
              calendar!
            </p>
          </li>
          <li>
            <h3>Strategy</h3>
            <p>
              After booking we'll get on a call and really dive into what you
              want to accomplish with your website. We'll choose a primary and
              secondary goal and talk through how to design the website to
              accomplish those goals. We'll map out your website's pages and
              discuss branding, content and images. We'll discuss which platfrom
              works best for you and go over long-term support options.
            </p>
          </li>
          <li>
            <h3>Preparation</h3>
            <p>
              After getting our plan in place, we'll kick off some time for
              preparation. This will give us time to work on anything that needs
              to be done before development starts. If you're supplying the
              copy, photos, and other brand assets for your website, this will
              give you time to send me these things before development starts.
              If you added on a mini-brand package, I will spend this time
              working on your brand. Towards the end of the prep period, we'll
              schedule some time for feedback before development starts.
            </p>
          </li>
          <li>
            <h3>Development</h3>
            <p>
              Once all the branding and assets are good to go, I'll start coding
              your website. If you don't have a brand but choose not to go
              forward with the custom brand package, I will utilize my favorite
              default tasteful font selection and color pallette. We'll check in
              at the halfway point and near the end of this period for questions
              and feedback. Then, I'll wrap up any final tweaks, you'll make
              your final payment, and we'll launch your new website!
            </p>
          </li>
          <li>
            <h3>Support</h3>
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
    </section>

    <section class="p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2
          class="text-2xl font-bold font-callout text-accent pb-8"
          id="pricing"
        >
          Pricing
        </h2>
        <div class="grid grid-cols-2 grid-rows-2 gap-16">
          <div>
            <h3>Custom Mini-brand</h3>
            <p>
              Available as an add-on to your web design project. This package
              includes:
            </p>
            <ul>
              <li>
                Wordmark logo with SVG files that can be used in print or
                digital formats.
              </li>
              <li>Custom typeface choices</li>
              <li>Custom color palette</li>
              <li>
                Mini style guide that displays all of these elements in an easy
                to reference format.
              </li>
            </ul>
            <p>$500</p>
          </div>
          <div>
            <h3>Web development: Basic site</h3>
            <ul>
              <li>Up to 5 pages, including a gallery and a blog.</li>
              <li>Responsive design</li>
              <li>Tested for accessibility</li>
              <li>Two rounds of revisions</li>
              <li>Simple contact form</li>
            </ul>
            <p>$1,000</p>
          </div>
          <div>
            <h3>Web development: Advanced site</h3>
            <ul>
              <li>Up to 7 pages, including a gallery and a blog.</li>
              <li>Responsive design</li>
              <li>Tested for accessibility</li>
              <li>Two rounds of revisions</li>
              <li>Advanced forms</li>
              <li>E-commerce integration</li>
              <li>Donation buttons</li>
              <li>Calendar</li>
              <li>Map</li>
              <li>Scheduling</li>
            </ul>
            <p>$2,500</p>
          </div>
          <div>
            <h3>Wordpress Hosting</h3>
            <ul>
              <li>Hosting</li>
              <li>Advanced SEO</li>
              <li>Free email support</li>
              <li>Two free support calls per month</li>
            </ul>
            <p>$150/month</p>
          </div>
          <div>
            <h3>Book me for a 60-minute call!</h3>
            <p>
              If you've worked with me on a project and you don't have a hosting
              plan, we can schedule a support call! We can talk about:
            </p>
            <ul>
              <li>Style updates</li>
              <li>Technical questions</li>
            </ul>
            <p>$100</p>
          </div>
        </div>
      </div>
    </section>
    <section class="p-8  grid grid-cols-12">
      <div class="col-span-6 col-start-4">
        <h2
          class="text-2xl font-bold font-callout text-accent pb-8"
          id="contact"
        >
          Let's talk!
        </h2>
        <div class="grid grid-cols-2 gap-16">
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
              class="border-2 border-text text-accent-secondary px-4 py-2 text-base font-medium hover:bg-accent-hover cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer
    class="bg-accent text-accent-secondary h-42 px-12 py-12 flex justify-around items-center"
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
