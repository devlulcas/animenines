import { Anime, AnimeResponseDTO } from "@/types/anime";
import { APIWrapper } from "./api";

export type FullAnimeResponseDTO = {
  background: string;
  genres: {
    mal_id: number;
    name: string;
    type: string;
    url: string;
  }[];
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
} & AnimeResponseDTO;

export type FullAnime = {
  background: string;
  genres: {
    id: number;
    name: string;
    type: string;
    url: string;
  }[];
  trailer: {
    youtubeId: string;
    url: string;
    embedUrl: string;
    images: {
      imageUrl: string;
      smallImageUrl: string;
      mediumImageUrl: string;
      largeImageUrl: string;
      maximumImageUrl: string;
    };
  };
} & Anime;

export function isFullAnimeResponseDTO(
  anime: unknown
): anime is APIWrapper<FullAnimeResponseDTO> {
  if (typeof anime !== "object" || anime === null) {
    return false;
  }

  return true;
}
