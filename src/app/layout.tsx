import { Header } from "@/components/header";
import Link from "next/link";
import "../styles/globals.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-gray-50">
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
