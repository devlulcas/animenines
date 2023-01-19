import { AnimeCard } from "@/components/anime-card";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Server component
export default async function Home() {
  const result = await getTopAnimes();

  return (
    <main>
      <h1>Homepage</h1>

      <AnimeCard />

      <ul className="grid grid-cols-5 p-2 gap-2">
        {result.map((anime) => (
          <li key={anime.id}>
            <article className="flex-1 gap-1 bg-slate-900 text-slate-100 p-2 max-w-md rounded-md h-full">
              <h2 className="text-lg">
                {anime.title} - {anime.japaneseTitle}
              </h2>

              <Image
                className="rounded-md aspect-square w-full object-cover"
                src={anime.images.large}
                alt={anime.title}
                width={300}
                height={300}
              />

              <p className="text-sm h-10 text-slate-400 overflow-y-hidden">
                {anime.synopsis}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}

interface AnimeResponseDTO {
  mal_id: number;
  title: string;
  title_japanese: string;
  images: {
    webp: {
      image_url: string;
      large_image_url: string;
    };
  };
  episodes: number;
  synopsis: string;
}

interface Anime {
  id: number;
  title: string;
  japaneseTitle: string;
  images: {
    large: string;
    tiny: string;
  };
  episodes: number;
  synopsis: string;
}

const API_URL = process.env.NEXT_PUBLIC_API;

async function getTopAnimes(): Promise<Anime[]> {
  const response = await fetch(`${API_URL}/top/anime`);

  const json = await response.json();

  const result = json as { data: AnimeResponseDTO[] };

  return result.data.map((anime) => ({
    id: anime.mal_id,
    title: anime.title,
    japaneseTitle: anime.title_japanese,
    images: {
      large: anime.images.webp.large_image_url,
      tiny: anime.images.webp.image_url,
    },
    episodes: anime.episodes,
    synopsis: anime.synopsis,
  }));
}
