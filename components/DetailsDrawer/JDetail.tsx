import { JDetail } from "./JDetailsDrawer";
import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { dateFormatter } from "@/utils/helpers";

export interface IJInputProps {
  detail: JDetail;
  data: any;
}

export default function JInput(props: IJInputProps): JSX.Element {
  const { detail, data } = props;

  const getDataValue = (d: any, accessor: string) => {
    return accessor.split(".").reduce((acc, curr) => acc && acc[curr], d);
  };
  return (
    <VStack spacing={detail.component === "image" ? 4 : 0} align="flex-start">
      <Text color="gray.400" fontSize="xs">
        {detail.label?.toLocaleUpperCase()}
      </Text>
      {detail.component === "text" &&
        (detail.Cell ? (
          detail.Cell(
            getDataValue(data, detail.accessor)
              ? getDataValue(data, detail.accessor)
              : "-"
          )
        ) : (
          <Text>
            {getDataValue(data, detail.accessor)
              ? getDataValue(data, detail.accessor)
              : "-"}
          </Text>
        ))}
      {detail.component === "date" &&
        (detail.Cell ? (
          detail.Cell(
            getDataValue(data, detail.accessor)
              ? getDataValue(data, detail.accessor)
              : "-"
          )
        ) : (
          <Text>
            {getDataValue(data, detail.accessor)
              ? dateFormatter(getDataValue(data, detail.accessor))
              : "-"}
          </Text>
        ))}
    </VStack>
  );
}
