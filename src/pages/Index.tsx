import { createSignal, For, onMount } from "solid-js";
import { A } from "@solidjs/router";
import type { AppInfo } from "../types.ts";
import "./Index.css";
import Navbar from "../components/Navbar.tsx";

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
      <Navbar/>

      <main class="index">
        <h1>Ultimate Package Manager</h1>
        <p>Najbolji upravitelj aplikacija ikada.</p>
        <For each={apps()}>
          {(app) => (
            <A href={`/${app.name.toLowerCase()}`} class="app">
              {app.name}
            </A>
          )}
        </For>
      </main>
    </>
  );
}
