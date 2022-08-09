import { useGetAlbums } from "../../hooks/useGetAlbums";
import { Photos } from "./Pothos";
interface Props {
  userId: number;
}

export const Albums = ({ userId }: Props) => {
  const { albums } = useGetAlbums(userId);

  return (
    <div>
      <h1>Albums</h1>
      {albums.map(({ title, id }, index) => (
        <div key={index}>
          <div>
            <h3>{title}</h3>
            <Photos albumId={id} />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
