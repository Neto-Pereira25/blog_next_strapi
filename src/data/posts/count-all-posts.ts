import { POSTS_URL } from '../../app/config/app-config';
import { fetchJsonStatic } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJsonStatic<number>(url);
  return numberOfPosts;
};
