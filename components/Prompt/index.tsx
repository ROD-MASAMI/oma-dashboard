import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button } from '@chakra-ui/react';
import * as React from 'react';

export interface IPromptDialogProps {
    title?:string
    description?:string
    confirmText?:string
    cancelText?:string
    catchOnCancel?: boolean;
    
    
}

interface IDialogProps extends IPromptDialogProps {
    isOpen:boolean;
    onConfirm: () => void;
    onClose: () => void;
  }

export default function PromptDialog (props: IDialogProps) {
    const {isOpen, title, description, confirmText,cancelText, onConfirm, onClose} = props
    const cancelRef = React.useRef<any>()
  return (
    <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
  >
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          {title}
        </AlertDialogHeader>

        <AlertDialogBody>
         {description}
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
          {cancelText?cancelText:'Cencel'}
          </Button>
          <Button backgroundColor='primary.500' onClick={onConfirm} ml={3}>
            {confirmText?confirmText:'Confirm'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
  );
}
