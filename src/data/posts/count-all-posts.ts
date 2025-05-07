import { POSTS_URL } from '../../app/config/app-config';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetch(url);
  const numberOfPosts = await posts.json();
  return numberOfPosts.meta.pagination.total;
};
