import { POSTS_URL } from '../../app/config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJsonStatic } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = fetchJsonStatic<PostData[]>(url);
  return posts;
};
