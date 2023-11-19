"use client";
import {
  CursorPaging,
  UserProfile,
  UserProfilesQuery,
  useUserProfilesQuery,
} from "@/graphql/generated/graphql";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import React, { useEffect, useState } from "react";
import { GQLErrors } from "../../../utils/types/error";
import DataTable from "../../../components/Table";
import { BsPersonPlus } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiPencil, BiTrash } from "react-icons/bi";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { IPaginationProps } from "@/components/Table/tableFooter";
import { getPageSize } from "@/utils/helpers";
import useDialog from "@/hooks/useDialog";
import AlertDialog from "@/components/Dialog";
import UserDetailsDrawer from "./components/viewUsersDrawer";
const page = () => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const [page, setPaging] = useState<IPaginationProps>();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [user, setUser] = useState<UserProfile>();
  const [detailDrawer, openDetailsDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const { data, isError, isLoading } = useUserProfilesQuery<
    UserProfilesQuery,
    GQLErrors
  >(graphqlRequestClient, {
    paging: cursorPaging,
    filter: { role: { eq: "PATIENT" } },
  });
  useEffect(() => {
    const _users: UserProfile[] = data
      ? data.userProfiles.edges.map((d) => d.node as UserProfile)
      : [];
    setUsers(_users);
    setPaging({
      currentPage: 1,
      pageSize: getPageSize(cursorPaging),
      totalItems: 10,
      pageInfo: data?.userProfiles.pageInfo,
    });
  }, [data]);
  const onNew = () => {
    setUser(undefined);
    onOpen();
  };
  const onEdit = (value: UserProfile) => {
    setUser(value);
    onOpen();
  };

  const handleCloseDetailsDrawer = () => {
    setUser(undefined);
    openDetailsDrawer(false);
  };
  const handleOpenDetailsDrawer = (user: UserProfile) => {
    setUser(user);
    openDetailsDrawer(true);
  };
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      width: 5,
      clickable: true,
    },

    {
      Header: "First name",
      accessor: "firstName",
      width: 5,
      clickable: true,
    },
    {
      Header: "Last Name",
      accessor: "lastName",
      width: 5,
      clickable: true,
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
      width: 10,
      clickable: true,
    },
    {
      Header: "Email",
      accessor: "email",
      width: 5,
      clickable: true,
    },
    {
      Header: "Gender",
      accessor: "gender",
      width: 5,
      clickable: true,
    },

    {
      Header: "Actions",
      accessor: (row: UserProfile) => row,
      width: 5,
      sortable: false,
      TableHeadProps: {
        style: {
          textAlign: "right",
        },
      },
      Cell: ({ cell: { value } }: any) => (
        <Flex justifyContent="flex-end" direction="row">
          <Menu colorScheme="blue">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FiMoreHorizontal />}
              variant="outline"
              color="black"
            />
            <MenuList>
              <MenuItem
                onClick={() => handleOpenDetailsDrawer(value)}
                icon={<BiPencil />}
              >
                View
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ),
    },
  ];
  return (
    <>
      <Box>
        <UserDetailsDrawer
          isOpen={detailDrawer}
          onClose={handleCloseDetailsDrawer}
          data={user!}
        />

        <DataTable
          onButtonClick={onNew}
          onSearch={(val) => console.log(val!)}
          loading={isLoading}
          data={users}
          page={page}
          onRowClick={(row: UserProfile) => handleOpenDetailsDrawer(row)}
          columns={columns}
          title="Users"
          onMoreItems={(value: CursorPaging) => {
            setCursorPaging(value);
          }}
          onChange={(value: number | CursorPaging | undefined) => {
            setCursorPaging(value as CursorPaging);
          }}
        />
      </Box>
    </>
  );
};

export default page;
