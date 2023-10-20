"use client";
import React from "react";
import { useDashboardContext } from "./Provider";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { removeUserDetailsFronLocalStorage } from "@/utils/helpers";
import { useRouter } from "next/navigation";

export function TopBar() {
  const router = useRouter();
  const { openSidebar } = useDashboardContext();
  const logout = () => {
    removeUserDetailsFronLocalStorage();
    router.push("/");
  };
  return (
    <header className="relative z-10 h-20 w-full items-center bg-[#1EAEA2]">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={openSidebar}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem
                  onClick={() => logout()}
                  color="black"
                  icon={<WarningTwoIcon color="red.400" />}
                >
                  Log out
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
