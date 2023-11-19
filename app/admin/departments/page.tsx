"use client";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DataTable from "../../../components/Table";
import { IPaginationProps } from "@/components/Table/tableFooter";
import {
  CursorPaging,
  Department,
  DepartmentsQuery,
  HealthProvider,
  HealthProvidersQuery,
  useDepartmentsQuery,
  useHealthProvidersQuery,
} from "@/graphql/generated/graphql";
import { BsPersonPlus } from "react-icons/bs";
import { getPageSize, truncate } from "@/utils/helpers";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { GQLErrors } from "@/utils/types/error";
import { BiPencil, BiTrash } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import CreateDepartmentDrawer from "./components/CreateDepartmentDrawer";
import UpdateDepartmentDrawer from "./components/UpdateDepartmentDrawer";

const page = () => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const [page, setPaging] = useState<IPaginationProps>();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [department, setDepartment] = useState<Department>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { data, isError, isLoading } = useDepartmentsQuery<
    DepartmentsQuery,
    GQLErrors
  >(graphqlRequestClient, { filter: {}, paging: cursorPaging });

  useEffect(() => {
    const _departments: Department[] = data
      ? data.departments.edges.map((d) => d.node as Department)
      : [];
    setDepartments(_departments);
    setPaging({
      currentPage: 1,
      pageSize: getPageSize(cursorPaging),
      totalItems: 10,
      pageInfo: data?.departments.pageInfo,
    });
  }, [data]);

  const onNew = () => {
    setDepartment(undefined);
    onOpen();
  };
  const onEdit = (value: Department) => {
    setDepartment(value);
    onOpen();
  };
  const onDelete = (department: Department) => {
    // setButtonText("Delete");
    // setTitle("Confirm Deletion");
    // setDescription(
    //   `You are about to delete health provider ${provider.name}, are you sure you want to confirm?`
    // );
    // setAction(() => console.log("deleted"));
    // openDialog();
  };
  const handleCloseDetailsDrawer = () => {};
  const handleOpenDetailsDrawer = (provider: Department) => {};

  const columns = [
    {
      Header: "ID",
      accessor: "id",
      width: 5,
      clickable: true,
    },

    {
      Header: "Department name",
      accessor: "name",
      width: 5,
      clickable: true,
    },
    {
      Header: "Description",
      accessor: "description",
      width: 10,
      clickable: true,
      Cell: ({ cell: { value } }: any) => <Text>{truncate(value, 5)}</Text>,
    },

    {
      Header: "Actions",
      accessor: (row: HealthProvider) => row,
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
              <MenuItem onClick={() => onEdit(value)} icon={<BiPencil />}>
                Edit
              </MenuItem>
              <MenuItem onClick={() => onDelete(value)} icon={<BiTrash />}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ),
    },
  ];

  return (
    <Box>
      <CreateDepartmentDrawer
        onCreated={(data) => console.log(data)}
        isOpen={!department && isOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
      <UpdateDepartmentDrawer
        onUpdated={(data) => console.log(data)}
        isOpen={department! && isOpen}
        onClose={onClose}
        btnRef={btnRef}
        provider={department!}
      />

      <DataTable
        onButtonClick={onNew}
        buttonIcon={<BsPersonPlus />}
        buttonTitle="New Department"
        onSearch={(val) => console.log(val!)}
        loading={isLoading}
        data={departments}
        page={page}
        onRowClick={(row: Department) => handleOpenDetailsDrawer(row)}
        columns={columns}
        title="Departments"
        onMoreItems={(value: CursorPaging) => {
          setCursorPaging(value);
        }}
        onChange={(value: number | CursorPaging | undefined) => {
          setCursorPaging(value as CursorPaging);
        }}
      />
    </Box>
  );
};

export default page;
