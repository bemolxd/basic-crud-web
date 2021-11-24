import React, { useState } from "react";
import {
  VStack,
  HStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  ButtonGroup,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

import { useEditUserDetails } from "modules/settings/infrastructure";
import { User } from "modules/users/application";
import { EditUserPayload } from "modules/settings/application";

interface IProps {
  user: User;
}

export const EditUserSection = ({ user }: IProps) => {
  const [editUser, status] = useEditUserDetails();
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useFormContext<EditUserPayload>();

  return (
    <>
      <VStack w="100%" align="flex-start">
        <Heading fontSize="lg">Ogólne</Heading>
        <Text color="gray.500">Podstawowe informacje o koncie</Text>
      </VStack>
      <Divider />
      <VStack w="100%" align="flex-start" spacing={4}>
        <form style={{ width: "100%" }}>
          <HStack w="100%">
            <FormControl>
              <FormLabel>Nazwa użytkownika</FormLabel>
              <Input
                defaultValue={user.username}
                isDisabled={!edit}
                variant={!edit ? "filled" : "outline"}
                {...register("username")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Adres e-mail</FormLabel>
              <Input
                defaultValue={user.email}
                isDisabled
                variant="filled"
                {...register("email")}
                // isDisabled={!edit}
                // variant={!edit ? "filled" : "outline"}
              />
            </FormControl>
          </HStack>
        </form>
        <HStack w="100%">
          <Spacer />
          {edit ? (
            <ButtonGroup>
              <Button
                onClick={() => {
                  handleSubmit(
                    async (data) => await editUser({ ...data, userId: user.id })
                  )();
                  setEdit(false);
                }}
                isLoading={status}
                variant="outline"
                colorScheme="teal"
              >
                Zapisz
              </Button>
              <Button
                onClick={() => setEdit(false)}
                variant="ghost"
                colorScheme="orange"
              >
                Anuluj
              </Button>
            </ButtonGroup>
          ) : (
            <Button onClick={() => setEdit(true)}>Edytuj</Button>
          )}
        </HStack>
      </VStack>
    </>
  );
};
