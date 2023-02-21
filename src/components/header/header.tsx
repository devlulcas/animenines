import Link from "next/link";
import css from "./header.module.css";

export function Header() {
  return (
    <header className="z-20 custom-full-bleed fixed top-0 w-full h-[var(--header-height)] flex justify-center items-center">
      <nav className={css.header}>
        <Link className="p-2 text-white hover:text-violet-300" href="/">Homepage</Link>
        <Link className="p-2 text-white hover:text-violet-300" href="/comments">Comments</Link>
      </nav>
    </header>
  );
}
