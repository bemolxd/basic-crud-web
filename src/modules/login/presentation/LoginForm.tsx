import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, Input, VStack } from "@chakra-ui/react";

import { LoginPayload } from "modules/login/application";
import { useLogin } from "modules/login/infrastructure";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>();

  const [login] = useLogin();

  const onSubmit = handleSubmit(async (data) => {
    login(data);
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
        <Button as={Link} variant="ghost" to="/register">
          Register
        </Button>
      </VStack>
    </form>
  );
};
