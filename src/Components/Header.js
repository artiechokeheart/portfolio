import { Suspense } from "react";

export default function Header() {
  return (
    <header>
      <Suspense>
        <h1 className="Header">Portfolio</h1>
      </Suspense>
    </header>
  );
}
