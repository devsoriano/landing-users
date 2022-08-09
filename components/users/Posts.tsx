import { useGetPosts } from "../../hooks/useGetPosts";
import { GrTrash } from "react-icons/gr";
import { Icon } from "../../styles/Ui/structure";

interface Props {
  userId: number;
}

export const Posts = ({ userId }: Props) => {
  const { posts, deleteItem } = useGetPosts(userId);

  return (
    <section>
      <h2>Posts</h2>
      {posts.map(({ id, title, body }, index) => (
        <div key={id}>
          <div>
            <h3>{title}</h3>
            <div>{body}</div>
            <Icon>
              <GrTrash onClick={deleteItem(index)} />
            </Icon>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
};
