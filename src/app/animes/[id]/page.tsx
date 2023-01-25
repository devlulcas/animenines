import { AnimeCard } from "@/components/anime-card";
import { getAnime } from "@/services/anime";

type AnimePageProps = {
  params: { id: string };
};

export default async function AnimePage({ params }: AnimePageProps) {
  const json = await getAnime(params.id);

  if (Array.isArray(json)) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <tr className="border-2 border-color-gray-500">
            <td className="border-r-2 border-color-gray-500">id</td>
            <td>{json.id}</td>
          </tr>
          <tr className="border-2 border-color-gray-500">
            <td className="border-r-2 border-color-gray-500">title</td>
            <td>{json.title}</td>
          </tr>
          <tr className="border-2 border-color-gray-500">
            <td className="border-r-2 border-color-gray-500">japaneseTitle</td>
            <td>{json.japaneseTitle}</td>
          </tr>
          <tr className="border-2 border-color-gray-500">
            <td className="border-r-2 border-color-gray-500">synopsis</td>
            <td>{json.synopsis}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
