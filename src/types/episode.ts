import { APIWrapper } from "./api";

export type Episode = {
  id: number;
  title: string;
  japaneseTitle: string;
  aired: string;
  filler: boolean;
  recap: boolean;
  videoUrl: string;
  forumUrl: string;
};

export interface EpisodeResponseDTO {
  mal_id: number;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  filler: boolean;
  recap: boolean;
  video_url: string;
  forum_url: string;
}

export function isEpisodeResponseDTO(
  episode: unknown
): episode is APIWrapper<EpisodeResponseDTO> {
  if (typeof episode !== "object" || episode === null) {
    return false;
  }

  if (!("data" in episode)) {
    return false;
  }

  if (Array.isArray(episode.data)) {
    return false;
  }

  return true;
}

export function isEpisodeResponseDTOArray(
  episode: unknown
): episode is APIWrapper<EpisodeResponseDTO[]> {
  if (typeof episode !== "object" || episode === null) {
    return false;
  }

  if (!("data" in episode)) {
    return false;
  }

  if (!Array.isArray(episode.data)) {
    return false;
  }

  return true;
}
