import {
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

export interface IdialogProps {
  isOpen: boolean;
  onClose: () => void;
  actionText: string;
  onPress: () => void;
  title: string;
  description: string;
}

export default function AlertDialog(props: IdialogProps) {
  const { isOpen, onPress, onClose, title, description, actionText } = props;

  const cancelRef = React.useRef();

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{description}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={onPress}>{actionText}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
