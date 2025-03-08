import { A } from "@solidjs/router";

export default function Navbar() {
  return (
    <nav class="bg-[#0F1015] border-b border-[#343742] dark:bg-[#0F1015] font-[Geist_Mono]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://ultimate-package-manager.sh"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#BDBFCB] dark:text-[#BDBFCB]">
            Ultimate Package Manager
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#BDBFCB] rounded-lg md:hidden hover:bg-[#343742] focus:outline-none focus:ring-2 focus:ring-[#597BC0]"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#343742] rounded-lg bg-[#1D202B] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#0F1015] dark:bg-[#0F1015]">
            <li>
              <a
                href="/"
                class="block py-2 px-3 text-[#BDBFCB] bg-[#9D672F] rounded-sm md:bg-transparent md:text-[#9D672F] md:p-0 dark:text-[#BDBFCB] md:dark:text-[#42608A]"
                aria-current="page"
              >
                Početna
              </a>
            </li>
            <li>
              <a
                href="/docs"
                class="block py-2 px-3 text-[#BDBFCB] rounded-sm hover:bg-[#343742] md:hover:bg-transparent md:border-0 md:hover:text-[#597BC0] md:p-0 dark:text-[#BDBFCB] md:dark:hover:text-[#597BC0] dark:hover:bg-[#343742] dark:hover:text-[#BDBFCB] md:dark:hover:bg-transparent"
              >
                Dokumentacija
              </a>
            </li>
            <li>
              <a
                href="/install"
                class="block py-2 px-3 text-[#BDBFCB] rounded-sm hover:bg-[#343742] md:hover:bg-transparent md:border-0 md:hover:text-[#597BC0] md:p-0 dark:text-[#BDBFCB] md:dark:hover:text-[#597BC0] dark:hover:bg-[#343742] dark:hover:text-[#BDBFCB] md:dark:hover:bg-transparent"
              >
                Instalacija
              </a>
            </li>
            <li>
              <a
                href="/applist"
                class="block py-2 px-3 text-[#BDBFCB] rounded-sm hover:bg-[#343742] md:hover:bg-transparent md:border-0 md:hover:text-[#597BC0] md:p-0 dark:text-[#BDBFCB] md:dark:hover:text-[#597BC0] dark:hover:bg-[#343742] dark:hover:text-[#BDBFCB] md:dark:hover:bg-transparent"
              >
                Lista aplikacija
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
