import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as React from "react";
import { JFieldGroup } from ".";
import JFormGroup from "./JFormGroups";

export interface IJFormModalProps {
  onSubmit: (values: any) => void;
  initialValues: any;
  isLoading?: boolean;
  submitText: string;
  schema: any;
  fieldGroups: JFieldGroup[];
  isOpen: boolean;
  onClose(): void;
  finalFocusRef?: React.RefObject<any>;
  drawerTitle: string;
}

export default function JFormModal(props: IJFormModalProps) {

  const {
    onSubmit,
    initialValues,
    isLoading,
    submitText,
    fieldGroups,
    schema,
    isOpen,
    onClose,
    finalFocusRef,
    drawerTitle,
  } = props;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) =>{ 
        onSubmit(values)}}
      initialValues={initialValues}
      enableReinitialize={true}
    >
      {({handleChange}) => (
        
          <Modal
            size="lg"
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={finalFocusRef}
          >
            <ModalOverlay />
            <ModalContent>
            <Form>
              <ModalCloseButton />
              <ModalHeader>{drawerTitle}</ModalHeader>
              <ModalBody>
                <Stack my={4} spacing={5}>
                  <JFormGroup fieldGroups={fieldGroups} onChange={handleChange} />
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  disabled={isLoading}
                  isLoading={isLoading}
                  loadingText="Submitting"
                  bgColor="primary.500"
                  type="submit"
                >
                  {submitText}
                </Button>
              </ModalFooter>
              </Form>
            </ModalContent>
          </Modal>
     
      )}
    </Formik>
  );
}
