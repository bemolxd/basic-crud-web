import { Suspense, useState } from "react";

import { SearchUsersProvider } from "modules/users/application";
import { ExploreUsers, ExploreUsersSuspense } from "modules/users/presentation";

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
