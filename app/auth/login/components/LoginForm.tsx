import InputField from "@/components/InputField";
import { Stack, Checkbox, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";
interface LoginFormProps {
  isLoading: boolean;
  onPress: (values: any) => void;
}
const LoginForm = (props: LoginFormProps) => {
  const { isLoading, onPress } = props;
  const schema = object().shape({
    identifier: string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: string().required("Please enter your password"),
  });
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        onPress(values);
      }}
      initialValues={{ identifier: "", password: "" }}
    >
      {(_) => (
        <Form>
          <Stack my={4} spacing={5}>
            <InputField placeholder="Email" name="identifier" type="email" />
            <InputField
              disabled={isLoading}
              placeholder="Password"
              name="password"
              type="password"
            />
            <Button
              //   disabled={isLoading}
              isLoading={isLoading}
              loadingText="Logging in"
              //   bgColor="#1EAEA2"
              type="submit"
              variant="solid"
              className=" bg-[#1EAEA2]"
            >
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
