import { env } from "@/config";
import { Character, isCharacterResponseDTOArray } from "@/types/character";

export async function getAnimeCharacters(id: string): Promise<Character[]> {
  const malId = id.replace(/\D/g, "");

  const response = await fetch(`${env.API_URL}/anime/${malId}/characters`, {
    next: {
      revalidate: 60 * 15,
    },
  });

  const json = await response.json();

  if (!isCharacterResponseDTOArray(json)) return [];

  return json.data.map((item) => ({
    id: item.character.mal_id,
    name: item.character.name,
    images: {
      large: item.character.images.webp.image_url,
      tiny: item.character.images.webp.small_image_url,
    },
    role: item.role,
    url: item.character.url,
    voiceActors: item.voice_actors.map((voiceActor) => ({
      id: voiceActor.person.mal_id,
      name: voiceActor.person.name,
      image: voiceActor.person.images.jpg.image_url,
      language: voiceActor.language,
      url: voiceActor.person.url,
    })),
  }));
}
