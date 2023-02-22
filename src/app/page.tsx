import { AnimeCard } from "@/components/anime-card";
import { Heading } from "@/components/title";
import { getTopAnimes } from "@/services/anime";

// Server component
export default async function HomePage() {
  const result = await getTopAnimes();

  return (
    <main>
      <Heading as="h1" className="text-4xl">
        🍶 Animenines - Top animes
      </Heading>

      <ul className="grid grid-cols-3 p-2 gap-4">
        {result.map((anime) => (
          <li key={anime.id}>
            <AnimeCard anime={anime} />
          </li>
        ))}
      </ul>
    </main>
  );
}
