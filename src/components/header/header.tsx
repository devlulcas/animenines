import Link from "next/link";

export function Header() {
  return (
    <header className="w-full p-1 bg-green-50 flex justify-center">
      <nav className="flex gap-5">
        <Link className="p-2 text-green-700 hover:text-green-900" href="/">Homepage</Link>
        <Link className="p-2 text-green-700 hover:text-green-900" href="/comments">Comments</Link>
      </nav>
    </header>
  );
}
