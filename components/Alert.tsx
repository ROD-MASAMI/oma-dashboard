import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export type alertType = "error" | "success" | "info";
interface IAlertProps {
  title: string;
  type: alertType;
}

const IAlert = (props: IAlertProps) => {
  const { title, type } = props;
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  return (
    <div className=" p-5">
      {isVisible && (
        <Alert status={type} variant="solid">
          <AlertIcon />
          <Box>
            <AlertTitle>{type}</AlertTitle>
            <AlertDescription>{title}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      )}
    </div>
  );
};

export default IAlert;
