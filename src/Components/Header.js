import { Suspense } from "react";

export default function Header() {
  return (
    <div>
      <Suspense>
        <h1 className="Header">Portfolio</h1>
      </Suspense>
    </div>
  );
}
