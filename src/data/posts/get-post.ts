import { POSTS_URL } from '../../app/config/app-config';
import { PostData } from '../../domain/posts/post';
import { fetchJsonDynamic } from '../../utils/fetch-json';
import { markdownToHtml } from '../../utils/markdown-to-html';

export const getPost = async (slug: string): Promise<PostData[]> => {
  const url = `${POSTS_URL}&filters[slug]=${slug}`;
  const jsonPosts = await fetchJsonDynamic<PostData[]>(url);

  const content = await markdownToHtml(jsonPosts[0].content);
  const finalContent = { ...jsonPosts[0], content };
  return [finalContent];
};
