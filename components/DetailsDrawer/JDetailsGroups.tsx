import {
  VStack,
  Heading,
  Grid,
  GridItem,
  Box,
  Divider,
} from "@chakra-ui/react";
import JDetail from "./JDetail";
import { JDetailsGroup } from "./JDetailsDrawer";
import React from "react";

export interface IJDetailGroupProps {
  detailGroups: JDetailsGroup[];
  data: any;
  Cell?: (value: any) => JSX.Element;
}

export default function JDetailGroup(props: IJDetailGroupProps) {
  const { detailGroups, data } = props;
  return (
    <Box>
      {detailGroups.map((group, i) => (
        <VStack mb={8} spacing={6} align="flex-start" key={i}>
          {group.label && (
            <Heading as="h5" size="sm">
              {group.label}
            </Heading>
          )}
          <Grid
            width="100%"
            templateColumns={group.templateColumns}
            templateRows={group.templateRows}
            gap={group.gap}
            columnGap={group.columnGap}
            rowGap={group.rowGap}
          >
            {group.details.map((detail, fIndex) => (
              <GridItem
                key={fIndex}
                rowSpan={detail.rowSpan}
                colSpan={detail.colSpan}
              >
                <JDetail data={data} detail={detail} />
              </GridItem>
            ))}
          </Grid>
          <Divider />
        </VStack>
      ))}
    </Box>
  );
}
