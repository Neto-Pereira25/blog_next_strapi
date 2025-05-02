import { POSTS_URL } from '../../app/config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = fetchJson<PostData[]>(POSTS_URL);
  return posts;
};
