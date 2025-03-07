import { A } from "@solidjs/router";

export default function Navbar() {
  return (
    <nav class="navbar">
      <A href="/docs">Dokumentacija</A>
      <A href="/install">Instalacija</A>
    </nav>
  );
}
