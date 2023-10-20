import {
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTable, useSortBy, Column } from "react-table";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import React from "react";
import TableFooter, { IPaginationProps } from "./tableFooter";
import TableHead from "./tableHeader";
import { CursorPaging } from "@/graphql/generated/graphql";

export interface IDataTableProps {
  title: string;
  data: any[];
  columns: Column<any>[];
  onRowClick?: ((row: any) => void) | undefined;
  loading: boolean;
  buttonTitle?: string | undefined;
  buttonIcon?: React.ReactElement | undefined;
  onSearch?: (value: string | undefined) => void;
  page?: IPaginationProps;
  onButtonClick?: () => void;
  onChange?: (value?: number | CursorPaging) => void;
  onMoreItems: (value: CursorPaging) => void;
}

const index = (props: IDataTableProps) => {
  const {
    title,
    data,
    columns,
    onRowClick,
    loading,
    buttonTitle,
    buttonIcon,
    onSearch,
    page,
    onButtonClick,
    onChange,
    onMoreItems,
  } = props;
  const rowColor = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const headerColor = useColorModeValue("green.100", "green.300");
  const _data = React.useMemo<any[]>(() => data, [data]);
  const _columns = React.useMemo<Column<any>[]>(() => columns, [columns]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: _columns,
        data: _data,
        //  defaltSortBy: true
      },
      useSortBy
    );
  const style: React.CSSProperties = {
    borderSpacing: "0 10px",
    borderCollapse: "separate",
    borderRadius: "8px",
  };
  const rowStyle: React.CSSProperties = {
    backgroundColor: rowColor,
  };
  return (
    <Stack w="100%" marginBottom={6}>
      <TableHead
        onButtonClick={onButtonClick ? () => onButtonClick() : undefined}
        onSearch={(val) => onSearch && onSearch(val)}
        icon={buttonIcon}
        buttonTitle={buttonTitle}
        title={title}
        onMoreItems={(value) => onMoreItems(value)}
        data={data}
        columns={columns}
        buttonColorScheme="blue"
      />
      <TableContainer>
        <Table variant="none" style={style} {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup, idx) => (
              <Tr
                key={idx}
                height={14}
                backgroundColor={headerColor}
                // {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column: any) => (
                  <Th
                    key={column}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render("Header")}
                    <chakra.span pl="4">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <Tr
                  key={idx}
                  cursor="pointer"
                  backgroundColor={rowColor}
                  style={rowStyle}
                  // {...row.getRowProps()}
                  padding={10}
                >
                  {row.cells.map((cell: any) => {
                    return (
                      <Td
                        color="black"
                        key={cell}
                        onClick={() =>
                          onRowClick && cell.column.clickable
                            ? onRowClick!(row.original)
                            : null
                        }
                        width={`${cell.column.width}%`}
                        minW={`${cell.column.minWidth}%`}
                        {...cell.getCellProps()}
                        isNumeric={cell.column.isNumeric}
                      >
                        {loading ? (
                          <Skeleton height="20px" />
                        ) : (
                          cell.render("Cell")
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TableFooter page={page} onChange={onChange} />
    </Stack>
  );
};

export default index;
