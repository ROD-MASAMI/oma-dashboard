import { CursorPaging, LoginMutation } from "@/graphql/generated/graphql";

export const saveLoginDetailsToLocalStorage = (login: LoginMutation) => {
  const { accessToken, expiresIn } = login.login;
  localStorage.setItem("accessToken", accessToken);
  // localStorage.setItem('user', JSON.stringify(user))
};

export const truncate = (str: string, max = 10) => {
  const array = str.trim().split(" ");
  const ellipsis = array.length > max ? "..." : "";
  return array.slice(0, max).join(" ") + ellipsis;
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
