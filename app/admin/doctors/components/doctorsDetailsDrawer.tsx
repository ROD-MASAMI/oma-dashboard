import JDetailsDrawer, {
  JDetailsGroup,
} from "@/components/DetailsDrawer/JDetailsDrawer";
import React from "react";
import { Doctor } from "@/graphql/generated/graphql";

export interface IDoctorDetailsDrawerProps {
  isOpen: boolean;
  onClose(): void;
  data: Doctor;
}

export default function DoctorDetailsDrawer(props: IDoctorDetailsDrawerProps) {
  const { isOpen, onClose, data } = props;

  const fields: JDetailsGroup[] = [
    {
      label: "User details",
      rowGap: 6,
      columnGap: 6,

      templateColumns: "repeat(2, 1fr)",
      details: [
        {
          label: "First name",
          accessor: "userProfile.firstName",
          component: "text",
        },
        {
          label: "Last Name",
          accessor: "userProfile.lastName",
          component: "text",
        },
        {
          label: "Phone Number",
          accessor: "userProfile.phoneNumber",
          component: "text",
        },
        {
          label: "Email",
          accessor: "userProfile.email",
          component: "text",
        },
        {
          label: "Gender",
          accessor: "userProfile.gender",
          component: "text",
        },
      ],
    },
  ];

  return (
    <>
      <JDetailsDrawer
        isOpen={isOpen}
        drawerTitle={`Doctor #${data?.id}`}
        onClose={onClose}
        data={data}
        detailsGroups={fields}
      />
    </>
  );
}
