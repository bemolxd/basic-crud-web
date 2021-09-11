import React from "react";

import { useUsersQuery } from "modules/users/infrastructure";

export const UsersPage = () => {
  const { data: users } = useUsersQuery();

  console.log(users);

  return (
    <>
      <div>users page</div>
      {users && users.map((user, idx) => <div key={idx}>{user.username}</div>)}
    </>
  );
};
