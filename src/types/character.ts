import { APIWrapper } from "./api";

export type CharacterResponseDTO = {
  character: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
        small_image_url: string;
      };
      webp: {
        image_url: string;
        small_image_url: string;
      };
    };
    name: string;
  };
  role: string;
  voice_actors: VoiceActorResponseDTO[];
};

type VoiceActorResponseDTO = {
  person: {
    mal_id: number;
    url: string;
    images: {
      jpg: {
        image_url: string;
      };
    };
    name: string;
  };
  language: string;
};

export type Character = {
  id: number;
  url: string;
  images: {
    large: string;
    tiny: string;
  };
  name: string;
  role: string;
  voiceActors: {
    id: number;
    url: string;
    image: string;
    name: string;
    language: string;
  }[];
};

export function isCharacterResponseDTOArray(
  character: unknown
): character is APIWrapper<CharacterResponseDTO[]> {
  if (typeof character !== "object" || character === null) {
    return false;
  }

  if (!("data" in character)) {
    return false;
  }

  if (!Array.isArray(character.data)) {
    return false;
  }

  return true;
}
