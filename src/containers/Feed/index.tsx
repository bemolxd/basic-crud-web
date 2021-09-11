import React, { Suspense } from "react";

import { PostsContent } from "./PostsContent";

export const Feed = () => (
  <Suspense fallback={<div>loading...</div>}>
    <PostsContent />
  </Suspense>
);
