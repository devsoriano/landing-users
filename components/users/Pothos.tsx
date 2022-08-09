import { useGetPhotos } from "../../hooks/useGetPhotos";
import { Photo } from "../../styles/Ui/structure";
interface Props {
  albumId: number;
}

export const Photos = ({ albumId }: Props) => {
  const { photos } = useGetPhotos(albumId);

  return (
    <div>
      {photos.map(({ title, thumbnailUrl }, index) => (
        <Photo key={index}>
          <h6>{title}</h6>
          <img src={thumbnailUrl} alt={title} />
        </Photo>
      ))}
    </div>
  );
};
