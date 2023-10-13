import { useContext, createContext, useState, useRef } from "react";
import PromptDialog, { IPromptDialogProps } from ".";
import React from "react";

const PromptDialogServiceContext = createContext<
  (options: IPromptDialogProps) => Promise<void>
>(Promise.reject);

export const usePromptDialog = () => useContext(PromptDialogServiceContext);

export const PromptDialogServiceProvider = ({ children }: any) => {
  const [promptDialogState, setPromptDialogState] =
    useState<IPromptDialogProps | null>(null);

  const awaitingPromiseRef = useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openProptDialog = (options: IPromptDialogProps) => {
    setPromptDialogState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (promptDialogState?.catchOnCancel && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setPromptDialogState(null);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setPromptDialogState(null);
  };

  return (
    <>
       <PromptDialogServiceContext.Provider
        value={openProptDialog}       
      >
        {children}
        </PromptDialogServiceContext.Provider>

      <PromptDialog
        isOpen={Boolean(promptDialogState)}
        onConfirm={handleSubmit}
        onClose={handleClose}
        {...promptDialogState}
      />
    </>
  );
};
