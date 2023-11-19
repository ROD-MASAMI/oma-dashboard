import { CursorPaging, LoginMutation } from "@/graphql/generated/graphql";
import dayjs from "dayjs";

export const saveLoginDetailsToLocalStorage = (login: LoginMutation) => {
  const { accessToken, expiresIn } = login.login;
  localStorage.setItem("accessToken", accessToken);
  // localStorage.setItem('user', JSON.stringify(user))
};

//logout clean local storage accessToken, refreshToken and user
export const removeUserDetailsFronLocalStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};

export const truncate = (str: string, max = 10) => {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? "..." : "";
  return array.slice(0, max).join(" ") + ellipsis;
};

export const dateFormatter = (date: string): string => {
  return dayjs(date).format("DD MMM YYYY");
};
export const getPageSize = (cursorPaging: CursorPaging) => {
  let pageSize: number;

  if (cursorPaging.hasOwnProperty("first")) {
    pageSize = cursorPaging.first as number;
  } else if (cursorPaging.hasOwnProperty("last")) {
    pageSize = cursorPaging.last as number;
  } else {
    pageSize = 10;
  }
  return pageSize;
};
