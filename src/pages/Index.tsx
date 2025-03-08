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
        "Run the following command in PowerShell: irm https://upm.sh/install.ps1 | iex",
      );
    } else if (os === "macos" || os === "linux") {
      setInstallInfo(
        "Run the following command in your terminal: curl -fsSL https://upm.sh/install.sh | sh",
      );
    }
  };

  // Copy to clipboard functionality
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

        <div class="relative inline-flex w-full max-w-[23rem] mb-8">
          <div
            class={`inline-flex w-full rounded-full overflow-hidden border transition-all duration-300 ease-in-out`}
          >
            <button
              onClick={() => handleButtonClick("windows")}
              class={`px-8 py-4 text-lg font-medium text-[#C6DFEC] border-r border-[#343742] rounded-full focus:ring-2 focus:ring-[#597BC0] focus:text-[#597BC0] hover:bg-[#0F1015] hover:text-[#C6DFEC] dark:bg-[#343742] dark:border-[#343742] dark:hover:bg-[#0F1015] dark:hover:text-[#C6DFEC] dark:focus:ring-[#597BC0] dark:focus:text-[#597BC0] ${
                os() === "windows"
                  ? "bg-[#0F1015] text-[#C6DFEC]" // Darken and highlight the selected button
                  : "bg-[#343742] text-[#C6DFEC]"
              }`}
            >
              Windows
            </button>

            <button
              onClick={() => handleButtonClick("macos")}
              class={`px-8 py-4 text-lg font-medium text-[#C6DFEC] border-l border-[#343742] rounded-full focus:ring-2 focus:ring-[#BB5D7D] focus:text-[#BB5D7D] hover:bg-[#0F1015] hover:text-[#C6DFEC] dark:bg-[#343742] dark:border-[#343742] dark:hover:bg-[#0F1015] dark:hover:text-[#C6DFEC] dark:focus:ring-[#BB5D7D] dark:focus:text-[#BB5D7D] ${
                os() === "macos" || os() === "linux"
                  ? "bg-[#0F1015] text-[#C6DFEC]"
                  : "bg-[#343742] text-[#C6DFEC]"
              }`}
            >
              MacOS/Linux
            </button>
          </div>
        </div>

        {installInfo() && (
          <div class="mt-6 p-6 bg-[#343742] rounded-lg text-[#C6DFEC] text-lg flex justify-between items-center">
            <span>{installInfo()}</span>

            <div class="inline-flex ml-6">
              {/* Copy button */}
              <button
                onClick={copyToClipboard}
                class="px-6 py-3 bg-[#343742] text-[#C6DFEC] border border-[#343742] rounded-full hover:bg-[#0F1015] hover:text-[#C6DFEC] focus:ring-2 focus:ring-[#597BC0] focus:text-[#597BC0] dark:bg-[#343742] dark:border-[#343742] dark:hover:bg-[#0F1015] dark:hover:text-[#C6DFEC] dark:focus:ring-[#597BC0] dark:focus:text-[#597BC0]"
              >
                Copy
              </button>

              {copied() && (
                <span class="px-6 py-2 text-sm font-medium text-[#0F1015] bg-[#478584] border border-[#343742] rounded-full ml-4">
                  Copied!
                </span>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
