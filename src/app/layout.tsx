import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Homepage</Link>
            <hr />
            <Link href="/comments">Comments</Link>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
