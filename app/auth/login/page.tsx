"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import IAlert from "@/components/Alert";
import LoginForm from "./components/LoginForm";
import useAuth from "./useAuth";

const page = () => {
  const router = useRouter();
  const { mutate, isLoading, errors, isError } = useAuth();

  return (
    <div className=" flex  flex-col bg-slate-50 justify-center items-center min-h-[100vh] w-[100%] ">
      {isError && errors && <IAlert title={errors[0].message} type="error" />}

      <Text className=" text-3xl text-black">ADMIN PANEL</Text>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: "80%", lg: "40%" }}
        padding={10}
      >
        <Flex direction={"row"} justify={"center"}>
          {/* <Image
            width={150}
            height={60}
            src={"/Images/logo.png"}
            alt="Without placeholder"
          /> */}
          <Text className=" text-4xl"></Text>
        </Flex>

        <LoginForm onPress={(values) => mutate(values)} isLoading={isLoading} />
      </Box>
    </div>
  );
};

export default page;
