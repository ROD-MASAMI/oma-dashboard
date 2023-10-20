"use client";
import {
  CursorPaging,
  HealthProvider,
  HealthProvidersQuery,
  useHealthProvidersQuery,
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
import CreateProvidersDrawer from "./components/CreateProvidersDrawer";
import UpdateProviderDrawer from "./components/UpdateProviderDrawer";
import { usePromptDialog } from "@/components/Prompt/PromptService";
import useDialog from "@/hooks/useDialog";
import AlertDialog from "@/components/Dialog";
const page = () => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const [page, setPaging] = useState<IPaginationProps>();
  const [healthProviders, setHealthProviders] = useState<HealthProvider[]>([]);
  const [healthProvider, setHealthProvider] = useState<HealthProvider>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    setAction,
    setTitle,
    setDescription,
    setButtonText,
    onOpen: openDialog,
    title,
    description,
    buttonText,
    onSubmit,
    isOpen: isDialog,
    onClose: closeDialog,
  } = useDialog();
  const btnRef = React.useRef();
  const { data, isError, isLoading } = useHealthProvidersQuery<
    HealthProvidersQuery,
    GQLErrors
  >(graphqlRequestClient, { filter: {}, paging: cursorPaging });
  useEffect(() => {
    const _hospitals: HealthProvider[] = data
      ? data.healthProviders.edges.map((d) => d.node as HealthProvider)
      : [];
    setHealthProviders(_hospitals);
    setPaging({
      currentPage: 1,
      pageSize: getPageSize(cursorPaging),
      totalItems: 10,
      pageInfo: data?.healthProviders.pageInfo,
    });
  }, [data]);
  const onNew = () => {
    setHealthProvider(undefined);
    onOpen();
  };
  const onEdit = (value: HealthProvider) => {
    setHealthProvider(value);
    onOpen();
  };
  const onDelete = (provider: HealthProvider) => {
    setButtonText("Delete");
    setTitle("Confirm Deletion");
    setDescription(
      `You are about to delete health provider ${provider.name}, are you sure you want to confirm?`
    );
    setAction(() => console.log("deleted"));
    openDialog();
  };
  const handleCloseDetailsDrawer = () => {};
  const handleOpenDetailsDrawer = (provider: HealthProvider) => {};
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      width: 5,
      clickable: true,
    },

    {
      Header: "Provider name",
      accessor: "name",
      width: 5,
      clickable: true,
    },
    {
      Header: "Region",
      accessor: "region",
      width: 5,
      clickable: true,
    },

    {
      Header: "Type",
      accessor: "type",
      width: 5,
      clickable: true,
    },
    {
      Header: "Description",
      accessor: "description",
      width: 10,
      clickable: true,
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
    <>
      <Box>
        <CreateProvidersDrawer
          onCreated={(data) => console.log(data)}
          isOpen={!healthProvider && isOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
        <UpdateProviderDrawer
          onUpdated={(data) => console.log(data)}
          isOpen={healthProvider! && isOpen}
          onClose={onClose}
          btnRef={btnRef}
          provider={healthProvider!}
        />

        <DataTable
          onButtonClick={onNew}
          buttonIcon={<BsPersonPlus />}
          buttonTitle="New Provider"
          onSearch={(val) => console.log(val!)}
          loading={isLoading}
          data={healthProviders}
          page={page}
          onRowClick={(row: HealthProvider) => handleOpenDetailsDrawer(row)}
          columns={columns}
          title="Health Providers"
          onMoreItems={(value: CursorPaging) => {
            setCursorPaging(value);
          }}
          onChange={(value: number | CursorPaging | undefined) => {
            setCursorPaging(value as CursorPaging);
          }}
        />
      </Box>
      <AlertDialog
        isOpen={isDialog}
        onClose={closeDialog}
        title={title}
        description={description}
        onPress={() => window.alert("deleted")}
        actionText={buttonText}
      />
    </>
  );
};

export default page;
