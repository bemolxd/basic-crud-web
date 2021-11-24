import React from "react";
import { VStack, Divider } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

import { Card } from "components/Card";

import { useMeQuery } from "modules/login/infrastructure";
import { useUserQuery } from "modules/users/infrastructure";
import { EditUserPayload } from "modules/settings/application";

import { EditUserSection } from "./EditUserSection";
import { NotificationsSection } from "./NotificationsSection";

export const GeneralTab = () => {
  const { data: me } = useMeQuery();
  const { data: user } = useUserQuery(me?.id!);

  const methods = useForm<EditUserPayload>({
    defaultValues: {
      userId: me?.id,
      username: user?.username,
      email: user?.email,
    },
  });

  return (
    <Card w="100%" h="100%">
      <VStack align="flex-start" spacing={4}>
        <FormProvider {...methods}>
          <EditUserSection user={user!} />
        </FormProvider>
        <Divider />
        <NotificationsSection />
      </VStack>
    </Card>
  );
};
