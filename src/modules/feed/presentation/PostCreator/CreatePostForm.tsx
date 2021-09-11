import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { NewPostPayload } from "modules/feed/application";
import { useCreatePost } from "modules/feed/infrastructure";
import { useMeQuery } from "modules/login/infrastructure";

interface IProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CreatePostForm = ({ setOpen }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewPostPayload>({
    defaultValues: {
      title: "",
      body: "",
      images: [],
    },
  });

  const [createPost] = useCreatePost();
  const { data: me } = useMeQuery();

  return (
    <VStack align="flex-end" spacing={4}>
      <Box w="100%">
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack>
            <Input
              placeholder="Tytuł posta (opcjonalnie)"
              borderRadius="full"
              {...register("title")}
            />
            <Textarea
              placeholder="Co Ci chodzi po głowie?"
              borderRadius="lg"
              {...register("body")}
            />
          </Stack>
        </form>
      </Box>
      <ButtonGroup>
        <Button
          variant="ghost"
          colorScheme="blue"
          colo="blue"
          isLoading={isSubmitting}
          onClick={handleSubmit(async (data) => {
            await createPost({ ...data, authorId: me?.id! });
            setOpen(false);
            reset();
          })}
        >
          Opublikuj
        </Button>
        <Button
          variant="ghost"
          colorScheme="blue"
          colo="blue"
          onClick={() => {
            setOpen(false);
            reset();
          }}
        >
          Anuluj
        </Button>
      </ButtonGroup>
    </VStack>
  );
};
