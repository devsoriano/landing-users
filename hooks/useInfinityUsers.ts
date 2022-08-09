import { useState, useEffect } from "react";
import { getUsers } from "../api/user";
import { UserData } from "../api/user/interface";

export const useInfiniteUsers = () => {
  const [users, setUsers] = useState([]);
  const [blocks, setBlocks] = useState(1);

  const more = async () => {
    const moreUsers = await fetchUsers(blocks + 1);
    setBlocks((prev) => prev + 1);
    setUsers((prev) => [...prev, ...moreUsers.data]);
  };

  const updateState = (data: UserData) => {
    const newState: any = users.map((obj: any) => {
      if (obj.id === data.id) {
        return data;
      }
      return obj;
    });

    setUsers(newState);
  };

  const fetchUsers = async (page: Number) => await getUsers(page);

  useEffect(() => {
    (async () => {
      const rsUsers = await fetchUsers(0);
      setUsers(rsUsers.data);
    })();
  }, []);

  return [users, more, updateState];
};
