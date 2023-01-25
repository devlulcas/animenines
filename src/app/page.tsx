import { AnimeCard } from "@/components/anime-card";
import {
  Anime,
  AnimeResponseDTO,
  isAnimeResponseDTO,
  isAnimeResponseDTOArray,
} from "@/types/anime";
import { Inter } from "@next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
import { getTopAnimes } from "@/services/anime";

// Server component
export default async function HomePage() {
  const result = await getTopAnimes();

  return (
    <main>
      <h1>Homepage</h1>

      <ul className="grid grid-cols-5 p-2 gap-2">
        {result.map((anime) => (
          <li key={anime.id}>
            <AnimeCard anime={anime} />
          </li>
        ))}
      </ul>
    </main>
  );
}
