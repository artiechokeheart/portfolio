import Header from "@/Components/Header";
import Info from "@/Components/Info";
import Projects from "@/Components/Projects";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Info />
      <Projects />
    </main>
  );
}
