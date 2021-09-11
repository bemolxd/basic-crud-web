import React from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";

import {
  EditPostPayload,
  useEditPostModalStore,
} from "modules/feed/application";
import { useEditPost } from "modules/feed/infrastructure";

import { EditPostForm } from "./EditPostForm";

export const EditPostModal = () => {
  const [selectedItem, onClose, isOpen] = useEditPostModalStore((state) => [
    state.selectedItem,
    state.onClose,
    state.isOpen,
  ]);

  const methods = useForm<EditPostPayload>();
  const { handleSubmit, reset } = methods;

  const [editPost] = useEditPost();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="600px" w="100%">
        <ModalHeader>Edytuj post</ModalHeader>
        <ModalBody p={4}>
          <FormProvider {...methods}>
            <EditPostForm post={selectedItem} />
          </FormProvider>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button
              variant="outline"
              color="teal"
              colorScheme="teal"
              onClick={() => {
                handleSubmit(
                  async (data) =>
                    await editPost({ ...data, id: selectedItem.id })
                )();
                reset();
                onClose();
              }}
            >
              Zapisz
            </Button>
            <Button
              variant="ghost"
              color="gray.600"
              onClick={() => {
                reset();
                onClose();
              }}
            >
              Anuluj
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
