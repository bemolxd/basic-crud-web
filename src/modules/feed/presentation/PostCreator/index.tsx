import { useState } from "react";

import { Input } from "@chakra-ui/react";

import { Card } from "components/Card";

import { CreatePostForm } from "./CreatePostForm";

export const PostCreator = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card>
      {!open ? (
        <Input
          variant="filled"
          placeholder="Co Ci chodzi po głowie?"
          borderRadius="full"
          onClick={() => setOpen(true)}
        />
      ) : (
        <CreatePostForm setOpen={setOpen} />
      )}
    </Card>
  );
};
