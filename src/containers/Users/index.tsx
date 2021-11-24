import React, { Suspense, useState } from "react";

import { ExploreUsers, ExploreUsersSuspense } from "modules/users/presentation";
import { SearchUsersProvider } from "modules/users/application";

export const UsersPage = () => {
  const [searchUsers, setSearchUsers] = useState<string>("");

  return (
    <Suspense fallback={<ExploreUsersSuspense />}>
      <SearchUsersProvider query={searchUsers} setQuery={setSearchUsers}>
        <ExploreUsers />
      </SearchUsersProvider>
    </Suspense>
  );
};
