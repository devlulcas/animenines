import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function CommentsLayout({
  children,
}: Props) {
  return (
    <>
      <aside>
        <button>Mais recentes</button>
        <button>Mais antigos</button>
      </aside>

      {children}
    </>
  );
}
