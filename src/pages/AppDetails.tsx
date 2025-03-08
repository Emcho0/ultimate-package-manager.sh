import { createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import type { AppInfo } from "../types.ts";
import Navbar from "../components/Navbar.tsx";

export default function AppDetails() {
  const params = useParams();
  const [app, setApp] = createSignal<AppInfo>({
    name: "",
    description: "",
    install: "",
  });
  const [copied, setCopied] = createSignal(false);

  const copyToClipboard = () => {
    const text = app().install;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => console.error("Failed to copy:", err));
  };

  // Fetch app details on mount
  onMount(async () => {
    const resp = await fetch(`/api/apps/${params.selectedApp}`);
    const appDetails = (await resp.json()) as AppInfo;
    setApp(appDetails);
    console.log("App Details:", appDetails);
  });

  return (
    <>
      <Navbar />
      <div class="flex flex-col items-center p-6 bg-[#15171D] text-[#878996] font-[Geist_Mono] shadow-md min-h-screen">
        <h1 class="text-3xl font-bold mb-4">{app().name}</h1>
        <p class="text-lg mb-4">{app().description}</p>

        {/* Display the installation command with a "Copy" button */}
        <div class="flex items-center mb-4">
          <p class="text-lg mr-2">{`Naredba: ${app().install}`}</p>

          <button
            onClick={copyToClipboard}
            class="px-4 py-2 bg-[#343742] text-[#C6DFEC] rounded-md hover:bg-[#597BC0] focus:outline-none focus:ring-2 focus:ring-[#597BC0]"
          >
            {copied() ? "Kopirano!" : "Kopiraj"}
          </button>
        </div>
      </div>
    </>
  );
}
