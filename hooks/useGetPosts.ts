import { useState, useEffect } from "react";
import { getPosts } from "./../api/user";

export const useGetPosts = (userId: number) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const listPosts = await getPosts(userId);
      setPosts(listPosts);
    })();
  }, []);

  const deleteItem = (index: number) => () => {
    setPosts((posts) => posts.filter((_, i) => i !== index));
  };

  return {
    posts,
    deleteItem,
  };
};
