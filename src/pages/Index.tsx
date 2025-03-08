import { createSignal, onMount } from "solid-js";
import Navbar from "../components/Navbar.tsx";

export default function Index() {
  const [os, setOs] = createSignal("");
  const [installInfo, setInstallInfo] = createSignal("");
  const [copied, setCopied] = createSignal(false);

  onMount(async () => {
    try {
      const response = await fetch("/api/os-info");
      const data = await response.json();
      setOs(data.os);
      updateInstallInfo(data.os);
    } catch (error) {
      console.error("Failed to fetch OS info:", error);
    }
  });

  const updateInstallInfo = (os: string) => {
    if (os === "windows") {
      setInstallInfo(
        "irm https://upm.sh/install.ps1 | iex",
      );
    } else if (os === "macos" || os === "linux") {
      setInstallInfo(
        "curl -fsSL https://upm.sh/install.sh | sh",
      );
    }
  };

  const copyToClipboard = () => {
    const text = installInfo();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch((err) => console.error("Failed to copy:", err));
  };

  const handleButtonClick = (targetOS: string) => {
    updateInstallInfo(targetOS);
    setOs(targetOS);
  };

  return (
    <>
      <Navbar />
      <main class="bg-[#15171D] min-h-screen text-[#878996] font-[Geist_Mono] flex flex-col items-center justify-center p-8">
        <p class="text-center text-3xl mb-6">Ultimate Package Manager</p>

        <p class="text-center text-xl mb-5">Najbolji upravitelj paketa ikad</p>
        <p>Instalirajte sada</p>

        <div class="relative inline-flex w-full max-w-[23rem] mb-8">
          <div class="inline-flex w-full rounded-full overflow-hidden border border-[#343742] transition-all duration-300 ease-in-out">
            <button
              onClick={() => handleButtonClick("windows")}
              class={`px-8 py-4 text-lg font-medium flex-1 transition-colors ${
                os() === "windows"
                  ? "bg-[#0F1015] text-[#C6DFEC]"
                  : "bg-[#343742] text-[#878996] hover:bg-[#0F1015] hover:text-[#C6DFEC]"
              }`}
            >
              Windows
            </button>

            <button
              onClick={() => handleButtonClick("macos")}
              class={`px-8 py-4 text-lg font-medium flex-1 transition-colors ${
                os() === "macos" || os() === "linux"
                  ? "bg-[#0F1015] text-[#C6DFEC]"
                  : "bg-[#343742] text-[#878996] hover:bg-[#0F1015] hover:text-[#C6DFEC]"
              }`}
            >
              MacOS/Linux
            </button>
          </div>
        </div>

        {installInfo() && (
          <div class="mt-6 p-6 bg-[#343742] rounded-lg text-[#C6DFEC] text-lg flex justify-between items-center w-full max-w-2xl">
            <span class="font-mono">{installInfo()}</span>

            <div class="inline-flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                class="px-4 py-2 bg-[#478584]/20 text-[#478584] rounded-lg hover:bg-[#478584]/30 transition-colors border border-[#478584]/30"
              >
                Kopiraj
              </button>
              {copied() && (
                <span class="text-sm text-[#478584] animate-fade-in">
                  Kopirano
                </span>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
