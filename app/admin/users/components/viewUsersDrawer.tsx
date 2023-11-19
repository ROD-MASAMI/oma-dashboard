import JDetailsDrawer, {
  JDetailsGroup,
} from "@/components/DetailsDrawer/JDetailsDrawer";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Switch,
  Select,
  Button,
} from "@chakra-ui/react";
import {
  CursorPaging,
  DepartmentsQuery,
  HealthProvidersQuery,
  SetUserAsDoctorMutation,
  SetUserAsDoctorMutationVariables,
  UserProfile,
  useDepartmentsQuery,
  useHealthProvidersQuery,
  useSetUserAsDoctorMutation,
} from "@/graphql/generated/graphql";
import { GQLErrors } from "@/utils/types/error";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { useQueryClient } from "@tanstack/react-query";

export interface IUserDetailsDrawerProps {
  isOpen: boolean;
  onClose(): void;
  data: UserProfile;
}

export default function UserDetailsDrawer(props: IUserDetailsDrawerProps) {
  const Client = useQueryClient();
  const { isOpen, onClose, data } = props;
  const [cursorPaging, setCursorPaging] = useState<CursorPaging>({ first: 20 });
  const [healthProvider, setHealthProvider] = useState<string>();
  const [department, setDepartment] = useState<string>();
  const [Doctor, setDocotor] = useState<boolean>(
    data?.role === "DOCTOR" ? true : false
  );
  const {
    data: healthProviders,
    isError,
    isLoading,
  } = useHealthProvidersQuery<HealthProvidersQuery, GQLErrors>(
    graphqlRequestClient,
    { filter: {}, paging: cursorPaging }
  );

  const { isLoading: assigning, mutate } =
    useSetUserAsDoctorMutation<GQLErrors>(graphqlRequestClient, {
      onSuccess: (
        data: SetUserAsDoctorMutation,
        _variables: SetUserAsDoctorMutationVariables,
        _context: unknown
      ) => {
        Client.invalidateQueries({
          queryKey: ["UserProfiles", { filter: {}, paging: cursorPaging }],
        });

        onClose();
      },
    });

  const fields: JDetailsGroup[] = [
    {
      label: "User details",
      rowGap: 6,
      columnGap: 6,

      templateColumns: "repeat(2, 1fr)",
      details: [
        {
          accessor: "firstName",
          label: "First Name",
          component: "text",
        },
        {
          accessor: "lastName",
          label: "Last Name",
          component: "text",
        },

        {
          accessor: "email",
          label: "Email",
          component: "text",
        },
        {
          accessor: "gender",
          label: "Gender",
          component: "text",
        },
        {
          accessor: "phoneNumber",
          label: "Phone",
          component: "text",
        },
      ],
    },
  ];

  const selectedProvider = healthProviders?.healthProviders.edges.find(
    (item) => item.node.id === healthProvider
  );

  return (
    <>
      <JDetailsDrawer
        isOpen={isOpen}
        drawerTitle={`User #${data?.id}`}
        onClose={onClose}
        data={data}
        detailsGroups={fields}
      >
        <>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Assign as doctor?
            </FormLabel>
            <Switch
              isChecked={Doctor}
              onChange={(e) => setDocotor((doctor) => !doctor)}
              id="email-alerts"
            />
          </FormControl>
          {Doctor && (
            <div className=" flex flex-col gap-5 mt-5">
              <>
                <p> Choose Health Provider</p>
                <Select
                  value={healthProvider}
                  onChange={(e) => setHealthProvider(e.target.value)}
                  placeholder="Select Health Provider"
                >
                  {healthProviders?.healthProviders.edges.map(
                    (provider, idx) => (
                      <option key={idx} value={provider.node.id}>
                        {provider.node.name}
                      </option>
                    )
                  )}
                </Select>
              </>
              {selectedProvider && (
                <>
                  <p>Choose Department</p>
                  <Select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Select Department"
                  >
                    {selectedProvider?.node.departments?.map(
                      (provider, idx) => (
                        <option key={idx} value={provider.id}>
                          {provider.name}
                        </option>
                      )
                    )}
                  </Select>
                </>
              )}
              {healthProvider && department && (
                <Button
                  disabled={assigning}
                  isLoading={assigning}
                  loadingText="Submitting"
                  bgColor="green"
                  onClick={() =>
                    mutate({
                      input: {
                        departmentId: Number(department),
                        providerIds: [Number(healthProvider)],
                        userId: Number(data.id),
                      },
                    })
                  }
                >
                  Assign As Doctor
                </Button>
              )}
            </div>
          )}
        </>
      </JDetailsDrawer>
    </>
  );
}
