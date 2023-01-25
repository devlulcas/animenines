import { APIWrapper } from "./api";

/**
 * Informações de um anime
 */
export interface Anime {
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

/**
 * Tipo do JSON retornado pela API
 */
export interface AnimeResponseDTO {
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

/**
 * Type guard para verificar se o objeto é do tipo AnimeResponseDTO
 * @param anime Retorno da API
 * @returns Verdadeiro se o objeto for do tipo AnimeResponseDTO
 */
export function isAnimeResponseDTO(
  anime: unknown,
): anime is APIWrapper<AnimeResponseDTO> {
  if (typeof anime !== "object" || anime === null) {
    return false;
  }

  if (!("data" in anime)) {
    return false;
  }

  if (Array.isArray(anime.data)) {
    return false;
  }

  return true;
}

export function isAnimeResponseDTOArray(
  anime: unknown,
): anime is APIWrapper<AnimeResponseDTO[]> {
  if (typeof anime !== "object" || anime === null) {
    return false;
  }

  if (!("data" in anime)) {
    return false;
  }

  if (!Array.isArray(anime.data)) {
    return false;
  }

  return true;
}
