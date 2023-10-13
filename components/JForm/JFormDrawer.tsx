import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as React from "react";
import { JFieldGroup } from ".";
import JFormGroup from "./JFormGroups";

export interface IJFormDrawerProps {
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

export default function JFormDrawer(props: IJFormDrawerProps) {
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
      onSubmit={(values) => {
        onSubmit(values);
      }}
      initialValues={initialValues}
      enableReinitialize={true}
    >
      {({ handleChange }) => (
        <Drawer
          size="lg"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={finalFocusRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Form>
              <DrawerCloseButton />
              <DrawerHeader>{drawerTitle}</DrawerHeader>
              <DrawerBody>
                <Stack my={4} spacing={5}>
                  <JFormGroup
                    fieldGroups={fieldGroups}
                    onChange={handleChange}
                  />
                </Stack>
              </DrawerBody>

              <DrawerFooter>
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
              </DrawerFooter>
            </Form>
          </DrawerContent>
        </Drawer>
      )}
    </Formik>
  );
}
