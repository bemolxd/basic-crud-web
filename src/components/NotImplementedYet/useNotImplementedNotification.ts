import { useToast } from "@chakra-ui/toast";

export const useNotImplementedNotification = () => {
  const toast = useToast();
  const toastId = "not-implemented-notification";

  return () => {
    if (!toast.isActive(toastId)) {
      return toast({
        id: toastId,
        title: "Funkcjonalność niedostępna",
        description: "Ta funkcjonalność nie została jeszcze wdrożona",
        status: "info",
        variant: "subtle",
        isClosable: true,
      });
    }
  };
};
