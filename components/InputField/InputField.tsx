import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useField } from "formik";
import * as React from "react";

export interface IInputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  leftAddon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute | undefined;
}

export default function InputField(props: IInputFieldProps): JSX.Element {
  const { name, label, leftAddon, placeholder, disabled, ...rest } = props;
  const [field, meta] = useField(props);
  return (
    <FormControl  id={name} isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <FormLabel mb={1} htmlFor={props.name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddon && 
        <InputLeftAddon >
          {leftAddon}
          </InputLeftAddon>
        }
        <Input
          disabled={disabled}
          placeholder={placeholder}
          focusBorderColor="primary.500"
          {...field}
          {...rest}
        />
      </InputGroup>
      {meta.error && meta.touched && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
