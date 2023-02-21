import { Anime } from "@/types/anime";
import Image from "next/image";
import Link from "next/link";

type AnimeCardProps = { anime: Anime };

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <Link href={"/animes/" + anime.id}>
      <article className="relative flex-1 gap-1 text-slate-100 border-2 border-gray-100 max-w-lg h-full">
        <div className="absolute z-10 -ml-2 mt-2 mb-2 p-2 bg-white w-full">
          <h2 className="text-lg text-gray-800 truncate">{anime.title}</h2>
          <p className="text-xs text-gray-500 truncate">
            {anime.japaneseTitle}
          </p>
        </div>

        <div className="z-0 absolute top-0 right-0 h-32 w-full bg-gradient-to-t bg-opacity-90 from-transparent to-gray-900" />

        <Image
          className="h-[330px] w-full object-cover z-0"
          src={anime.images.large}
          alt={anime.title}
          width={225}
          height={330}
        />

        <p className="h-36 overflow-y-hidden px-2 py-4 text-sm text-white border-t-2 border-gray-100 bg-black bg-opacity-75">
          {anime.synopsis}
        </p>
      </article>
    </Link>
  );
}
