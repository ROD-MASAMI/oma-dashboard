import { JField } from ".";
import { Text } from "@chakra-ui/react";
import DatePicker from "../Datepicker";
import SelectField from "../InputField/SelectField";
import PasswordField from "../InputField/PasswordField";
import InputField from "../InputField/InputField";
import NumberField from "../InputField/NumberField";

import React from "react";

export interface IJInputProps {
  field: JField;
  onChange: (value: any) => void;
}

export default function JInput(props: IJInputProps): JSX.Element {
  const { field, onChange } = props;

  switch (field.type) {
    case "text":
      return (
        <InputField
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
          label={field.label}
        />
      );
    case "password":
      return (
        <PasswordField
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
          label={field.label}
        />
      );
    case "number":
      return (
        <NumberField
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
          min={field.min}
          max={field.max}
          label={field.label}
        />
      );
    case "select":
      return (
        <SelectField
          placeholder={field.placeholder}
          name={field.name}
          type={field.type}
          options={field.options}
          label={field.label}
        />
      );
    case "datetime":
      return (
        <DatePicker
          placeholder={field.placeholder}
          label={field.label}
          type={field.type}
          name={field.name}
          onChange={(date: any) => null}
        />
      );
    default:
      return <Text>Field not found</Text>;
  }
}
