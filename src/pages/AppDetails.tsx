// src/pages/AppDetails.tsx

import { createSignal, onMount } from "solid-js";
import { A, useParams } from "@solidjs/router";
import type { AppInfo } from "../types.ts";
import "./AppDetails.css";

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
    <div class="app-details">
      <h1>{app().name}</h1>
      <p>{app().description}</p>
      <p>
        <strong>Naredba:</strong> {app().install}
      </p>
      <A href="/">Back to all apps</A>
    </div>
  );
}
