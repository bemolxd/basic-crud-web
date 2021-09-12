import React, { Suspense } from "react";

import { ExploreUsers } from "modules/users/presentation";

export const UsersPage = () => {
  return (
    <Suspense fallback={<div>loading users...</div>}>
      <ExploreUsers />
    </Suspense>
  );
};
