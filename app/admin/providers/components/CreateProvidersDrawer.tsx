import { JFieldGroup } from "@/components/JForm";
import JFormDrawer from "@/components/JForm/JFormDrawer";
import {
  CursorPaging,
  ProvidersMutation,
  ProvidersMutationVariables,
  useProvidersMutation,
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
const CreateProvidersDrawer = (props: ICreateHospitalDrawerProps) => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const { isOpen, onClose, btnRef, onCreated } = props;
  const Client = useQueryClient();

  const { isLoading, mutate } = useProvidersMutation<GQLErrors>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: ProvidersMutation,
        _variables: ProvidersMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["Providers", { filter: {}, paging: cursorPaging }],
        });
        onCreated(data);
        onClose();
      },
    }
  );

  const values = {
    name: "",
    description: "",
    type: "",
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
          label: "Provider Name",
          placeholder: "Provider Name",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          placeholder: "description",
          type: "text",
        },
        {
          name: "region",
          label: "Region",
          placeholder: "region",
          type: "text",
        },
        {
          name: "district",
          label: "District",
          placeholder: "district",
          type: "text",
        },
        {
          name: "type",
          label: "Type",
          placeholder: "Type",
          colSpan: 1,
          type: "text",
        },
      ],
    },
  ];
  const schema = object().shape({
    description: string().required("Please enter description"),
    name: string().required("Please enter Hospital name"),
    type: string().required("Please enter type"),
    region: string().required("Please enter region"),
    district: string().required("Please enter district"),
  });
  return (
    <JFormDrawer
      isOpen={isOpen}
      finalFocusRef={btnRef}
      drawerTitle="Create Health Provider"
      isLoading={isLoading}
      onClose={onClose}
      schema={schema}
      submitText="Save"
      onSubmit={(value) => mutate({ input: { healthProvider: value } })}
      initialValues={values}
      fieldGroups={fields}
    />
  );
};

export default CreateProvidersDrawer;
