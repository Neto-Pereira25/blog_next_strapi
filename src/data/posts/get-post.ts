import { POSTS_URL } from '../../app/config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJsonDynamic } from '../../utils/fetch-json';

export const getPost = async (slug: string): Promise<PostData[]> => {
  const url = `${POSTS_URL}&filters[slug]=${slug}`;
  const jsonPosts = await fetchJsonDynamic<PostData[]>(url);
  return jsonPosts;
};
