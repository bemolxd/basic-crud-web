import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { VStack, Input, Button } from "@chakra-ui/react";

import { RegisterPayload } from "../application";
import { useRegister } from "../infrastructure";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterPayload>();
  const { push } = useHistory();
  const [registerUser] = useRegister();

  const onSubmit = handleSubmit(async (data) => {
    await registerUser(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing={4}>
        <Input placeholder="username" {...register("username")} />
        <Input placeholder="email" {...register("email")} />
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <Button mt={4} type="submit" isLoading={isSubmitting}>
          Register
        </Button>
        <Button variant="ghost" onClick={() => push("/login")}>
          Login
        </Button>
      </VStack>
    </form>
  );
};
