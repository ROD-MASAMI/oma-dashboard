import { JFieldGroup } from "@/components/JForm";
import JFormDrawer from "@/components/JForm/JFormDrawer";
import {
  CreateDepartmentMutation,
  CreateDepartmentMutationVariables,
  CursorPaging,
  useCreateDepartmentMutation,
} from "@/graphql/generated/graphql";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { GQLErrors } from "@/utils/types/error";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { object, string } from "yup";

export interface ICreateHospitalDrawerProps {
  isOpen: boolean;
  onClose(): void;
  btnRef?: React.RefObject<any>;
  onCreated: (values: any) => void;
}

const CreateDepartmentDrawer = (props: ICreateHospitalDrawerProps) => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const { isOpen, onClose, btnRef, onCreated } = props;
  const Client = useQueryClient();

  const { isLoading, mutate } = useCreateDepartmentMutation<GQLErrors>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: CreateDepartmentMutation,
        _variables: CreateDepartmentMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["Departments", { filter: {}, paging: cursorPaging }],
        });
        onCreated(data);
        onClose();
      },
    }
  );

  const values = {
    name: "",
    description: "",
  };

  const fields: JFieldGroup[] = [
    {
      name: "customer",
      rowGap: 6,
      columnGap: 6,

      templateColumns: "repeat(2, 1fr)",
      fields: [
        {
          name: "name",
          label: "Department Name",
          placeholder: "Department Name",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          placeholder: "description",
          type: "text",
        },
      ],
    },
  ];
  const schema = object().shape({
    description: string().required("Please enter description"),
    name: string().required("Please enter Department name"),
  });
  return (
    <JFormDrawer
      isOpen={isOpen}
      finalFocusRef={btnRef}
      drawerTitle="Create Department"
      isLoading={isLoading}
      onClose={onClose}
      schema={schema}
      submitText="Save"
      onSubmit={(value) => mutate({ input: { department: value } })}
      initialValues={values}
      fieldGroups={fields}
    />
  );
};

export default CreateDepartmentDrawer;
