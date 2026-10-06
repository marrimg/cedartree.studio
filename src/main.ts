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
import check from "./assets/check";
// import consultation from "./assets/consultation";
const html = String.raw;

document.querySelector<HTMLDivElement>("#app")!.innerHTML =
  html`<div class="relative  bg-light text-dark">
  <div id="mobile-menu"
        class="hidden lg:hidden absolute inset-0 items-center text-xl justify-center flex-1 z-60  py-8 w-full h-full bg-light">
        <div id="close-btn" class="absolute top-8 right-8 text-2xl cursor-pointer">
          ✕
        </div>
        <div class="flex flex-col items-center justify-center gap-16 pt-16 bg-light">
          <a href="#about" class="menu-item  hover:text-accent-hover">About</a>
          <a href="#services" class="menu-item hover:text-accent-hover">Services</a>
          <a href="#process" class="menu-item  hover:text-accent-hover">Our Process</a>
          <a href="#pricing" class="menu-item  hover:text-accent-hover">Pricing</a>
          <a class="menu-item hover:text-accent-hover" href="#contact">Get in touch</a>
        </div>
      </div>
  <header class="font-medium h-[75px] top-0 left-0 right-0 z-50 sticky bg-light">
      
    <nav class="grow shrink-0 basis-auto flex flex-col justify-self-stretch ">
      <div class="flex items-center justify-between gap-16 text-sm w-full h-[75px] px-8">
        <div class="grow-0 shrink-0 basis-auto w-40 ">${typescriptLogo}</div>
        <div class="hidden lg:flex items-center justify-between gap-16 w-full">
          <div class="flex items-center justify-center gap-16 flex-1">
            <a href="#about" class="menu-item hover:text-accent-hover">About</a>
            <a href="#services" class="menu-item hover:text-accent-hover">Services</a>
            <a href="#process" class="menu-item hover:text-accent-hover">Our Process</a>
            <a href="#pricing" class="menu-item hover:text-accent-hover">Pricing</a>
          </div>
          <div class="grow-0 shrink-0 basis-auto hover:text-accent-hover px-12">
            <a href="#contact">Get in touch</a>
          </div>
        </div>
        <div class="lg:hidden flex items-center justify-center">
          <button id="menu-btn" class="focus:outline-none text-4xl cursor-pointer z-20">
            ☰
          </button>
        </div>
      </div>

    </nav>
  </header>
  <main class="mx-auto w-full flex flex-col relative">
    <section class="h-[calc(100dvh-110px)] flex content-center justify-center px-8">
  
      <div
        class="flex flex-col items-center justify-center gap-12 lg:px-80 relative  col-span-1">
        <dotlottie-wc
          src="./src/assets/tree.json"
          speed="1.5"
          class="w-[16vh] aspect-square"
          mode="forward"
          loop
          autoplay
        ></dotlottie-wc>
        <div class="flex flex-col items-center  gap-12">
          <h1 class="text-7xl lg:text-8xl font-header text-center  font-black">
            Websites<br />
            <span class="font-header2 ">for</span>
            <span class=" -ml-2 ">real people</span>
          </h1>
          <p class="font-subheader text-xl text-center leading-10 text-accent-secondary max-w-180">
            In a sea of generic templates, a
            <span class="text-accent">human touch</span> is more important
            than ever. Your website needs to stand out,
            <span class="text-accent">tell your unique story</span>, and
            empathetically guide viewers to your goals.
          </p>
          <div class="flex items-center justify-center">
            <a href="#contact"
              class="bg-accent px-8 py-4 text-light font-medium hover:accent/80 rounded-full hover:bg-accent/90">Get
              in touch</a>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center bg-dark text-light">
      <div class="flex flex-col gap-8 flex-1 px-16 pt-16 pb-24 max-w-[1200px]">
        <div class="flex gap-2 items-center pb-2">
          <div class="w-15 h-0 border-1 border-accent "></div>
          <h2 class="uppercase font-black font-callout text-accent text-xs " id="about">
            About me
          </h2>
        </div>

        <ul class="grid lg:grid-cols-3">
          <li class="p-8 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-light/15">
            <h2 class="font-black font-callout text-2xl" id="about">
              Who I am
            </h2>
            <p>
              I'm a Portland, OR web designer and developer with over 14 years of experience.
              I believe that good design comes from good communication, a strong
              sense of empathy, creative problem-solving, and well-defined
              goals.
            </p>
          </li>
          <li class="p-8 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-light/15">
            <h2 class="font-black font-callout text-2xl">What I do</h2>
            <p>
              I cover the full path from designing your website to deploying it and ensuring its
              success. I can take care of branding, web development, SEO, and hosting. Choose the services
              you need!
            </p>
          </li>
          <li class=" p-8 flex flex-col gap-4 ">
            <h2 class="font-black font-callout text-2xl">
              Who I work with best
            </h2>
            <p>
              I specialize in working with
              small businesses and nonprofits who are looking
              to improve their web presence.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="flex justify-center">
      <div class="flex flex-col gap-8 flex-1 px-8 lg:px-16 pt-16 pb-8 max-w-[1200px]">
        <div class="flex gap-2 items-center pb-2">
          <div class="w-15 h-0 border-1 border-accent "></div>
          <h2 class="uppercase font-black font-callout text-accent text-xs " id="about">
            Services
          </h2>
        </div>
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 lg:col-span-6">

            <div class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 ">
              <div class="flex gap-4 items-center pb-4">
                <div class="stroke-dark">${webDesign}</div>
                <h2 class="font-black font-callout text-2xl">Web design</h2>
              </div>
              <div class="grid gap-4">
                <p>
                  I build websites that help people understand what you do, and make it easy to say 'yes' to your offerings! We'll
                  walk through what you want to accomplish with your site, and
                  create a design that helps guide people to that goal.
                </p>
                <a href="#contact" class="text-accent">Get started with your website →</a>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-t border-dark/15">
              <div class="flex gap-4 items-center pb-4">
                <div class="stroke-dark">${webDev}</div>
                <h2 class="font-black font-callout text-2xl">
                  Web development
                </h2>
              </div>
              <div class="grid gap-4">
                <p>
                  We will work together to figure out your technical needs, and choose the platform that is right for you.
                </p>
                <a href="#contact" class="text-accent">Get started with your website →</a>
              </div>
            </div>
              <div class=" px-4 pb-6 pt-4 border-t border-dark/15">
              <div class="flex gap-4 items-center pb-4">
                <div class="stroke-dark">${bulb}</div>
                <h2 class="font-black font-callout text-2xl">Branding</h2>
              </div>
              <div class="grid gap-4">
                <p>
                  Are you starting a new business and don't have an established
                  brand? Does your current brand feel outdated or scattered? Add
                  a mini-brand package to your web project and let me help!
                </p>
                <a href="#contact" class="text-accent">Get started →</a>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-6 px-4 pb-6 pt-4 border-t border-dark/15">
              <div class="flex gap-4 items-center pb-4">
                <div class="stroke-dark">${support}</div>
                <h2 class="font-black font-callout text-2xl">Support</h2>
              </div>
              <div class="grid gap-4">
                <p>
                  I can take care the hosting so you
                  don't have to! I'll handle all your security updates, plugin
                  updates, and backups. Or, if you want to host your site
                  elsewhere, you can book me for a call to answer any of your
                  questions!
                </p>
                <a href="#contact" class="text-accent">Ask me about hosting →</a>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-6 p-4 flex flex-col gap-4 order-first lg:order-last">
            <div class="flex-0 h-0 border-1 border-accent"></div>
            <img src="https://assets.marrigamard.com/antimatter-style-guide.webp" class="w-full border-accent border" />
            <div class="flex-0 h-0 border-1 border-accent"></div>
            <h2 class="uppercase  font-black font-callout text-accent text-xs" id="about">
              Custom brand guides
            </h2>
            <div class="flex gap-2 items-center pb-2 pt-4 justify-between">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex justify-center bg-dark text-light">
      <div class=" flex flex-col gap-8 flex-1 px-8 lg:px-16 pt-16 pb-8 max-w-[1200px]">
      <div class="flex gap-2 items-center pb-2">
        <div class="w-15 h-0 border-1 border-accent "></div>
        <h2 class="uppercase font-black font-callout text-accent text-xs " id="about">
          Process
        </h2>
      </div>

      <ol class="grid  grid-cols-1">
        <li class="flex gap-8 align-center items-center border-light/15">
          <span class="text-accent">01</span>
          <div class="flex flex-col gap-4 p-8">
            <h3 class="font-black font-callout text-2xl">Discovery</h3>
            <p>
              If you have a project in mind,
              <a href="#contact" class="text-accent">contact me</a> and
              we'll book a complimentary discovery call! If we seem like a
              good fit, you'll pay a 1/3 deposit and I'll get you on my
              calendar!
            </p>
          </div>
        </li>
        <li class="flex gap-8 align-center items-center border-t border-light/15">
          <span class="text-accent">02</span>
          <div class="flex flex-col gap-4  p-8">
            <h3 class="font-black font-callout text-2xl">Strategy</h3>
            <p>
              After booking, we'll get on a call and really dive into what you
              want to accomplish with your website. We'll choose a primary and
              secondary goal and talk through how to design the website to
              accomplish those goals. We'll map out your website's pages and
              discuss branding, content and images. We'll discuss which
              platfrom works best for you and go over long-term support
              options.
            </p>
          </div>
        </li>
        <li class="flex gap-8 align-center items-center border-t border-light/15">
          <span class="text-accent">03</span>
          <div class="flex flex-col gap-4  p-8">
            <h3 class="font-black font-callout text-2xl">Preparation</h3>
            <p>
              After getting our plan in place, we'll kick off some time for
              preparation. This will give us time to work on anything that
              needs to be done before development starts. If you're supplying
              the copy, photos, and other brand assets for your website, this
              will give you time to send me these things. If you added on a
              mini-brand package, I will spend this time working on your
              brand. Towards the end of the prep period, we'll schedule some
              time for feedback (if needed) before development starts.
            </p>
          </div>
        </li>
        <li class="flex gap-8 align-center items-center border-t border-light/15">
          <span class="text-accent">04</span>
          <div class="flex flex-col gap-4  p-8">
            <h3 class="font-black font-callout text-2xl">Development</h3>
            <p>
              Once all the branding and assets are good to go, I'll start
              developing your website. If you're not supplying brand assets
              and choose not to go forward with the mini brand package, I will
              use my default tasteful font selection and color pallette. We'll
              check in at the halfway point and near the end of this period
              for questions, feedback, and revisions.
            </p>
          </div>
        </li>
        <li class="flex gap-8 align-center items-center border-t border-light/15">
          <span class="text-accent">05</span>
          <div class="flex flex-col gap-4  p-8">
            <h3 class="font-black font-callout text-2xl">Launch</h3>
            <p>
              I wrap up any final tweaks, you'll make your final payment, and
              we'll launch your new website!
            </p>
          </div>
        </li>
        <li class="flex gap-8 align-center items-center border-t border-light/15">
          <span class="text-accent">06</span>
          <div class="flex flex-col gap-4  p-8">
            <h3 class="font-black font-callout text-2xl">Support</h3>
            <p>
              All clients get two weeks of free email support after launch.
            </p>
            <p>
              If you purchase hosting through me, we'll start a new
              contract for a monthly subscription. This service includes
              hosting, software updates, email support, and two free support
              calls a month.
            </p>
            <p>
              If you self-host your site, you can always book me for an hour-long support call!
            </p>
          </div>
        </li>
      </ol>

    </section>

    <section class="flex justify-center">
      <div class="flex flex-col gap-8 flex-1 px-8 lg:px-16 pt-16 pb-8 max-w-[1200px]">
        <div class="flex gap-2 items-center pb-16">
          <div class="w-15 h-0 border-1 border-accent "></div>
          <h2 class="uppercase font-black font-callout text-accent text-xs " id="pricing">
            Pricing
          </h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="px-4 pb-6 pt-4 border-1 border-dark/70 flex flex-col gap-4">
            <div class="flex gap-4 items-center">
              <span class="stroke-dark">${basicBrowser}</span>
              <h3 class="font-black font-callout text-2xl">Basic site</h3>
            </div>
            <p>
              A blazing-fast, SEO optimized static website. Perfect for a small
              business on a budget.
            </p>
            <p class="font-black font-callout text-2xl text-accent">$1,000</p>
            <a href="#contact"
              class="bg-accent text-light px-4 py-2 text-base font-medium flex hover:bg-accent/80 cursor-pointer justify-center">Get started</a>
            <h4 class="font-black">Features</h4>
            <ul class="pl-6 relative  space-y-4">
              <li class="flex gap-4 items-center">
                <span>${check}</span>
                Up to 5 pages. For example: home, about us, products, contact.
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Responsive design
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Tested for accessibility
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Two rounds of revisions
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Simple contact form
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 pt-4 border-1 border-dark/70 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <span class="stroke-dark">${advancedBrowser}</span>
              <h3 class="font-black font-callout text-2xl">Advanced site</h3>
            </div>
            <p class="">
              Increase sales, appointments, or donations with my advanced site
              package.
            </p>
            <p class="font-black font-callout text-2xl text-accent">$2,500</p>
            <a href="#contact"
              class="bg-accent text-light px-4 py-2 text-base font-medium flex hover:bg-accent/80 cursor-pointer justify-center">Get
              started</a>
            <h4 class=" font-black">Features</h4>
            <ul class="pl-6 relative  space-y-4">
              <li class="flex gap-4 items-center">
                <span>${check}</span>Up to 7 pages
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Responsive design
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Tested for accessibility
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Two rounds of revisions
              </li>
              <li class="flex gap-4 items-center"><span>${check}</span>Blog</li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Advanced forms
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Sell products
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Take donations
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Calendar
              </li>
              <li class="flex gap-4 items-center"><span>${check}</span>Map</li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Schedule appointments
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 pt-4 border-1 border-dark/70 flex flex-col gap-4">
            <div class="flex gap-4 items-center ">
              <span class="stroke-dark">${server}</span>
              <h3 class="font-black font-callout text-2xl">Site Hosting</h3>
            </div>
            <p class="font-black font-callout text-2xl text-accent">$150/month</p>
              <a href="#contact"
              class="bg-accent text-light px-4 py-2 text-base font-medium flex hover:bg-accent/80 cursor-pointer justify-center">Get
              started</a>
            <h4 class=" font-black">Features</h4>
            <ul class=" relative  space-y-4 pl-6 ">
              <li class="flex gap-4 items-center">
                <span>${check}</span>Hosting
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Advanced SEO
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Free email support
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>
                Two free support calls per month
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 pt-4 border-1 border-dark/70 flex flex-col gap-4">
            <div class="flex gap-4 items-center">
              <div class="stroke-dark">${bulb}</div>
              <h3 class="font-black font-callout text-2xl">Custom Mini-brand</h3>
            </div>
            <p>Available as an add-on to your web design project!</p>
            <p class="font-black font-callout text-2xl text-accent">$500</p>
            <h4 class=" font-black">Features</h4>
            <ul class="relative  space-y-4 pl-6 ">
              <li class="flex gap-4 items-center">
                <span>${check}</span>
                Wordmark logo with SVG files that can be used in print or
                digital formats.
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Custom typeface choices
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Custom color palette
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>
                Mini style guide that displays all of these elements in an
                easy-to-reference format.
              </li>
            </ul>
          </div>
          <div class="px-4 pb-6 pt-4 border-1 border-dark/70 flex flex-col gap-4">
            <div class="flex gap-4 items-center">
              <span class="stroke-dark">${hourly}</span>
              <h3 class="font-black font-callout text-2xl">Hourly rate</h3>
            </div>
            <p>
              If you've worked with me on a project and you don't have a hosting
              plan, we can schedule a call!
            </p>
            <p class="font-black font-callout text-2xl text-accent">$100/hr</p>
            <h4 class=" font-black">We can talk about:</h4>
            <ul class="pl-6 relative  space-y-4">
              <li class="flex gap-4 items-center">
                <span>${check}</span>Style updates
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Technical questions
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Small tweaks
              </li>
              <li class="flex gap-4 items-center">
                <span>${check}</span>Upgrade to hosting plan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class=" py-16 flex justify-start lg:justify-center">
      <div class="flex flex-col gap-8 flex-1 px-8 lg:px-16 pt-16 pb-8 max-w-[1200px]">
        <h2 class="text-4xl font-black font-callout pb-8" id="contact">
          Let's talk!
        </h2>
        <div class="flex gap-16 flex-wrap">
          <div class="lg:flex-4">
            <p class="mb-5">Have an idea for a project? Reach out and we can schedule a free, no-pressure call!</p>
            <p class="mb-5">We'll go over your goals and decide if I'm a good fit for your project. If so, we'll
              sign
              the paperwork, you'll pay a 1/3 deposit, and I'll get you on my calendar!</p>
            <p>If not, I'll try to point you in the direction of someone who might be a better fit.</p>
          </div>
          <form action="https://formspree.io" method="POST" class="flex flex-col gap-4 lg:flex-6">
            <div class="form-group flex gap-4">
              <div class="flex flex-col gap-2 flex-1">
                <label for="first-name">First name *</label>
                <input type="text" id="first-name" name="first-name" required
                  class="border border-dark/70 rounded-md px-3 py-2 focus:outline-none focus:border-accent hover:border-accent/85 w-full" />
              </div>
              <div class="flex flex-col gap-2  flex-1">
                <label for="last-name">Last name *</label>
                <input type="text" id="last-name" name="last-name" required
                  class="border border-dark/70 rounded-md px-3 py-2 focus:outline-none focus:border-accent hover:border-accent/85 w-full" />
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="last-name">Email *</label>
              <input type="email" id="email" name="email" required
                class="border border-dark/70 rounded-md px-3 py-2 focus:outline-none focus:border-accent hover:border-accent/85 w-full" />
            </div>

            <div class="form-group mb-2">
              <div class="flex flex-col gap-2">
                <label for="last-name">How can I help you? *</label>
                <textarea id="message" name="message" rows="5" required
                  class="border border-dark/70 rounded-md px-3 py-2 focus:outline-none focus:border-accent hover:border-accent/85 w-full"></textarea>
              </div>
            </div>

            <button type="submit"
              class="bg-accent text-light px-4 py-2 text-base font-medium  hover:bg-accent/80 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer class=" h-42 flex justify-center items-center ">
    <div class="border-accent border-t max-w-[1200px] w-full px-2 py-12 flex gap-8 justify-between text-xs ">
      <div>@2026 Cedar Tree Studio - Portland, OR</div>
      <a href="mailto:hello@cedartree.studio">hello@cedartree.studio</div>
    <div>
  </footer>
</div>`;

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
