import { Character } from "@/types/character";
import Image from "next/image";

type AnimeCharacterCardProps = { character: Character };

export function AnimeCharacterCard({ character }: AnimeCharacterCardProps) {
  return (
    <div className="relative bg-white w-[300px] h-[400px]">
      <Image
        src={character.images.large}
        alt={character.name}
        width={300}
        height={400}
        className="object-cover"
      />

      <ul className="flex w-full absolute top-0 right-0 flex-wrap flex-1">
        {character.voiceActors.map((voiceActor) => (
          <li
            title={`${voiceActor.name} as ${character.name} (${character.role} - ${voiceActor.language})`}
            key={voiceActor.id}
          >
            <Image
              src={voiceActor.image}
              alt={voiceActor.name}
              width={50}
              height={50}
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <p className="text-lg font-bold text-white">{character.name}</p>
        <p className="text-lg font-medium text-white">{character.role}</p>
      </div>
    </div>
  );
}
