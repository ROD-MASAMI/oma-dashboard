import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Box,
  Grid,
  Center,
  HStack,
  IconButton,
  VStack,
  Heading,
  InputProps,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineFastForward, HiOutlineRewind } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { daysMap, getMonthDetails, getMonthStr } from "./functions";
import dayjs from "dayjs";
import React from "react";
import { useField } from "formik";

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
  Date.now() -
  (Date.now() % oneDay) +
  new Date().getTimezoneOffset() * 1000 * 60;

export interface IDatePickerProps {
  dateFormat?: string;
  onChange?: any;
  name: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  label?: string;
  disabled?: boolean;
}

export default function DatePicker(props: IDatePickerProps) {
  const { name, label, onChange, dateFormat = "DD/MM/YYYY", ...rest } = props;
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;
  let date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [monthDetails, setMonthDetails] = useState(
    getMonthDetails(year, month)
  );
  const [selectedDay, setSelectedDay] = useState();

  const isCurrentDay = (day: any) => {
    return day.timestamp === todayTimestamp;
  };
  const isSelectedDay = (day: any) => {
    return day.timestamp === selectedDay;
  };

  const getDateStringFromTimestamp = (timestamp: number) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return dayjs(
      dateObject.getFullYear() +
        "-" +
        (month < 10 ? "0" + month : month) +
        "-" +
        (date < 10 ? "0" + date : date)
    ).format(dateFormat);
  };

  const onDateClick = (day: any) => {
    setSelectedDay(day.timestamp);
    setValue(getDateStringFromTimestamp(day.timestamp));
    if (onChange) {
      onChange(day.timestamp);
    }
  };

  const setYearAction = (offset: number) => {
    setYear(year + offset);
    setMonthDetails(getMonthDetails(year + offset, month));
  };

  const setMonthAction = (offset: number) => {
    let _year = year;
    let _month = month + offset;
    if (_month === -1) {
      _month = 11;
      _year--;
    } else if (_month === 12) {
      _month = 0;
      _year++;
    }
    setYear(_year);
    setMonth(_month);
    setMonthDetails(getMonthDetails(_year, _month));
  };
  return (
    <Menu>
      <MenuButton w="100%" type="button">
        {label && (
          <FormLabel mb={1} htmlFor={props.name}>
            {label}
          </FormLabel>
        )}
        <FormControl id={name} isInvalid={!!meta.error && !!meta.touched}>
          <InputGroup>
            <Input {...field} {...rest} />
            <InputRightElement>
              <ChevronDownIcon w={5} h={5} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </MenuButton>
      <MenuList>
        <Center p={3}>
          <HStack>
            <IconButton
              variant="ghost"
              aria-label="datepicker left button"
              onClick={() => setYearAction(-1)}
              icon={<HiOutlineRewind />}
            />
            <IconButton
              variant="ghost"
              aria-label="datepicker left button"
              onClick={() => setMonthAction(-1)}
              icon={<IoIosArrowBack />}
            />
            <VStack align="center">
              <Button variant="ghost" size="none">
                <Heading m={0} fontWeight={200} as="h5">
                  {year}
                </Heading>
              </Button>
              <Button
                variant="ghost"
                size="none"
                py="0px"
                margin="0px !important"
              >
                {getMonthStr(month).toUpperCase()}
              </Button>
            </VStack>
            <IconButton
              variant="ghost"
              aria-label="datepicker right button"
              onClick={() => setMonthAction(1)}
              icon={<IoIosArrowForward />}
            />
            <IconButton
              variant="ghost"
              aria-label="datepicker right button"
              onClick={() => setYearAction(1)}
              icon={<HiOutlineFastForward />}
            />
          </HStack>
        </Center>
        <Box p={3}>
          {/* <Grid align="center" templateColumns="repeat(7, 1fr)" gap={3}> */}
          <Grid templateColumns="repeat(7, 1fr)" gap={3}>
            {daysMap.map((d, i) => (
              <Text key={i} w="100%">
                {d.substring(0, 3).toLocaleUpperCase()}
              </Text>
            ))}
          </Grid>
        </Box>
        <Box p={3}>
          <Grid templateColumns="repeat(7, 1fr)" gap={3}>
            {monthDetails.map((day, index) => {
              return (
                <Button
                  disabled={day?.month !== 0}
                  backgroundColor={
                    isCurrentDay(day)
                      ? "primary.500"
                      : isSelectedDay(day) && day?.month === 0
                      ? "secondary.500"
                      : ""
                  }
                  variant="ghost"
                  size="sm"
                  key={index}
                  onClick={() => onDateClick(day)}
                >
                  {day?.date}
                </Button>
              );
            })}
          </Grid>
        </Box>
      </MenuList>
    </Menu>
  );
}
