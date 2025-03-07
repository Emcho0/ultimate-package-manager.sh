import { A } from "@solidjs/router";
import Navbar from "../components/Navbar.tsx";

export default function Docs() {
  return (
    <>
      <Navbar />

      <div>
        <h1>Dokuemntacija</h1>

        <p>Uskoro</p>

        <A href="/">Vrati se na pocetnu</A>
      </div>
    </>
  );
}
