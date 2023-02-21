import { env } from "@/config";
import { Episode, isEpisodeResponseDTOArray } from "@/types/episode";

export async function getAnimeEpisodes(id: string): Promise<Episode[]> {
  const malId = id.replace(/\D/g, "");

  const response = await fetch(`${env.API_URL}/anime/${malId}/episodes`);

  const json = await response.json();

  if (!isEpisodeResponseDTOArray(json)) return [];

  return json.data.map((episode) => ({
    id: episode.mal_id,
    title: episode.title,
    japaneseTitle: episode.title_japanese,
    aired: episode.aired,
    filler: episode.filler,
    recap: episode.recap,
    videoUrl: episode.video_url,
    forumUrl: episode.forum_url,
  }));
}
