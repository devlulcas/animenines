import { logError } from "@/lib/log";
import {
  Anime,
  isAnimeResponseDTO,
  isAnimeResponseDTOArray,
} from "@/types/anime";

const API_URL = process.env.NEXT_PUBLIC_API;

export async function getTopAnimes(): Promise<Anime[]> {
  try {
    const response = await fetch(`${API_URL}/top/anime`);

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

export async function getAnime(id: string) {
  const malId = id.replace(/\D/g, "");

  const response = await fetch(`${API_URL}/anime/${malId}`);

  const json = await response.json();

  if (!isAnimeResponseDTO(json)) return [];

  const anime = json.data;

  return {
    id: anime.mal_id,
    title: anime.title,
    japaneseTitle: anime.title_japanese,
    images: {
      large: anime.images.webp.large_image_url,
      tiny: anime.images.webp.image_url,
    },
    episodes: anime.episodes,
    synopsis: anime.synopsis,
  };
}
