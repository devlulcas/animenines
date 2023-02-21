import { env } from "@/config";
import { FullAnime, isFullAnimeResponseDTO } from "@/types/full-anime";

export async function getFullAnime(id: string): Promise<FullAnime | null> {
  try {
    const malId = id.replace(/\D/g, "");

    const response = await fetch(`${env.API_URL}/anime/${malId}/full`);

    const json = await response.json();

    if (!isFullAnimeResponseDTO(json)) return null;

    const anime = json.data;

    if (!anime) return null;

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
      background: anime.background,
      genres: anime.genres.map((genre) => ({
        id: genre.mal_id,
        name: genre.name,
        type: genre.type,
        url: genre.url,
      })),
      trailer: {
        youtubeId: anime.trailer.youtube_id,
        url: anime.trailer.url,
        embedUrl: anime.trailer.embed_url,
        images: {
          imageUrl: anime.trailer.images.image_url,
          smallImageUrl: anime.trailer.images.small_image_url,
          mediumImageUrl: anime.trailer.images.medium_image_url,
          largeImageUrl: anime.trailer.images.large_image_url,
          maximumImageUrl: anime.trailer.images.maximum_image_url,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
