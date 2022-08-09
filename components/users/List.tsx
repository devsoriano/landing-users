import { UserData } from "./../../api/user/interface";
import { useInfiniteUsers } from "./../../hooks/useInfinityUsers";
import { Button } from "./../../styles/Ui/inputs";
import { Item } from "./Item";
import { Cards } from "./../../styles/Ui/cards";

export const List = () => {
  const [users, more, updateState] = useInfiniteUsers();

  return (
    <>
      <section>
        <Cards>
          {users.map((userData: UserData, index: any) => (
            <Item {...{ userData }} {...{ updateState }} key={index} />
          ))}
        </Cards>
        <Button style={{ marginBottom: "100px" }} onClick={more}>
          More users
        </Button>
      </section>
    </>
  );
};
