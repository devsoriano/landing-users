import type { NextPage } from "next";
import { List } from "./../components/users/List";
import { UsersLayout } from "./../components/layouts/UsersLayout";

const Home: NextPage = () => {
  return (
    <UsersLayout
      title={"Users-app - Home"}
      pageDescription={"Checa la información de todos los usuarios"}
    >
      <div>
        <h2>Users</h2>
        <List />
      </div>
    </UsersLayout>
  );
};

export default Home;
