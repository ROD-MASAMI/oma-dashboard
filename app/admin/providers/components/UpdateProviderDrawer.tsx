import { JFieldGroup } from "@/components/JForm";
import JFormDrawer from "@/components/JForm/JFormDrawer";
import {
  CursorPaging,
  HealthProvider,
  UpdateOneHealthProviderMutation,
  UpdateOneHealthProviderMutationVariables,
  useUpdateOneHealthProviderMutation,
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
  provider: HealthProvider;
}
const UpdateProviderDrawer = (props: IUpdateProviderDrawerProps) => {
  const { isOpen, onClose, btnRef, onUpdated, provider } = props;
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const Client = useQueryClient();

  const { isLoading, mutate } = useUpdateOneHealthProviderMutation<GQLErrors>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: UpdateOneHealthProviderMutation,
        _variables: UpdateOneHealthProviderMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["Providers", { filter: {}, paging: cursorPaging }],
        });
        onUpdated(data);
        onClose();
      },
    }
  );

  const values = {
    name: provider?.name,
    description: provider?.description,
    type: provider?.type,
    region: provider?.region,
    district: provider?.district,
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
    region: string().required("Please enter Region"),
    district: string().required("Please enter District"),
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

export default UpdateProviderDrawer;
