import { memo } from "react";

import { Box } from "@chakra-ui/react";

import { usePostsQuery } from "modules/feed/infrastructure";
import {
  EditPostModal,
  PostCreator,
  SinglePost,
} from "modules/feed/presentation";

export const PostsContent = memo(() => {
  const { data: posts } = usePostsQuery();

  if (!posts || posts.length === 0) return <div>no posts</div>;

  return (
    <Box maxW="600px" w="100%">
      <PostCreator />
      <EditPostModal />
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </Box>
  );
});
