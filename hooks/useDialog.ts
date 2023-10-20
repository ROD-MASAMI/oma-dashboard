"use client";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";

const useDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("");
  const [dialogAction, setAction] = useState<() => void>(() => {});

  const onSubmit = () => {
    dialogAction();
  };

  return {
    isOpen,
    onClose,
    onOpen,
    onSubmit,
    title,
    description,
    buttonText,
    setButtonText,
    setDescription,
    setTitle,
    setAction,
  };
};

export default useDialog;
