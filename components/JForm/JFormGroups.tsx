import { VStack, Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import { JFieldGroup } from ".";
import JInput from "./JInput";
import React from "react";

export interface IJFormGroupProps {
  fieldGroups: JFieldGroup[];
  onChange: (value: any) => void;
}

export default function JFormGroup(props: IJFormGroupProps) {
  const { fieldGroups, onChange } = props;
  return (
    <Box>
      {fieldGroups.map((group, i) => (
        <VStack key={i}>
          {group.label && <Heading color="black">{group.label}</Heading>}
          <Grid
            width="100%"
            templateColumns={group.templateColumns}
            templateRows={group.templateRows}
            gap={group.gap}
            columnGap={group.columnGap}
            rowGap={group.rowGap}
          >
            {group.fields.map((field, fIndex) => (
              <GridItem
                key={fIndex}
                rowSpan={field.rowSpan}
                colSpan={field.colSpan}
              >
                <JInput onChange={onChange} field={field} />
              </GridItem>
            ))}
          </Grid>
        </VStack>
      ))}
    </Box>
  );
}
