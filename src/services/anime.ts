import { env } from "@/config";
import { logError } from "@/lib/log";
import { Anime, isAnimeResponseDTOArray } from "@/types/anime";

export async function getTopAnimes(): Promise<Anime[]> {
  try {
    const response = await fetch(`${env.API_URL}/top/anime`, {
      cache: "no-cache",
    });

    const json = await response.json();

    if (!isAnimeResponseDTOArray(json)) return [];

    return json.data.map((anime) => ({
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
  } catch (error) {
    logError(error);
    return [];
  }
}
