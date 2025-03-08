import { createSignal, For, onMount } from "solid-js";
import { A } from "@solidjs/router";
import type { AppInfo } from "../types.ts";

import Navbar from "../components/Navbar.tsx";
import Search from "../components/Search.tsx";

export default function Index() {
  const [apps, setApps] = createSignal<AppInfo[]>([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/apps");
      const allApps = (await response.json()) as AppInfo[];
      setApps(allApps);
    } catch (error) {
      console.error("Failed to fetch apps:", error);
    }
  });

  return (
    <>
      <Navbar />

      <main class="bg-[#15171D] min-h-screen text-[#878996] font-[Geist_Mono] flex flex-col items-center justify-center p-4">
        <p class="text-center text-2xl mb-6">
          Najbolji upravitelj aplikacija ikada.
        </p>
        <Search />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
          <For each={apps()}>
            {(app) => (
              <A
                href={`/${app.name.toLowerCase()}`}
                class="bg-[#1D202B] hover:bg-[#343742] text-[#BDBFCB] rounded-lg p-6 text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <span class="block text-xl font-semibold">{app.name}</span>
              </A>
            )}
          </For>
        </div>
      </main>
    </>
  );
}
