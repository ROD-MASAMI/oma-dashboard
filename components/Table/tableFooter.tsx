import { CursorPaging, PageInfo } from "@/graphql/generated/graphql";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
// import { CursorPaging, PageInfo } from "../../graphql/generated/graphql";
import React from "react";

export interface IPaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  pageInfo?: PageInfo | undefined;
}

export interface ITableFooterProps {
  page?: IPaginationProps | undefined;
  onChange?: (value?: number | CursorPaging) => void;
}

export default function TableFooter(props: ITableFooterProps) {
  const { page, onChange } = props;
  const handlePrevious = () => {
    //get to previous page if there is pageInfo
    const _paging: CursorPaging = {
      last: page?.pageSize,
      before: page?.pageInfo?.startCursor,
    };
    onChange!(_paging);
  };
  const handleNext = () => {
    //get to next page if there is pageInfo
    const _paging: CursorPaging = {
      first: page?.pageSize,
      after: page?.pageInfo?.endCursor,
    };
    onChange!(_paging);
  };
  return (
    <Box w="100%" as="div">
      {page && page.pageInfo && (
        <Flex alignItems="center" align="center">
          {page.pageInfo.hasPreviousPage && (
            <Button mr={6} onClick={() => handlePrevious()}>
              Previous
            </Button>
          )}
          {page.pageInfo.hasNextPage && (
            <Button onClick={() => handleNext()}>Next</Button>
          )}
        </Flex>
      )}
    </Box>
  );
}
