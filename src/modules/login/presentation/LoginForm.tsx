import React from "react";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

import { LoginPayload } from "modules/login/application";
import { useLogin } from "modules/login/infrastructure";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>();
  const { push } = useHistory();

  const login = useLogin();

  const onSubmit = handleSubmit(async (data) => {
    const response = await login.mutateAsync(data);
    if (response?.id) return push("/");
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={4}>
        <Input placeholder="email" {...register("email")} />
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <Button mt={4} type="submit" isLoading={isSubmitting}>
          Login
        </Button>
      </VStack>
    </form>
  );
};
