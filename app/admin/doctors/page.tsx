"use client";
import {
  CursorPaging,
  Doctor,
  DoctorsQuery,
  UserProfile,
  UserProfilesQuery,
  useDoctorsQuery,
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
import DoctorDetailsDrawer from "./components/doctorsDetailsDrawer";

const page = () => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const [page, setPaging] = useState<IPaginationProps>();
  const [users, setUsers] = useState<Doctor[]>([]);
  const [user, setUser] = useState<Doctor>();
  const [detailDrawer, openDetailsDrawer] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const { data, isError, isLoading } = useDoctorsQuery<DoctorsQuery, GQLErrors>(
    graphqlRequestClient
  );
  useEffect(() => {
    const _users: Doctor[] = data ? data.doctors : [];
    setUsers(_users);
  }, [data]);
  const onNew = () => {
    setUser(undefined);
    onOpen();
  };
  const onEdit = (value: Doctor) => {
    setUser(value);
    onOpen();
  };

  const handleCloseDetailsDrawer = () => {
    setUser(undefined);
    openDetailsDrawer(false);
  };
  const handleOpenDetailsDrawer = (user: Doctor) => {
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
      accessor: "userProfile.firstName",
      width: 5,
      clickable: true,
    },
    {
      Header: "Last Name",
      accessor: "userProfile.lastName",
      width: 5,
      clickable: true,
    },
    {
      Header: "Phone Number",
      accessor: "userProfile.phoneNumber",
      width: 10,
      clickable: true,
    },
    {
      Header: "Email",
      accessor: "userProfile.email",
      width: 5,
      clickable: true,
    },
    {
      Header: "Gender",
      accessor: "userProfile.gender",
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
        <DoctorDetailsDrawer
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
          onRowClick={(row: Doctor) => handleOpenDetailsDrawer(row)}
          columns={columns}
          title="Doctors"
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
