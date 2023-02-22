import { AnimeCharacterCard } from "@/components/anime-character-card";
import { Carousel, Slide } from "@/components/carousel";
import { Heading } from "@/components/title";
import { getAnimeCharacters } from "@/services/characters";
import { getAnimeEpisodes } from "@/services/episode";
import { getFullAnime } from "@/services/full-anime";
import clsx from "clsx";
import Image from "next/image";

type AnimePageProps = {
  params: { id: string };
};

export default async function AnimePage({ params }: AnimePageProps) {
  const [anime, episodes, characters] = await Promise.all([
    getFullAnime(params.id),
    getAnimeEpisodes(params.id),
    getAnimeCharacters(params.id),
  ]);

  if (!anime) {
    return (
      <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white">
        Not found
      </div>
    );
  }

  return (
    <div>
      <div className="flex border-b-2 border-gray-50 backdrop-blur-md">
        <Image
          src={anime.images.large}
          alt={anime.title}
          width={300}
          height={400}
          className="object-cover"
        />

        <div className="flex flex-col w-full p-4 text-white">
          <p className="text-xl font-bold text-white">{anime.japaneseTitle}</p>
          <p className="text-lg font-medium text-white">{anime.synopsis}</p>
          <h1 className="text-2xl font-bold text-white">{anime.title}</h1>
          <ul className="flex gap-2 flex-1 mt-4">
            {anime.genres.map((genre) => (
              <li
                className="flex items-center justify-center w-24 h-12 text-lg font-medium text-white bg-gray-900"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {characters.length > 0 ? (
        <section>
          <Heading>Characters</Heading>

          <Carousel>
            {characters.map((character) => (
              <Slide key={character.id}>
                <AnimeCharacterCard character={character} />
              </Slide>
            ))}
          </Carousel>
        </section>
      ) : null}

      {anime.trailer.url ? (
        <section>
          <Heading>Trailer</Heading>

          <div className="flex items-center justify-center w-full h-96 bg-gray-900">
            <iframe
              src={anime.trailer.embedUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </section>
      ) : null}

      {episodes.length > 0 ? (
        <section>
          <Heading>Episodes</Heading>

          <ul>
            {episodes.map((episode) => (
              <li
                className="flex items-center justify-between"
                key={episode.id}
              >
                <a
                  className="w-full block p-4 text-lg font-medium bg-gray-50 text-gray-900 hover:bg-gray-100"
                  href={`/animes/${anime.id}/episodes/${episode.id}`}
                >
                  {episode.title}
                </a>

                <p
                  className={clsx(
                    {
                      "bg-red-500": episode.filler,
                      "bg-emerald-500": !episode.filler,
                    },
                    "h-full text-white p-4 text-lg font-medium w-24 text-center"
                  )}
                >
                  {episode.filler ? "Filler" : "Canon"}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
