import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  FormHelperText,
  HStack,
  Spacer
} from "@chakra-ui/react";
import { useField, useFormikContext } from "formik";
import * as React from "react";

export interface ILocationFieldProps {
  name: string;
  label?:  {
    label1: string;
    label2: string;
  };
  placeholder?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  leftAddon?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute | undefined;
}
const pattern = /^[-+]?[0-9]*\.?[0-9]*$/;
export default function LocationField(props: ILocationFieldProps): JSX.Element {
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
  const formContext = useFormikContext();
  return (
    <FormControl id={name} isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <HStack>
        <FormLabel mb={1} htmlFor={props.name}>
          {label.label1}
        </FormLabel>
        <Spacer maxWidth={240}/>
        <FormLabel mb={1} htmlFor={props.name}>
          {label.label2}
        </FormLabel>
        </HStack>
      )}
      <InputGroup gridGap={6}>
        {leftAddon && <InputLeftAddon >
        {leftAddon}
        </InputLeftAddon>
        }
        <Input
    
          disabled={disabled}
          placeholder="Latitude"
          focusBorderColor="primary.500"
          {...{
            ...field,
            value: field.value ? field.value["latitude"] : undefined,
          }}
          {...rest}
          onChange={(val) =>{
            if((pattern.test(val.target.value))){
              formContext.setFieldValue(props.name, {
                ...field.value,
                latitude: val.target.value,
              })
            }
         
          }}
        />
        
        <Input

          disabled={disabled}
          placeholder="Longitude"
          focusBorderColor="primary.500"
          {...{
            ...field,
            value: field.value ? field.value["longitude"] : undefined,
          }}
          {...rest}
          onChange={(val) =>{
            if((pattern.test(val.target.value))){
              formContext.setFieldValue(props.name, {
                ...field.value,
                longitude: val.target.value,
              })
            }
         
          }}
        />
      </InputGroup>
      {meta.error && meta.touched && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}



