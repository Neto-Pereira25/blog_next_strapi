import { PostData } from '../../domain/posts/post';
import { getAllPosts } from './get-all-posts';

export const getAllPostsOfThisCategory = async (
  name: string,
): Promise<PostData[]> => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=30',
  );

  const filteredPosts = posts.filter(
    (post) => post.category.name.toLowerCase() === name.toLowerCase(),
  );
  return filteredPosts;
};
