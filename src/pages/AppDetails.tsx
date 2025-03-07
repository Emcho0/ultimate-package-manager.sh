import { createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import type { AppInfo } from "../types.ts";

export default function AppDetails() {
  const params = useParams();
  const [app, setApp] = createSignal<AppInfo>({
    name: "",
    description: "",
    install: "",
  });

  onMount(async () => {
    const resp = await fetch(`/api/apps/${params.selectedApp}`);
    const appDetails = (await resp.json()) as AppInfo;
    setApp(appDetails);
    console.log("App Details:", appDetails);
  });

  return (
    <div class="flex flex-col items-center p-6 bg-[#343742] text-[#C6DFEC] font-[Geist_Mono] shadow-md min-h-screen">
      <h1 class="text-3xl font-bold mb-4">{app().name}</h1>
      <p class="text-lg mb-4">{app().description}</p>
      <p class="text-lg mb-4">
        Naredba: {app().install}
      </p>
      <A href="/" class="text-blue-500 hover:underline">
        Nazad na ostale aplikacije
      </A>
    </div>
  );
}
