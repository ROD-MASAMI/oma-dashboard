import { JFieldGroup, JFieldOption } from "@/components/JForm";
import JFormDrawer from "@/components/JForm/JFormDrawer";
import {
  AssignDepartmentToProviderMutation,
  AssignDepartmentToProviderMutationVariables,
  CursorPaging,
  Department,
  DepartmentsQuery,
  ProvidersMutation,
  ProvidersMutationVariables,
  useAssignDepartmentToProviderMutation,
  useDepartmentsQuery,
  useProvidersMutation,
} from "@/graphql/generated/graphql";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { GQLErrors } from "@/utils/types/error";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { object, string } from "yup";
export interface ICreateHospitalDrawerProps {
  isOpen: boolean;
  onClose(): void;
  btnRef?: React.RefObject<any>;
  onCreated: (values: any) => void;
}

type payload = {
  description: string;
  district: string;
  name: string;
  region: string;
  type: string;
  department: string;
};
const CreateProvidersDrawer = (props: ICreateHospitalDrawerProps) => {
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 10 });
  const [departmentId, setDepartmentId] = useState<String>("");
  const [options, setOptions] = useState<JFieldOption[]>([]);
  const { isOpen, onClose, btnRef, onCreated } = props;
  const Client = useQueryClient();
  const {
    data,
    isError,
    isLoading: departmentLoading,
  } = useDepartmentsQuery<DepartmentsQuery, GQLErrors>(graphqlRequestClient, {
    filter: {},
    paging: cursorPaging,
  });

  useEffect(() => {
    const _departments: Department[] = data
      ? data.departments.edges.map((d) => d.node as Department)
      : [];
    setOptions(
      _departments.map((item) => {
        return {
          key: item.id,
          value: item.name,
        };
      })
    );
  }, [data]);
  const { isLoading: isPending, mutate: AssignDepartment } =
    useAssignDepartmentToProviderMutation<GQLErrors>(graphqlRequestClient, {
      onSuccess: (
        data: AssignDepartmentToProviderMutation,
        _variables: AssignDepartmentToProviderMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["Providers", { filter: {}, paging: cursorPaging }],
        });
        onCreated(data);
        onClose();
      },
    });

  const { isLoading, mutate } = useProvidersMutation<GQLErrors>(
    graphqlRequestClient,
    {
      onSuccess: (
        data: ProvidersMutation,
        _variables: ProvidersMutationVariables,
        _context: unknown
      ) => {
        AssignDepartment({
          input: {
            departmentIds: [Number(departmentId)],
            providerId: Number(data.createOneHealthProvider.id),
          },
        });
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
          colSpan: 1,
          placeholder: "Type",
          options: [
            { value: "HOSPITALS", key: "HOSPITALS" },
            { value: "POLYCLINICS", key: "POLYCLINICS" },
            { value: "HEALTH CENTER", key: "HEALTH_CENTER" },
            {
              value: "SPECIALIZED POLYCLINICS",
              key: "SPECIALIZED_POLYCLINICS",
            },
            { value: "OTHERS", key: "OTHERS" },
          ],
          type: "select",
        },
        {
          name: "department",
          label: "Department",
          colSpan: 1,
          placeholder: "Department",
          options: options,
          type: "select",
        },
      ],
    },
  ];

  const onSubmit = (value: payload) => {
    const { department, ...data } = value;
    const data2 = { data };
    setDepartmentId(department);
    mutate({ input: { healthProvider: data } });
  };

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
      onSubmit={(value: payload) => onSubmit(value)}
      initialValues={values}
      fieldGroups={fields}
    />
  );
};

export default CreateProvidersDrawer;
