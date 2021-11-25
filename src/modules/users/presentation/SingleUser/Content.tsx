import React from "react";

import { useUsersQuery, useUserQuery } from "modules/users/infrastructure";
import { SinglePost } from "modules/feed/presentation";
import { Post } from "modules/feed/application";

import { UserCard } from "../ExploreUsers/UserCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { usePostsQuery } from "modules/feed/infrastructure";
import { User } from "modules/users/application";

export const UserRoutes = () => {
  const {
    params: { userId },
  } = useRouteMatch<{ userId: string }>();
  const { data: posts } = usePostsQuery(Number(userId));

  return (
    <Switch>
      <Route exact path={`/user/${userId}`}>
        <Posts posts={posts!} />
      </Route>
      <Route exact path={`/user/${userId}/friends`}>
        <Friends userId={userId} />
      </Route>
    </Switch>
  );
};

export const Posts = ({ posts }: { posts: Post[] }) => {
  if (!posts) return null;
  return (
    <>
      {posts
        ?.sort((prev, next) => next.id - prev.id)
        .map((post) => (
          <SinglePost key={post.id} post={post} />
        ))}
    </>
  );
};

export const Friends = ({ userId }: { userId: string }) => {
  const { data: users } = useUsersQuery();
  const { data: myUser } = useUserQuery(Number(userId));

  const filteredUsers: User[] | undefined = users?.filter((user) => {
    if (myUser?.friendsIds?.includes(user.id.toString())) {
      return user;
    }
    return null;
  });

  return (
    <>
      {filteredUsers?.map((user) => (
        <UserCard key={user.id} user={user} isRequestActive />
      ))}
    </>
  );
};
