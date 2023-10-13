import { Stack, Button, SystemProps, ResponsiveValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import JFormGroup from "./JFormGroups";
import React from "react";

export interface JFieldOption {
  key: any;
  value: any;
}

export interface JField {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type:
    | "text"
    | "email"
    | "password"
    | "number"
    | "location"
    | "select"
    | "datetime";
  rowSpan?: ResponsiveValue<number | "auto">;
  min?: number;
  max?: number;
  colSpan?: ResponsiveValue<number | "auto">;
  options?: JFieldOption[];
}

export interface JFieldGroup {
  name: string;
  label?: string;
  fields: JField[];
  templateRows?: SystemProps["gridTemplateRows"];
  templateColumns?: SystemProps["gridTemplateColumns"];
  gap?: SystemProps["gridGap"];
  columnGap?: SystemProps["gridColumnGap"];
  rowGap?: SystemProps["gridRowGap"];
}

export interface IJFormProps {
  onSubmit: (values: any) => void;
  initialValues: {};
  isLoading?: boolean;
  submitText: string;
  schema: any;
  fieldGroups: JFieldGroup[];
}

export default function JForm(props: IJFormProps) {
  const {
    onSubmit,
    initialValues,
    isLoading,
    submitText,
    fieldGroups,
    schema,
  } = props;
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values)}
      initialValues={initialValues}
    >
      {({ handleChange }) => (
        <Form>
          <Stack my={4} spacing={5}>
            <JFormGroup onChange={handleChange} fieldGroups={fieldGroups} />
          </Stack>
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            loadingText="Loading"
            bgColor="primary.500"
            type="submit"
          >
            {submitText}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
