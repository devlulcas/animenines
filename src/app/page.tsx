import { AnimeCard } from "@/components/anime-card";
import { getTopAnimes } from "@/services/anime";

// Server component
export default async function HomePage() {
  const result = await getTopAnimes();

  return (
    <main>
      <h1 className="text-4xl font-bold text-white">Homepage</h1>

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
