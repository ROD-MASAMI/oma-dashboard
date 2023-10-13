import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useField } from "formik";
import * as React from "react";

export interface INumberFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  leftAddon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute | undefined;
}

export default function NumberField(props: INumberFieldProps): JSX.Element {
  const {
    name,
    label,
    leftAddon,
    placeholder,
    disabled,
    defaultValue,
    min,
    max,
    ...rest
  } = props;
  const [field, meta] = useField(props);
  return (
    <FormControl id={name} isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <FormLabel mb={1} htmlFor={props.name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
      {leftAddon && <InputLeftAddon >
        {leftAddon}
        </InputLeftAddon>
        }

        <NumberInput
          defaultValue={defaultValue}
          min={min}
          max={max}
          w="100%"
          focusBorderColor="primary.500"
          {...field}
        >
          <NumberInputField placeholder={placeholder} {...rest} {...field} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </InputGroup>
      {meta.error && meta.touched && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
