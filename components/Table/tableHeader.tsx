import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Box,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { BiFilter } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { Column } from "react-table";
import { CursorPaging } from "@/graphql/generated/graphql";

export interface ITableHeadProps {
  title?: string | undefined;
  buttonTitle?: string | undefined;
  buttonColorScheme?: string | undefined;
  icon?: React.ReactElement | undefined;
  onSearch?: (value: string | undefined) => void;
  onButtonClick?: () => void;
  onMoreItems: (value: CursorPaging) => void;
  data: any[];
  columns: Column<any>[];
}

export default function TableHead(props: ITableHeadProps) {
  const {
    title,
    buttonTitle,
    icon,
    onSearch,
    onButtonClick,
    buttonColorScheme,
    onMoreItems,
    data,
    columns,
  } = props;
  const headers = columns
    ?.map((item) => {
      if (item.Header === "Actions") {
        return null;
      }
      return {
        label: item.Header,
        key: item.accessor,
      };
    })
    .filter(Boolean);
  return (
    <Box w="100%" as="div">
      <Flex
        direction={{ base: "column", xl: "row" }}
        alignItems={{ base: "flex-start", xl: "center" }}
        // align="center"
      >
        {title && (
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
        )}

        {buttonTitle && (
          <Button
            onClick={onButtonClick ? () => onButtonClick() : undefined}
            ml={8}
            leftIcon={icon}
            colorScheme={buttonColorScheme}
          >
            {buttonTitle}
          </Button>
        )}

        <Spacer />
        <HStack spacing={4}>
          <InputGroup width="250px">
            <Input
              placeholder="Search"
              onChange={(e) => onSearch && onSearch(e?.target?.value)}
            />
            <InputRightElement zIndex={-1}>
              <SearchIcon color="primary.500" />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
  );
}
