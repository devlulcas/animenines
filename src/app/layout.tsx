import "@/assets/styles/globals.css";
import { Header } from "@/components/header";
import { Background } from "@/components/background";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen bg-black">
        <Background />

        <div className="absolute inset-0 min-h-full w-full">
          <Header />
          <div className="h-[var(--header-height)]" />
          <div className="custom-wrapper min-h-full w-full relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
