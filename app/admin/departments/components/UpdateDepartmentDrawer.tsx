import { JFieldGroup } from "@/components/JForm";
import JFormDrawer from "@/components/JForm/JFormDrawer";
import {
  CursorPaging,
  Department,
  UpdateOneDepartmentMutation,
  UpdateOneDepartmentMutationVariables,
  useUpdateOneDepartmentMutation,
} from "@/graphql/generated/graphql";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { GQLErrors } from "@/utils/types/error";
import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { object, string } from "yup";
export interface IUpdateProviderDrawerProps {
  isOpen: boolean;
  onClose(): void;
  btnRef?: React.RefObject<any>;
  onUpdated: (values: any) => void;
  provider: Department;
}
const UpdateDepartmentDrawer = (props: IUpdateProviderDrawerProps) => {
  const { isOpen, onClose, btnRef, onUpdated, provider } = props;
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const Client = useQueryClient();

  const { isLoading, mutate } = useUpdateOneDepartmentMutation<GQLErrors>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: UpdateOneDepartmentMutation,
        _variables: UpdateOneDepartmentMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["Departments", { filter: {}, paging: cursorPaging }],
        });
        onUpdated(data);
        onClose();
      },
    }
  );

  const values = {
    name: provider?.name,
    description: provider?.description,
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
    name: string().required("Please enter Hospital name"),
  });
  return (
    <JFormDrawer
      isOpen={isOpen}
      finalFocusRef={btnRef}
      drawerTitle={`Update ${provider?.name}`}
      isLoading={isLoading}
      onClose={onClose}
      schema={schema}
      submitText="Save"
      onSubmit={(value) =>
        mutate({ input: { update: value, id: provider?.id } })
      }
      initialValues={values}
      fieldGroups={fields}
    />
  );
};

export default UpdateDepartmentDrawer;
