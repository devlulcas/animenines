import { Anime } from "@/types/anime";
import Image from "next/image";
import Link from "next/link";

type AnimeCardProps = { anime: Anime };

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={"/animes/" + anime.id}>
      <article className="flex-1 gap-1 bg-gradient-to-tr from-gray-800 to-green-600 text-slate-100 p-2 max-w-md rounded-md h-full">
        <h2 className="text-lg h-24">
          {anime.title} - {anime.japaneseTitle}
        </h2>

        <Image
          className="rounded-md aspect-square w-full object-cover"
          src={anime.images.large}
          alt={anime.title}
          width={150}
          height={150}
        />

        <p className="text-sm h-10 text-slate-100 overflow-y-hidden">
          {anime.synopsis}
        </p>
      </article>
    </Link>
  );
}
