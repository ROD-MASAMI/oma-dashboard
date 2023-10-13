import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import { useField } from "formik";
import * as React from "react";
import { JFieldOption } from "../JForm";

export interface ISelectFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  leftAddon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute | undefined;
  options?: JFieldOption[];
}

export default function SelectField(props: ISelectFieldProps): JSX.Element {
  const { name, label, leftAddon, options, placeholder, disabled, ...rest } =
    props;
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

        <Select
          disabled={disabled}
          {...field}
          {...rest}
          placeholder={placeholder}
          name={name}
        >
          {options &&
            options.map((option, i) => (
              <option key={i} value={option.key}>
                {option.value}
              </option>
            ))}
        </Select>
      </InputGroup>
      {meta.error && meta.touched && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
