import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  ResponsiveValue,
  Stack,
  SystemProps,
} from "@chakra-ui/react";
import * as React from "react";
import JDetailGroup from "./JDetailsGroups";

export interface IDetailsDrawerProps {
  isOpen: boolean;
  onClose(): void;
  finalFocusRef?: React.RefObject<any>;
  drawerTitle: string;
  detailsGroups: JDetailsGroup[];
  data: any;
  children?: JSX.Element;
}

export interface JDetail {
  label?: string;
  accessor: string;
  Cell?: (value: any) => JSX.Element;
  component: "image" | "text" | "link" | "date" | "map";
  rowSpan?: ResponsiveValue<number | "auto">;
  colSpan?: ResponsiveValue<number | "auto">;
  secondaryAccessor?: string;
}

export interface JDetailsGroup {
  label?: string;
  Cell?: (value: any) => JSX.Element;
  details: JDetail[];
  templateRows?: SystemProps["gridTemplateRows"];
  templateColumns?: SystemProps["gridTemplateColumns"];
  gap?: SystemProps["gridGap"];
  columnGap?: SystemProps["gridColumnGap"];
  rowGap?: SystemProps["gridRowGap"];
}

export default function JDetailsDrawer(props: IDetailsDrawerProps) {
  const {
    isOpen,
    onClose,
    finalFocusRef,
    drawerTitle,
    detailsGroups,
    data,
    children,
  } = props;

  return (
    <Drawer
      size="lg"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{drawerTitle}</DrawerHeader>
        <DrawerBody>
          <Stack my={4} spacing={5}>
            {children && <Box mb={4}>{children}</Box>}
            <JDetailGroup data={data} detailGroups={detailsGroups} />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
