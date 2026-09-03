import "./style.css";
import typescriptLogo from "./assets/cts-logo.svg";
import { setupCounter } from "./counter.ts";
const html = String.raw;
document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`<section
  id="center"
>
  <img src="${typescriptLogo}" class="w-[225px] h-auto" alt="CTS Logo" />
</section> `;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
