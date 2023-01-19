import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Server component
export default async function Home() {
  const result = await getTopAnimes();

  return (
    <main>
      <h1>Homepage</h1>

      {result.map((anime) => (
        <article key={anime.id}>
          <h2>
            {anime.title} - {anime.japaneseTitle}
          </h2>

          <Image
            src={anime.images.large}
            alt={anime.title}
            width={300}
            height={300}
          />

          <p>{anime.synopsis}</p>
        </article>
      ))}
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
